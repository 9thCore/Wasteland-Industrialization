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
                `kubejs:${metal.id}_${material.id}_ingot_cast`,
                `${material.displayName} Ingot Cast (${metal.displayName})`,
                material.texture,
                metal.fluidTexture
            );

            registerCooledIngotCast(
                event,
                `kubejs:cool_${metal.id}_${material.id}_ingot_cast`,
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
        registerBaseIngotCast(event, `kubejs:${cast.id}_ingot_cast`, cast.texture);
    })
});