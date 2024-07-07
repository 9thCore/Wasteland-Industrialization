ServerEvents.recipes(event => {
    event.forEachRecipe({
        type: "crossroads:ore_cleanser",
        input: "#forge:raw_materials"
    }, recipe => {
        const input = recipe.getOriginalRecipeIngredients()[0];
        const output = recipe.getOriginalRecipeResult();
        event.recipes.crossroads.ore_cleanser(
            Item.of(output, 1, output.nbt),
            input
        ).id(recipe.getId());
    });
});