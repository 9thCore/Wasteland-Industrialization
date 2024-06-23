ServerEvents.tags('item', event => {
	event.add("kubejs:casts", [
		"kubejs:ceramic_ingot_cast"
	]);

	event.add("kubejs:pebbles", [
		"kubejs:pebble",
		"kubejs:pebble_chiseled",
		"kubejs:pebble_sharp"
	]);
});