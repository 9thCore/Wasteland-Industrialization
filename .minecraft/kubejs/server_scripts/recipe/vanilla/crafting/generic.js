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
		"kubejs:clay_block_cast",
		[
			"C C",
			"CCC"
		],
		{
			C: "minecraft:clay"
		}
	);

	event.shaped(
		"kubejs:clay_nugget_cast",
		[
			"CC"
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
})