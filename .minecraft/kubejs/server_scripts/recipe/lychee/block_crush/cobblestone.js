ServerEvents.recipes(event => {
    LycheeUtils.register(
        event, 
        BlockCrushingRecipe.construct("minecraft:cobblestone"),
        [
            RecipePost.dropItem("minecraft:gravel"),
            RecipePost.random(1, 1, [
                RecipePost.break().setWeight(6),
                RecipePost.dropItem("kubejs:coal_bit").setWeight(5),
                RecipePost.dropItem("kubejs:iron_bit").setWeight(4),
                RecipePost.dropItem("kubejs:tin_bit").setWeight(3),
                RecipePost.dropItem("kubejs:copper_bit").setWeight(2)
            ])
        ]
    );
});