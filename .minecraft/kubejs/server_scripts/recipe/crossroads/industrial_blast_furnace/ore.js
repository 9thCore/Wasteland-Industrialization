ServerEvents.recipes(event => {
    event.forEachRecipe({
        type: "crossroads:cr_blast_furnace",
        input: "#forge:raw_materials"
    }, recipe => {
        const input = recipe.getOriginalRecipeIngredients()[0];
        const fluid = recipe.outputValues()[0].getValue();
        event.recipes.crossroads.cr_blast_furnace(
            Fluid.of(fluid, 90),
            2,
            input
        ).id(recipe.getId());
    });

    // manual because they dont seem to be affected and ive spent long enough on this already
    event.remove("jaopca:crossroads.raw_material_to_molten.lead");
    event.recipes.crossroads.cr_blast_furnace(
        Fluid.of("jaopca:molten.lead", 90),
        2,
        "electrodynamics:raworelead"
    );

    event.remove("jaopca:crossroads.raw_material_to_molten.silver");
    event.recipes.crossroads.cr_blast_furnace(
        Fluid.of("jaopca:molten.silver", 90),
        2,
        "electrodynamics:raworesilver"
    );

    event.forEachRecipe({
        type: "crossroads:cr_blast_furnace"
    }, recipe => {
        const input = recipe.getOriginalRecipeIngredients()[0];
        const fluid = recipe.outputValues()[0].getValue();
        const id = input.first.id
        if (id == "crossroads:ore_clump"
            || id == "jaopca:crossroads_clumps.lead"
            || id == "jaopca:crossroads_clumps.silver"
        ) {
            event.recipes.crossroads.cr_blast_furnace(
                Fluid.of(fluid, 135),
                3,
                input
            ).id(recipe.getId());
        };
    });
});