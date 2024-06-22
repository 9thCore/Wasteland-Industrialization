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
})