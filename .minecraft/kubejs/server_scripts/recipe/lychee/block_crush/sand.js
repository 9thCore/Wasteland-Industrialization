ServerEvents.recipes(event => {
    BlockCrushingRecipe.register(event, "minecraft:gravel", null, null, [
        RecipePost.dropItem("minecraft:sand"),
        RecipePost.random(1, 1, [
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.dropItem("kubejs:iron_bit"),
            RecipePost.dropItem("kubejs:coal_bit"),
            RecipePost.dropItem("kubejs:coal_bit"),
            RecipePost.dropItem("kubejs:copper_bit")
        ])
    ]);
});