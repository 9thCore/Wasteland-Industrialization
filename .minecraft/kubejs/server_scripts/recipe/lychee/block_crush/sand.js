ServerEvents.recipes(event => {
    LycheeUtils.register(
        event, 
        BlockCrushingRecipe.construct("minecraft:gravel"),
        RecipePost.dropItem("minecraft:sand")
    );
});