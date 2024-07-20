ServerEvents.recipes(event => {
    event.forEachRecipe({
        type: "crossroads:stamp_mill",
        input: "#forge:raw_materials"
    }, recipe => {
        event.recipes.crossroads.stamp_mill(
            Item.of(recipe.originalRecipeResult, 2),
            recipe.originalRecipeIngredients[0]
        ).id(recipe.getId());
    });

    event.recipes.crossroads.stamp_mill(
        Item.of("jaopca:crossroads_grits.silver", 2),
        "electrodynamics:raworesilver"
    ).id("jaopca:crossroads.raw_material_to_grit.silver");

    event.recipes.crossroads.stamp_mill(
        Item.of("jaopca:crossroads_grits.lead", 2),
        "electrodynamics:raworelead"
    ).id("jaopca:crossroads.raw_material_to_grit.lead");
});