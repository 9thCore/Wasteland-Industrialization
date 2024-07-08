ServerEvents.recipes(event => {
    LycheeUtils.register(
        event,
        BlockClickRecipe.construct("kubejs:pebble_sharp", "minecraft:dead_bush"),
        [
            RecipePost.preventDefault(),
            RecipePost.destroyBlock(),
            RecipePost.dropItem("kubejs:dry_fiber"),
            RecipePost.random(1, 1, [
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.dropItem("kubejs:dry_fiber")
            ]),
            RecipePost.random(1, 1, [
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.dropItem("kubejs:dry_fiber")
            ])
        ]
    );
});