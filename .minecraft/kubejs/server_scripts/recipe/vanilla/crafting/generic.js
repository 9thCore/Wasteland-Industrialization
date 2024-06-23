ServerEvents.recipes(event => {
	event.shaped(
		"kubejs:empty_sieve",
		[
			" S",
			"SS"
		],
		{
			S: "minecraft:stick"
		}
	);

	event.shaped(
		"kubejs:clay_ingot_cast",
		[
			"CC"
		],
		{
			C: "minecraft:clay_ball"
		}
	);

	event.shapeless(
		"kubejs:string_sieve",
		[
			"kubejs:empty_sieve",
			"3x minecraft:string"
		]
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