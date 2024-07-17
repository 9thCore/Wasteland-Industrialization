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
		"kubejs:iron_sieve",
		[
			"SIS",
			"IEI",
			"SIS"
		],
		{
			E: "kubejs:empty_sieve",
			S: "minecraft:string",
			I: "minecraft:iron_bars"
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
			P: "minecraft:iron_trapdoor",
			S: "minecraft:smooth_stone",
			F: "supplementaries:flint_block",
			C: "quark:sturdy_stone"
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

	event.shaped(
		"kubejs:ceramic_stick",
		[
			"P",
			"S",
			"P"
		],
		{
			P: "electrodynamics:ceramicplate",
			S: "minecraft:stick"
		}
	).id("kubejs:ceramic_stick_v");

	event.shaped(
		"kubejs:ceramic_stick",
		[
			"PSP"
		],
		{
			P: "electrodynamics:ceramicplate",
			S: "minecraft:stick"
		}
	).id("kubejs:ceramic_stick_h");

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
		"crossroads:heat_cable_ceramic",
		[
			"CCC",
			"III",
			"CCC"
		],
		{
			C: "electrodynamics:ceramicplate",
			I: "minecraft:copper_ingot"
		}
	).id("crossroads:heat_cables/heat_cable_ceramic");

	event.shaped(
		"electrodynamics:ingotbronze",
		[
			"BBB",
			"BBB",
			"BBB"
		],
		{
			B: "crossroads:nugget_bronze"
		}
	).id("crossroads:base_materials/bronze_ingot_nugg");

	event.shaped(
		"24x crossroads:fluid_tube",
		[
			"BBB",
			"   ",
			"BBB"
		],
		{
			B: "electrodynamics:platebronze"
		}
	).id("crossroads:fluid_tube");

	event.shaped(
		"crossroads:fluid_tank",
		[
			"FBF",
			"BUB",
			"FBF"
		],
		{
			B: "electrodynamics:platebronze",
			F: "crossroads:fluid_tube",
			U: "minecraft:bucket"
		}
	).id("crossroads:fluid_tank");

	event.shaped(
		"crossroads:steam_boiler",
		[
			"BBB",
			"BFB",
			"CHC"
		],
		{
			B: "electrodynamics:ingotbronze",
			C: "electrodynamics:platecopper",
			F: "crossroads:fluid_tank",
			H: "#kubejs:steam_compatible_heat_cables"
		}
	).id("crossroads:boiler");

	event.shaped(
		"crossroads:blast_furnace",
		[
			"IAI",
			"BFB",
			"BTB"
		],
		{
			B: "minecraft:bricks",
			A: "crossroads:axle",
			I: "electrodynamics:plateiron",
			T: "crossroads:fluid_tank",
			F: "minecraft:furnace"
		}
	).id("crossroads:blast_furnace");

	event.shaped(
		"crossroads:firebox",
		[
			"CHC",
			"IFI",
			"CCC"
		],
		{
			C: "minecraft:cobblestone",
			H: "#kubejs:steam_compatible_heat_cables",
			I: "minecraft:iron_trapdoor",
			F: "minecraft:furnace"
		}
	).id("crossroads:firebox");

	event.shaped(
		"crossroads:water_centrifuge",
		[
			"BAB",
			"FTF",
			"BBB"
		],
		{
			B: "electrodynamics:platebronze",
			A: "crossroads:axle",
			T: "crossroads:fluid_tank",
			F: "crossroads:fluid_tube"
		}
	).id("crossroads:water_centrifuge");

	event.shaped(
		"crossroads:ore_cleanser",
		[
			"IWI",
			"FTF",
			"III"
		],
		{
			W: "crossroads:water_centrifuge",
			T: "crossroads:fluid_tank",
			I: "electrodynamics:ingottin",
			F: "crossroads:fluid_tube"
		}
	).id("crossroads:ore_cleanser");

	event.shaped(
		"crossroads:master_axis",
		[
			"CCC",
			"C C",
			"PAP"
		],
		{
			P: "electrodynamics:plateiron",
			C: "minecraft:cobblestone",
			A: "crossroads:axle"
		}
	).id("crossroads:master_axis");
})