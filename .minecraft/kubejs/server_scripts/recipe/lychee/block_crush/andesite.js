ServerEvents.recipes(event => {
    LycheeUtils.register(
        event, 
        BlockCrushingRecipe.construct("minecraft:andesite"),
        [
            RecipePost.dropItem("minecraft:gravel"),
            RecipePost.random(1, 1, [
                RecipePost.break().setWeight(6),
                RecipePost.dropItem("2x kubejs:coal_bit").setWeight(2),
                RecipePost.dropItem("2x kubejs:iron_bit").setWeight(2),
                RecipePost.dropItem("kubejs:iron_bit").setWeight(2),
                RecipePost.dropItem("3x kubejs:iron_bit")
            ])
        ]
    );
});