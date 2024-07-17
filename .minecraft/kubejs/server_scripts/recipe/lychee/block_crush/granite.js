ServerEvents.recipes(event => {
    LycheeUtils.register(
        event, 
        BlockCrushingRecipe.construct("minecraft:granite"),
        [
            RecipePost.dropItem("minecraft:gravel"),
            RecipePost.random(1, 1, [
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.dropItem("kubejs:coal_bit"),
                RecipePost.dropItem("2x kubejs:copper_bit"),
                RecipePost.dropItem("kubejs:copper_bit"),
                RecipePost.dropItem("4x kubejs:copper_bit")
            ])
        ]
    );
});