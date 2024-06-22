// priority: 100

/**
 * 
 * @param {Object} event 
 * @param {Object} material 
 * @param {String} material.id
 * @param {String} material.displayName
 * @param {String} material.texture
 * @param {String} texture 
 */
const registerIngotCast = function(event, material) {
    global.moltenMetals.forEach(metal => {
        if (metal.temp <= material.maxTemp) {
            registerFilledIngotCast(
                event,
                `kubejs:${metal.id}_${material.id}_${material.type}`,
                `${material.displayName} Ingot Cast (${metal.displayName})`,
                material.texture,
                metal.fluidTexture
            ).randomTick(e => {
                const level = e.getLevel();
                const pos = e.block.getPos();
                level.setBlockAndUpdate(pos, Block.id(`kubejs:${metal.coolId}_${material.id}_${material.type}`).getBlockState());
                level.runCommandSilent(`playsound minecraft:block.lava.extinguish block @a ${pos.x} ${pos.y} ${pos.z} 0.5 1.0`);
            });

            registerCooledIngotCast(
                event,
                `kubejs:${metal.coolId}_${material.id}_${material.type}`,
                `${material.displayName} Ingot Cast (${metal.cooledDisplayName})`,
                material.texture,
                metal.cooledTexture
            );
        };
    });
};

global.getCastNBT = function() {
    return {
        metal_inside: null,
        nugget_count: 0
    }
}

StartupEvents.registry("block", event => {
    global.casts.forEach(cast => {
        registerIngotCast(event, cast);
    });
});

StartupEvents.registry("item", event => {
    registerBaseIngotCast(event, `kubejs:clay_ingot_cast`, "minecraft:block/clay");
    global.casts.forEach(cast => {
        registerBaseIngotCast(event, `kubejs:${cast.id}_${cast.type}`, cast.texture);
    })
});