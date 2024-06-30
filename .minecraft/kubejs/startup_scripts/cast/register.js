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

                    let size = null;
                    Object.keys(global.castTypes).some(key => {
                        if (id.includes(key)) {
                            size = global.castTypes[key].size;
                            return true;
                        };
                    });

                    if (size == null) {
                        console.warn(pos + ": Not a valid cast type??");
                        return;
                    };

                    const nbt = entity.serializeNBT();
                    const data = nbt?.data;
                    
                    if (nbt == null
                        || data == null
                        || data.nugget_count == null
                        || data.metal_inside == null) {
                        console.warn(pos + ": Malformed NBT data??");
                        return;
                    };

                    if (data.nugget_count < size) {
                        return; // not enough metal
                    };

                    const blockBelow = level.getBlock(pos.below());
                    const meltChance = global.castHeatSource[blockBelow.id];
                    if (meltChance == null || Math.random() <= meltChance) {
                        return; // not a heat source or chance did not proc
                    };

                    const index = global.metalIndexMapping[data.metal_inside];
                    if (index == null) {
                        console.warn(pos + ": Invalid metal (no index)??");
                        return;
                    };

                    const metal = global.moltenMetals[index];
                    if (metal == null) {
                        console.warn(pos + ": Invalid metal (index pointing nowhere)??");
                        return;
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