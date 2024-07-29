(function() {
    const Register = (event, input, output) => {
        LycheeUtils.register(
            event,
            BlockCrushingRecipe.construct(input),
            RecipePost.dropItem(output)
        );
    };

    ServerEvents.recipes(event => {
        Register(event, "minecraft:iron_block", "3x electrodynamics:plateiron");
        Register(event, "minecraft:copper_block", "3x electrodynamics:platecopper");
        Register(event, "electrodynamics:resourceblocksteel", "3x electrodynamics:platesteel");
        Register(event, "electrodynamics:resourceblocklead", "3x electrodynamics:platelead");
        Register(event, "electrodynamics:resourceblockbronze", "3x electrodynamics:platebronze");
        Register(event, "3x electrodynamics:ceramiccooked", "electrodynamics:ceramicplate");
        Register(event, "minecraft:diamond_block", "3x kubejs:diamond_plate");
    });
})();