ServerEvents.recipes(event => {
    event.forEachRecipe({
        type: "crossroads:crucible",
        input: "#forge:raw_materials"
    }, recipe => {
        const input = recipe.getOriginalRecipeIngredients()[0];
        const fluid = recipe.outputValues()[0].getValue();
        event.remove({
            type: "crossroads:crucible",
            input: input
        });

        event.recipes.crossroads.crucible(
            Fluid.of(fluid, 90),
            input
        );
    });

    // manual because they dont seem to be affected and ive spent long enough on this already
    event.remove("jaopca:crossroads.raw_material_to_molten_crucible.lead");
    event.recipes.crossroads.crucible(
        Fluid.of("jaopca:molten.lead", 90),
        "electrodynamics:raworelead"
    );

    event.remove("jaopca:crossroads.raw_material_to_molten_crucible.silver");
    event.recipes.crossroads.crucible(
        Fluid.of("jaopca:molten.silver", 90),
        "electrodynamics:raworesilver"
    );
});