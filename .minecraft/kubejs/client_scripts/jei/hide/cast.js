
// Hide all cast-related recipes
JEIEvents.removeRecipes(event => {
    global.casts.forEach(cast => {
        cast.types.forEach(type => {
            const size = global.castTypes[type].size;
            event.remove("minecraft:crafting", `kubejs:empty_${cast.id}_${type}`);
            global.moltenMetals.forEach(metal => {
                if (metal.temp > cast.maxTemp) {
                    return;
                };

                for (let i = 0; i < 8; i++) {
                    event.remove("minecraft:crafting", `kubejs:fill_${metal.coolId}_${cast.id}_${type}_${i}`);
                };

                metal.items.forEach(item => {
                    if (!item.nbt) {
                        return;
                    };

                    for (let i = 0; i < Math.floor(size / item.count); i++) {
                        event.remove("minecraft:crafting", `kubejs:fill_${metal.coolId}_${cast.id}_${type}_${item.recipeId}_${i}`);
                    };
                });
            });
        });
    });
});