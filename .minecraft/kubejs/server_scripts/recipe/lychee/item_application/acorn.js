(function(){
    const acorns = [
        {
            id: "kubejs:oak_acorn",
            sapling: "minecraft:oak_sapling",
            soil: "#minecraft:dirt"
        },
        {
            id: "kubejs:birch_acorn",
            sapling: "minecraft:birch_sapling",
            soil: "#minecraft:dirt"
        },
        {
            id: "kubejs:dark_oak_acorn",
            sapling: "minecraft:dark_oak_sapling",
            soil: "#minecraft:dirt"
        },
        {
            id: "kubejs:jungle_acorn",
            sapling: "minecraft:jungle_sapling",
            soil: "#minecraft:dirt"
        },
        {
            id: "kubejs:acacia_acorn",
            sapling: "minecraft:acacia_sapling",
            soil: "#minecraft:dirt"
        },
        {
            id: "kubejs:spruce_acorn",
            sapling: "minecraft:spruce_sapling",
            soil: "#minecraft:dirt"
        }
    ];

    ServerEvents.recipes(event => {
        acorns.forEach(acorn => {
            ItemApplicationRecipe.register(event, acorn.id, acorn.soil, [
                RecipePost.placeBlock(0, 1, 0, acorn.sapling)
            ], [
                ContextualCondititions.location(0, 1, 0, {
                    block: {
                        blocks: ["minecraft:air"]
                    }
                }),
                ContextualCondititions.direction("up")
            ]);
        });
    });
})();