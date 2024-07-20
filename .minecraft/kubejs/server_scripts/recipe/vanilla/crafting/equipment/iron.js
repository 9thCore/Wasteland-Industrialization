ServerEvents.recipes(event => {
    event.shaped(
		"minecraft:iron_sword",
		[
			" P ",
			" P ",
			" C "
		],
		{
			P: "electrodynamics:plateiron",
			C: "kubejs:ceramic_stick"
		}
	).id("minecraft:iron_sword");
    
    event.shaped(
		"minecraft:iron_pickaxe",
		[
			"PIP",
			" C ",
			" S "
		],
		{
			P: "electrodynamics:plateiron",
			I: "minecraft:iron_ingot",
			C: "kubejs:ceramic_stick",
			S: "minecraft:stick"
		}
	).id("minecraft:iron_pickaxe");
    
    event.shaped(
		"minecraft:iron_axe",
		[
			"PI ",
			"PC ",
			" S "
		],
		{
			P: "electrodynamics:plateiron",
			I: "minecraft:iron_ingot",
			C: "kubejs:ceramic_stick",
			S: "minecraft:stick"
		}
	).id("minecraft:iron_axe");
    
    event.shaped(
		"minecraft:iron_shovel",
		[
			" P ",
			" C ",
			" S "
		],
		{
			P: "electrodynamics:plateiron",
			C: "kubejs:ceramic_stick",
			S: "minecraft:stick"
		}
	).id("minecraft:iron_shovel");
    
    event.shaped(
		"minecraft:iron_hoe",
		[
			"PI ",
			" C ",
			" S "
		],
		{
			P: "electrodynamics:plateiron",
			I: "minecraft:iron_ingot",
			C: "kubejs:ceramic_stick",
			S: "minecraft:stick"
		}
	).id("minecraft:iron_hoe");
    
    event.shaped(
		"minecraft:iron_helmet",
		[
			"PIP",
			"P P"
		],
		{
			P: "electrodynamics:plateiron",
			I: "minecraft:iron_ingot"
		}
	).id("minecraft:iron_helmet");
    
    event.shaped(
		"minecraft:iron_chestplate",
		[
			"P P",
			"PIP",
			"III"
		],
		{
			P: "electrodynamics:plateiron",
			I: "minecraft:iron_ingot"
		}
	).id("minecraft:iron_chestplate");
    
    event.shaped(
		"minecraft:iron_leggings",
		[
			"III",
			"P P",
			"P P"
		],
		{
			P: "electrodynamics:plateiron",
			I: "minecraft:iron_ingot"
		}
	).id("minecraft:iron_leggings");
    
    event.shaped(
		"minecraft:iron_boots",
		[
			"P P",
			"I I"
		],
		{
			P: "electrodynamics:plateiron",
			I: "minecraft:iron_ingot"
		}
	).id("minecraft:iron_boots");
});
