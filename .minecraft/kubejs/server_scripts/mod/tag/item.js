// priority: 50

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

	event.add("kubejs:crafting_plates", [
		"#forge:plates/copper",
		"#forge:plates/iron",
		"#forge:plates/steel",
		"#forge:plates/lead",
		"#forge:plates/bronze"
	])

	global.moltenMetals.forEach(metal => {
		metal.valueMap = {};

		metal.items.forEach(item => {
			metal.valueMap[item.id] = item.count;
			event.add(`kubejs:meltable_${metal.coolId}_all`, item.id);

			// items with nbt cannot use the tag system
			if (item.nbt == null) {
				event.add(`kubejs:meltable_${metal.coolId}`, item.id);
				return;
			};

			// special tag, in case they're needed later
			event.add(`kubejs:meltable_${metal.coolId}_with_nbt`, item.id);
		});
	});
});