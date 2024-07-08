ServerEvents.recipes(event => {
	event.shaped(
		"kubejs:empty_sieve",
		[
			"PBP",
			" P "
		],
		{
			P: "#minecraft:planks",
			B: "minecraft:bowl"
		}
	);

	event.shaped(
		"kubejs:clay_ingot_cast",
		[
			"C C",
			"CCC"
		],
		{
			C: "minecraft:clay_ball"
		}
	);

	event.shaped(
		"kubejs:string_sieve",
		[
			"SSS",
			"SES",
			"SSS"
		],
		{
			E: "kubejs:empty_sieve",
			S: "minecraft:string"
		}
	);

	event.shaped(
		"minecraft:string",
		[
			"FF",
			"FF"
		],
		{
			F: "kubejs:dry_fiber"
		}
	);

	event.shaped(
		"kubejs:flimsy_pickaxe",
		[
			"PS",
			"H "
		],
		{
			P: "kubejs:pebble_sharp",
			S: "minecraft:string",
			H: "minecraft:stick"
		}
	);

	event.shaped(
		"minecraft:coal",
		[
			"CCC",
			"C C",
			"CCC"
		],
		{
			C: "kubejs:coal_bit"
		}
	);

	event.shapeless(
		"8x kubejs:coal_bit",
		[
			"minecraft:coal"
		]
	);

	event.shapeless(
		"ftbquests:book",
		[
			"kubejs:pebble",
			"minecraft:stick"
		]
	).id("ftbquests:book");

	event.shapeless(
		Item.of("essentials:guide_book").withNBT({
			"patchouli:book": "essentials:manual"
		}).strongNBT(),
		[
			"crossroads:gear_base",
			"crossroads:axle"
		]
	).id("essentials:essentials_guide_book");

	event.shaped(
		"crossroads:block_salt",
		[
			"SSS",
			"SSS",
			"SSS"
		],
		{
			S: "electrodynamics:dustsalt"
		}
	).id("crossroads:base_materials/salt_block");

	event.shapeless(
		"9x electrodynamics:dustsalt",
		[
			"crossroads:block_salt"
		]
	).id("crossroads:base_materials/salt");

	event.shaped(
		"minecraft:furnace",
		[
			"FCF",
			"CPC",
			"SSS"
		],
		{
			P: "electrodynamics:plateiron",
			S: "minecraft:smooth_stone",
			F: "supplementaries:flint_block",
			C: "minecraft:cobblestone"
		}
	).id("minecraft:furnace");

	event.shaped(
		"kubejs:canister",
		[
			" P ",
			"I I",
			" P "
		],
		{
			P: "electrodynamics:plateiron",
			I: "minecraft:iron_ingot"
		}
	);

	event.shaped(
		"minecraft:bucket",
		[
			"P P",
			" P "
		],
		{
			P: "electrodynamics:plateiron"
		}
	).id("minecraft:bucket");

	event.shaped(
		"minecraft:cauldron",
		[
			"I I",
			"I I",
			"PPP"
		],
		{
			P: "electrodynamics:plateiron",
			I: "minecraft:iron_ingot"
		}
	).id("minecraft:cauldron");

	event.shaped(
		"crossroads:heating_crucible",
		[
			"P P",
			"PCP",
			"PPP"
		],
		{
			P: "electrodynamics:ceramicplate",
			C: "minecraft:cauldron"
		}
	).id("crossroads:crucible");
})