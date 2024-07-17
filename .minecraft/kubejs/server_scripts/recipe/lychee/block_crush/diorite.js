ServerEvents.recipes(event => {
    LycheeUtils.register(
        event, 
        BlockCrushingRecipe.construct("minecraft:diorite"),
        [
            RecipePost.dropItem("minecraft:gravel"),
            RecipePost.random(1, 1, [
                RecipePost.break().setWeight(6),
                RecipePost.dropItem("2x kubejs:coal_bit"),
                RecipePost.dropItem("3x kubejs:coal_bit"),
                RecipePost.dropItem("kubejs:tin_bit").setWeight(3),
                RecipePost.dropItem("2x kubejs:tin_bit").setWeight(2)
            ])
        ]
    );
});