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
			" S ",
			"SES",
			" S "
		],
		{
			E: "kubejs:empty_sieve",
			S: "minecraft:string"
		}
	);

	event.shaped(
		"kubejs:iron_sieve",
		[
			" I ",
			"IEI",
			" I "
		],
		{
			E: "kubejs:empty_sieve",
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
		"kubejs:steel_stick",
		[
			"P",
			"S",
			"P"
		],
		{
			P: "electrodynamics:platesteel",
			S: "kubejs:ceramic_stick"
		}
	).id("kubejs:steel_stick_v");

	event.shaped(
		"kubejs:steel_stick",
		[
			"PSP"
		],
		{
			P: "electrodynamics:platesteel",
			S: "kubejs:ceramic_stick"
		}
	).id("kubejs:steel_stick_h");

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

	event.shaped(
		"supplementaries:lock_block",
		[
			"PWP",
			"WRW",
			"PWP"
		],
		{
			R: "minecraft:redstone",
			P: "electrodynamics:plateiron",
			W: "#minecraft:planks"
		}
	).id("supplementaries:lock_block");

	event.shaped(
		"minecraft:hopper",
		[
			"I I",
			"ICI",
			" P "
		],
		{
			C: "#forge:chests/wooden",
			I: "minecraft:iron_ingot",
			P: "electrodynamics:plateiron"
		}
	).id("minecraft:hopper");

	event.shaped(
		"minecraft:hopper",
		[
			"ILI",
			"ILI",
			" P "
		],
		{
			L: "#minecraft:logs",
			I: "minecraft:iron_ingot",
			P: "electrodynamics:plateiron"
		}
	).id("quark:tweaks/crafting/utility/misc/easy_hopper");

	event.shaped(
		"essentials:sorting_hopper",
		[
			"CRC",
			"PHP",
			" P "
		],
		{
			R: "supplementaries:lock_block",
			C: "minecraft:copper_ingot",
			P: "electrodynamics:platecopper",
			H: "minecraft:hopper"
		}
	).id("essentials:sorting_hopper");

	event.shaped(
		"essentials:speed_hopper",
		[
			"GCG",
			"GHG",
			" G "
		],
		{
			G: "electrodynamics:platebronze",
			C: "electrodynamics:circuitbasic",
			H: "essentials:sorting_hopper"
		}
	).id("essentials:speed_hopper");

	event.shaped(
		"crossroads:stamp_mill",
		[
			"PAP",
			"PBP",
			"SSS"
		],
		{
			P: "#minecraft:planks",
			A: Item.of("crossroads:axle").withNBT({material: "steel"}).strongNBT(),
			B: "electrodynamics:resourceblocksteel",
			S: "minecraft:stone_brick_slab"
		}
	).id("crossroads:stamp_mill");

	event.shaped(
		"minecraft:piston",
		[
			"PPP",
			"SIS",
			"SRS"
		],
		{
			P: "#minecraft:planks",
			S: "quark:sturdy_stone",
			I: "electrodynamics:plateiron",
			R: "minecraft:redstone"
		}
	).id("minecraft:piston");

	event.shaped(
		"minecraft:blast_furnace",
		[
			"IDI",
			"IFI",
			"SSS"
		],
		{
			I: "electrodynamics:plateiron",
			D: "minecraft:deepslate",
			F: "crossroads:blast_furnace",
			S: "minecraft:smooth_stone_slab"
		}
	).id("minecraft:blast_furnace");

	event.shaped(
		"assemblyline:crate",
		[
			"SSS",
			"SCS",
			"BBB"
		],
		{
			C: "#forge:chests",
			S: "electrodynamics:platesteel",
			B: "electrodynamics:resourceblockaluminum"
		}
	).id("assemblyline:crate_small");

	event.shaped(
		"assemblyline:cratemedium",
		[
			"SSS",
			"TCT",
			"BBB"
		],
		{
			C: "assemblyline:crate",
			S: "electrodynamics:platesteel",
			T: "electrodynamics:platetitanium",
			B: "electrodynamics:resourceblockhslasteel"
		}
	).id("assemblyline:crate_medium");

	event.shaped(
		"assemblyline:cratelarge",
		[
			"TTT",
			"TCT",
			"BBB"
		],
		{
			C: "assemblyline:cratemedium",
			T: "electrodynamics:platetitanium",
			B: "crossroads:block_copshowium"
		}
	).id("assemblyline:crate_large");

	event.shapeless(
		"minecraft:flint_and_steel",
		[
			Item.of("minecraft:flint"),
			Item.of("electrodynamics:ingotsteel")
		]
	).id("minecraft:flint_and_steel");

	event.shaped(
		"scuba_gear:scuba_helmet",
		[
			"BBB",
			"GTG",
			"GGG"
		],
		{
			B: "electrodynamics:platebronze",
			T: "#forge:glass/colorless",
			G: "minecraft:gold_ingot"
		}
	);

	event.shaped(
		"scuba_gear:scuba_chestplate",
		[
			"B B",
			"GBG",
			"GGG"
		],
		{
			B: "electrodynamics:platebronze",
			G: "minecraft:gold_ingot"
		}
	);

	event.shaped(
		"scuba_gear:scuba_leggings",
		[
			"GGG",
			"B B",
			"G G"
		],
		{
			B: "electrodynamics:platebronze",
			G: "minecraft:gold_ingot"
		}
	);

	event.shaped(
		"scuba_gear:scuba_boots",
		[
			"G G",
			"B B"
		],
		{
			B: "electrodynamics:platebronze",
			G: "minecraft:gold_ingot"
		}
	);

	event.shaped(
		"16x essentials:item_chute",
		[
			"SHS",
			"SHS",
			"SHS"
		],
		{
			S: "electrodynamics:platesteel",
			H: "minecraft:hopper"
		}
	).id("essentials:item_chute");

	event.shaped(
		"essentials:item_shifter",
		[
			"ITI",
			"IDI",
			"SSS"
		],
		{
			T: "essentials:item_chute",
			I: "electrodynamics:plateiron",
			S: "quark:sturdy_stone",
			D: "minecraft:dropper"
		}
	).id("essentials:item_shifter");

	event.shaped(
		"quark:crafter",
		[
			"SRS",
			"PCP",
			"SDS"
		],
		{
			C: "minecraft:crafting_table",
			P: "electrodynamics:ceramicplate",
			S: "electrodynamics:platesteel",
			R: "minecraft:redstone_block",
			D: "minecraft:dropper"
		}
	).id("quark:automation/crafting/crafter");

	event.shaped(
		"minecraft:dropper",
		[
			"SSS",
			"S S",
			"TRT"
		],
		{
			S: "quark:sturdy_stone",
			T: "minecraft:smooth_stone",
			R: "minecraft:redstone"
		}
	).id("minecraft:dropper");

	event.shaped(
		"minecraft:dispenser",
		[
			"SSS",
			"SBS",
			"TRT"
		],
		{
			S: "quark:sturdy_stone",
			T: "minecraft:smooth_stone",
			R: "minecraft:redstone",
			B: "minecraft:bow"
		}
	).id("minecraft:dispenser");
})