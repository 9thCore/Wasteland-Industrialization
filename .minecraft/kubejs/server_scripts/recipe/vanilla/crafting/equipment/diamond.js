
(function() {
    const RegisterRecipe = (event, incomplete, complete, pattern, legend) => {
        event.recipes.minecraft.crafting_shaped(incomplete, pattern, legend);
        event.recipes.minecraft.smithing_transform(
            complete,
            "kubejs:diamond_smithing_template",
            incomplete,
            "quark:diamond_heart"
        ).id(complete);
    };

    ServerEvents.recipes(event => {
        event.recipes.minecraft.crafting_shaped(
            "2x kubejs:diamond_smithing_template",
            [
                "DTD",
                "DSD",
                "DDD"
            ],
            {
                D: "minecraft:diamond",
                T: "kubejs:diamond_smithing_template",
                S: "electrodynamics:platesteel"
            }
        );
        
        event.recipes.minecraft.crafting_shaped(
            "kubejs:diamond_smithing_template",
            [
                " D ",
                "DSD",
                " D "
            ],
            {
                D: "kubejs:diamond_plate",
                S: "electrodynamics:resourceblocksteel"
            }
        );
        
        event.recipes.minecraft.crafting_shaped(
            "quark:diamond_heart",
            [
                "SDS",
                "DED",
                "SDS"
            ],
            {
                D: "minecraft:diamond",
                S: "electrodynamics:ingotsteel",
                E: "minecraft:emerald"
            }
        );

        RegisterRecipe(
            event,
            "kubejs:incomplete_diamond_sword",
            "minecraft:diamond_sword",
            [
                "D",
                "D",
                "S"
            ],
            {
                D: "kubejs:diamond_plate",
                S: "kubejs:steel_stick"
            }
        );

        RegisterRecipe(
            event,
            "kubejs:incomplete_diamond_pickaxe",
            "minecraft:diamond_pickaxe",
            [
                "DDD",
                " S ",
                " T "
            ],
            {
                D: "kubejs:diamond_plate",
                S: "kubejs:steel_stick",
                T: "minecraft:stick"
            }
        );

        RegisterRecipe(
            event,
            "kubejs:incomplete_diamond_axe",
            "minecraft:diamond_axe",
            [
                "DD",
                "DS",
                " T"
            ],
            {
                D: "kubejs:diamond_plate",
                S: "kubejs:steel_stick",
                T: "minecraft:stick"
            }
        );

        RegisterRecipe(
            event,
            "kubejs:incomplete_diamond_shovel",
            "minecraft:diamond_shovel",
            [
                "D",
                "S",
                "T"
            ],
            {
                D: "kubejs:diamond_plate",
                S: "kubejs:steel_stick",
                T: "minecraft:stick"
            }
        );

        RegisterRecipe(
            event,
            "kubejs:incomplete_diamond_hoe",
            "minecraft:diamond_hoe",
            [
                "DD",
                " S",
                " T"
            ],
            {
                D: "kubejs:diamond_plate",
                S: "kubejs:steel_stick",
                T: "minecraft:stick"
            }
        );

        RegisterRecipe(
            event,
            "kubejs:incomplete_diamond_helmet",
            "minecraft:diamond_helmet",
            [
                "DDD",
                "D D"
            ],
            {
                D: "kubejs:diamond_plate"
            }
        );

        RegisterRecipe(
            event,
            "kubejs:incomplete_diamond_chestplate",
            "minecraft:diamond_chestplate",
            [
                "D D",
                "DDD",
                "DDD"
            ],
            {
                D: "kubejs:diamond_plate"
            }
        );

        RegisterRecipe(
            event,
            "kubejs:incomplete_diamond_leggings",
            "minecraft:diamond_leggings",
            [
                "DDD",
                "D D",
                "D D"
            ],
            {
                D: "kubejs:diamond_plate"
            }
        );

        RegisterRecipe(
            event,
            "kubejs:incomplete_diamond_boots",
            "minecraft:diamond_boots",
            [
                "D D",
                "D D"
            ],
            {
                D: "kubejs:diamond_plate"
            }
        );
    });
})();