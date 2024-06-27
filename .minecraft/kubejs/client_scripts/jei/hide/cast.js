
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

                metal.items.forEach(item => {
                    for (let i = 1; i <= Math.min(8, Math.floor(size / item.count)); i++) {
                        event.remove("minecraft:crafting", `kubejs:fill_${metal.coolId}_${cast.id}_${type}_${i}${item.recipeId}`);
                    };
                });
            });
        });
    });
});