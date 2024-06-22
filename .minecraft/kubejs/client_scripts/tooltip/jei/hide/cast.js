
// Hide all cast-related recipes
JEIEvents.removeRecipes(event => {
    global.casts.forEach(cast => {
        event.remove("minecraft:crafting", `kubejs:empty_cast_${cast.id}`);
        global.moltenMetals.forEach(metal => {
            if (metal.temp > cast.maxTemp) {
                return;
            };

            metal.items.forEach(item => {
                for (let i = 1; i <= Math.min(8, Math.floor(9 / item.count)); i++) {
                    event.remove("minecraft:crafting", `kubejs:fill_cast_${cast.id}_${metal.id}_${item.count}${i}`);
                };
            });
        });
    });
});