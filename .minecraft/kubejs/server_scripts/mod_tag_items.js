ServerEvents.tags('item', event => {
	/*
	event.add('kubejs:chisels', [
		'#kubejs:basic_chisels',
		'#kubejs:advanced_chisels'
	])

	event.add('kubejs:stone_with_drip', [
		'#forge:stone',
		'minecraft:dripstone_block'
	])
	*/

	event.add('kubejs:metal_ingots', [
		'#forge:ingots/iron',
		'#forge:ingots/gold',
		'#forge:ingots/copper',
		'#forge:ingots/netherite',
		'#forge:ingots/aluminum',
		'#forge:ingots/silver',
		'#forge:ingots/nickel',
		'#forge:ingots/uranium',
		'#forge:ingots/constatan',
		'#forge:ingots/bronze',
		'#forge:ingots/electrum',
		'#forge:ingots/steel',
		'#forge:ingots/zinc',
		'#forge:ingots/brass',
		'#forge:ingots/tin',
		'#forge:ingots/cast_iron'
	])

	event.add("kubejs:casts", [
		"kubejs:ceramic_ingot_cast"
	])
})