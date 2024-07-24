(function() {
    const Register = (event, input, output) => {
        LycheeUtils.register(
            event,
            BlockCrushingRecipe.construct(input),
            RecipePost.dropItem(output)
        );
    };

    ServerEvents.recipes(event => {
        Register(event, "minecraft:iron_block", "2x electrodynamics:plateiron");
        Register(event, "minecraft:copper_block", "2x electrodynamics:platecopper");
        Register(event, "electrodynamics:resourceblocksteel", "2x electrodynamics:platesteel");
        Register(event, "electrodynamics:resourceblocklead", "2x electrodynamics:platelead");
        Register(event, "electrodynamics:resourceblockbronze", "2x electrodynamics:platebronze");
        Register(event, "4x electrodynamics:ceramiccooked", "electrodynamics:ceramicplate");
        Register(event, "minecraft:diamond_block", "2x kubejs:diamond_plate");
    });
})();