// priority: 100

(function() {
    /**
     * 
     * @param {Object} event 
     * @param {Object} material 
     * @param {String} material.id
     * @param {String} material.displayName
     * @param {String} material.texture
     * @param {String} texture 
     */
    const registerCast = function(event, material) {
        material.types.forEach(type => {
            const typedef = global.castTypes[type];
            global.moltenMetals.forEach(metal => {
                if (metal.temp <= material.maxTemp) {
                    typedef.modifier(registerFilledCast(
                        event,
                        `kubejs:${metal.id}_${material.id}_${type}`,
                        `${material.displayName} ${typedef.displayName} (${metal.displayName})`,
                        material.texture,
                        metal.fluidTexture,
                        type
                    ).randomTick(e => {
                        const level = e.getLevel();
                        const pos = e.block.getPos();
                        level.setBlockAndUpdate(pos, Block.id(`kubejs:${metal.coolId}_${material.id}_${type}`).getBlockState());
                        level.runCommandSilent(`playsound minecraft:block.lava.extinguish block @a ${pos.x} ${pos.y} ${pos.z} 0.5 1.0`);
                    }));

                    typedef.modifier(registerCooledCast(
                        event,
                        `kubejs:${metal.coolId}_${material.id}_${type}`,
                        `${material.displayName} ${typedef.displayName} (${metal.cooledDisplayName})`,
                        material.texture,
                        metal.cooledTexture,
                        type
                    ));
                };
            });
        });
    };

    global.getCastNBT = function() {
        return {
            metal_inside: null,
            nugget_count: 0
        };
    };

    StartupEvents.registry("block", event => {
        global.casts.forEach(cast => {
            registerCast(event, cast);
        });
    });

    StartupEvents.registry("item", event => {
        global.casts.forEach(cast => {
            cast.types.forEach(type => {
                registerBaseCast(event, `kubejs:${cast.id}_${type}`, cast.texture, type);
            });
        });
    });
})();