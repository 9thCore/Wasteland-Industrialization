ServerEvents.tags('item', event => {
	event.add("kubejs:casts", [
		"kubejs:ceramic_ingot_cast"
	]);

	event.add("kubejs:pebbles", [
		"kubejs:pebble",
		"kubejs:pebble_chiseled",
		"kubejs:pebble_sharp"
	]);

	event.add("kubejs:acorns", [
		"kubejs:oak_acorn",
		"kubejs:spruce_acorn",
		"kubejs:birch_acorn",
		"kubejs:dark_oak_acorn",
		"kubejs:jungle_acorn",
		"kubejs:acacia_acorn"
	]);
});