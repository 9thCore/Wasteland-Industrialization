(function() {
    const swords = [
        "minecraft:iron_sword",
        "minecraft:diamond_sword",
        "minecraft:netherite_sword"
    ]

    ServerEvents.recipes(event => {
        LycheeUtils.register(
            event,
            BlockClickRecipe.construct("kubejs:pebble_sharp", "minecraft:dead_bush"),
            [
                RecipePost.preventDefault(),
                RecipePost.destroyBlock(),
                RecipePost.dropItem("kubejs:dry_fiber"),
                RecipePost.random(1, 1, [
                    RecipePost.break().setWeight(5),
                    RecipePost.dropItem("kubejs:dry_fiber")
                ]),
                RecipePost.random(1, 1, [
                    RecipePost.break().setWeight(8),
                    RecipePost.dropItem("kubejs:dry_fiber")
                ])
            ]
        );
        
        swords.forEach(sword => {
            LycheeUtils.register(
                event,
                BlockClickRecipe.construct(sword, "minecraft:dead_bush"),
                [
                    RecipePost.preventDefault(),
                    RecipePost.damageItem(),
                    RecipePost.destroyBlock(),
                    RecipePost.dropItem("kubejs:dry_fiber"),
                    RecipePost.random(1, 1, [
                        RecipePost.break().setWeight(3),
                        RecipePost.dropItem("kubejs:dry_fiber")
                    ]),
                    RecipePost.random(1, 1, [
                        RecipePost.break().setWeight(6),
                        RecipePost.dropItem("kubejs:dry_fiber")
                    ]),
                    RecipePost.random(1, 1, [
                        RecipePost.break().setWeight(9),
                        RecipePost.dropItem("kubejs:dry_fiber")
                    ])
                ]
            );
        });
        
    });
})();