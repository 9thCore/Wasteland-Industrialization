ServerEvents.recipes(event => {
    LycheeUtils.register(
        event, 
        BlockCrushingRecipe.construct("minecraft:andesite"),
        [
            RecipePost.dropItem("minecraft:gravel"),
            RecipePost.random(1, 1, [
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.dropItem("2x kubejs:coal_bit"),
                RecipePost.dropItem("2x kubejs:coal_bit"),
                RecipePost.dropItem("2x kubejs:iron_bit"),
                RecipePost.dropItem("2x kubejs:iron_bit"),
                RecipePost.dropItem("kubejs:iron_bit"),
                RecipePost.dropItem("3x kubejs:iron_bit"),
                RecipePost.dropItem("kubejs:iron_bit")
            ])
        ]
    );
});