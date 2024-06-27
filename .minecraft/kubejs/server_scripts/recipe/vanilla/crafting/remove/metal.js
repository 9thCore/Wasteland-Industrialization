(function() {
    ServerEvents.recipes(event => {
        event.remove("minecraft:gold_ingot_from_nuggets");
        event.remove("minecraft:gold_ingot_from_gold_block");
        event.remove("minecraft:gold_nugget");
        event.remove("minecraft:gold_block");
        
        event.remove("minecraft:iron_ingot_from_nuggets");
        event.remove("minecraft:iron_ingot_from_iron_block");
        event.remove("minecraft:iron_nugget");
        event.remove("minecraft:iron_block");
        
        event.remove("minecraft:netherite_ingot_from_netherite_block");
        event.remove("minecraft:netherite_block");
        
        event.remove("minecraft:copper_ingot");
        event.remove("minecraft:copper_ingot_from_waxed_copper_block");
        event.remove("crossroads:base_materials/copper_ingot_nugg");
        event.remove("electrodynamics:copper_nuggets_to_copper_ingot");
        event.remove("crossroads:base_materials/copper_nugget");
        event.remove("minecraft:copper_block");
        
        event.remove("crossroads:base_materials/bronze_alloy_nugg");

        event.remove("crossroads:base_materials/copshowium_ingot_nugg");
        event.remove("crossroads:base_materials/copshowium_nugget");
        event.remove("crossroads:base_materials/copshowium_ingot_block");
        event.remove("crossroads:base_materials/copshowium_block");
    });
})();