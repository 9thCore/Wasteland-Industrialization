(function() {
    const tools = ["axe", "sword", "pickaxe", "shovel", "hoe"];
    const prefixes = ["minecraft:wooden_", "minecraft:stone_"];

    ServerEvents.recipes(event => {
        prefixes.forEach(prefix => {
            tools.forEach(tool => {
                event.remove(prefix + tool);
            })
        });
    });
})();