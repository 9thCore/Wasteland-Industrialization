// priority: 100

(function() {
    /**
     * 
     * @param {Object} event 
     * @param {Object} material 
     * @param {String} material.id
     * @param {String} material.displayName
     * @param {String} material.cooledDisplayName
     * @param {String} material.texture
     * @param {String} material.fluidTexture
     * @param {String} material.cooledTexture
     * @param {String} texture 
     */
    const registerCast = function(event, material) {
        material.types.forEach(type => {
            const typedef = global.castTypes[type];
            global.moltenMetals.forEach(metal => {
                if (metal.temp <= material.maxTemp) {
                    typedef.modifier(
                        registerFilledCast(
                            event,
                            `kubejs:${metal.id}_${material.id}_${type}`,
                            `${material.displayName} ${typedef.displayName} (${metal.displayName})`,
                            material.texture,
                            metal.fluidTexture,
                            type
                        )
                        .randomTick(e => {
                            const level = e.getLevel();
                            const pos = e.block.getPos();
                            const blockBelow = level.getBlock(pos.below());
                            if (global.castHeatSource[blockBelow.id]) {
                                return; // cannot cool a metal on a heat source :)
                            };

                            level.setBlockAndUpdate(pos, Block.id(`kubejs:${metal.coolId}_${material.id}_${type}`).getBlockState());
                            level.runCommandSilent(`playsound minecraft:block.lava.extinguish block @a ${pos.x} ${pos.y} ${pos.z} 0.5 1.0`);
                        })
                    );

                    typedef.modifier(
                        registerCooledCast(
                            event,
                            `kubejs:${metal.coolId}_${material.id}_${type}`,
                            `${material.displayName} ${typedef.displayName} (${metal.cooledDisplayName})`,
                            material.texture,
                            metal.cooledTexture,
                            type
                        )
                        .rightClick(e => {
                            const block = e.block;
                            block.popItemFromFace(metal.results[type], Direction.UP);
                            e.level.setBlockAndUpdate(block.pos, Block.id(`kubejs:${material.id}_${type}`).getBlockState());
                        })
                    );
                };
            });
            
            typedef.modifier(
                registerBaseCast(
                    event,
                    `kubejs:${material.id}_${type}`,
                    material.texture,
                    type
                )
                .rightClick(e => {
                    const player = e.player;
                    const item = player.getMainHandItem();
                    const cap = item.getCapability(ForgeCapabilities.FLUID_HANDLER_ITEM);

                    cap.ifPresent(c => {
                        const tank = c.getFluidInTank(0);
                        if (tank.isEmpty() || tank.amount < 90) {
                            // Not enough to drain out
                            return;
                        }

                        const id = tank.fluid.arch$registryName();
                        global.moltenMetals.some(metal => {
                            if (id.getPath().includes(metal.id)) {
                                c.drain(Fluid.of(id.toString(), 90), "execute");
                                e.level.setBlockAndUpdate(e.block.pos, Block.id(`kubejs:${metal.id}_${material.id}_${type}`).getBlockState());
                                return true;
                            };
                        });
                    });
                })
                .randomTick(e => {
                    const level = e.level;
                    const block = e.block;
                    const id = block.id;
                    const pos = block.pos;
                    const entity = block.entity;
                    if (entity == null) {
                        console.warn(pos + ": BlockEntity missing??");
                        return;
                    }

                    const size = global.castTypes[type].size;
                    const nbt = entity.serializeNBT();
                    const data = nbt?.data;
                    
                    if (nbt == null
                        || data == null
                        || data.nugget_count == null) {
                        // console.warn(pos + ": Malformed NBT data??");
                        return;
                    };

                    if (data.metal_inside == null) {
                        return; // no metal
                    }

                    if (data.nugget_count < size) {
                        return; // not enough metal
                    };

                    const blockBelow = level.getBlock(pos.below());
                    const meltChance = global.castHeatSource[blockBelow.id];
                    if (meltChance == null || Math.random() <= meltChance) {
                        return; // not a heat source or chance did not proc
                    };

                    level.setBlockAndUpdate(pos, Block.id(`kubejs:${metal.id}_${id.substring(7)}`).getBlockState());
                    level.runCommandSilent(`playsound minecraft:block.lava.extinguish block @a ${pos.x} ${pos.y} ${pos.z} 0.5 1.0`);
                })
                .blockEntity(() => {}) // used to not lose solid matter data on block placement
            );
        });
    };

    global.getCastNBT = function() {
        return {
            BlockEntityTag: {
                data: {
                    metal_inside: null,
                    nugget_count: 0
                }
            }
        };
    };

    StartupEvents.registry("block", event => {
        global.casts.forEach(cast => {
            registerCast(event, cast);
        });
    });
})();