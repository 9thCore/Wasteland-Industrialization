// priority: -100

(function() {
    /**
     * 
     * @param {String[]} inputs 
     * @param {String} output 
     */
    const helper = function(event, inputs, output) {
        inputs = Array.isArray(inputs) ? inputs : [inputs];
        inputs.forEach(input => {
            LycheeUtils.register(
                event, 
                BlockCrushingRecipe.construct(input),
                RecipePost.random(1, 1, [
                    RecipePost.break(),
                    RecipePost.break(),
                    RecipePost.dropItem(output)
                ])
            );
        });
    };

    ServerEvents.recipes(event => {
        helper(event, ["minecraft:iron_ingot", "minecraft:raw_iron"], "electrodynamics:dustiron");
        helper(event, ["minecraft:gold_ingot", "minecraft:raw_gold"], "electrodynamics:dustgold");
        helper(event, ["minecraft:copper_ingot", "minecraft:raw_copper"], "electrodynamics:dustcopper");
        helper(event, ["electrodynamics:ingottin", "electrodynamics:raworetin"], "electrodynamics:dusttin");
        helper(event, ["electrodynamics:ingotsilver", "electrodynamics:raworesilver"], "electrodynamics:dustsilver");
        helper(event, "electrodynamics:ingotsteel", "electrodynamics:duststeel");
        helper(event, ["electrodynamics:ingotlead", "electrodynamics:raworelead"], "electrodynamics:dustlead");
        helper(event, "electrodynamics:coalcoke", "kubejs:coke_dust");
    });
})();