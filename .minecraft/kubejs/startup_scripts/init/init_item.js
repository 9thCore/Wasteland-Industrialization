StartupEvents.registry('item', event => {
	/*
	event.create('clay_stick')
	.displayName('Clay-Coated Stick')

	event.create('one_time_chisel')
	.displayName('OTU Chisel')
	.tooltip('A one-time-use chisel! Breaks immediately after use.')
	.tag('kubejs:basic_chisels')
	.unstackable()
	.maxDamage(1)

	event.create('basic_chisel')
	.displayName('Basic Chisel')
	.tag('kubejs:basic_chisels')
	.unstackable()
	.maxDamage(16)

	event.create('basic_axe', 'axe')
	.displayName('Basic Axe')
	.tier('wood')
	.tag('forge:axes')
	.tag('forge:tools/axes')
	.unstackable()

	event.create('dripstone_pebble')
	.displayName('Dripstone Pebble')

	event.create('dripstone_flake')
	.displayName('Dripstone Flake')

	event.create('stone_pebble')
	.displayName('Stone Pebble')

	event.create('dirty_gold_nugget')
	.displayName('Dirty Gold Nugget')

	event.create('quartz_fragment')
	.displayName('Nether Quartz Fragment')

	event.create('copper_chunk')
	.displayName('Copper Chunk')

	event.create('tin_chunk')
	.displayName('Tin Chunk')

	event.create('sand_cast')
	.displayName('Empty Sand Cast')

	event.create('tip_sand_cast')
	.displayName('Tip Sand Cast')
	.tag('kubejs:tip_casts')
	.tag('kubejs:sand_casts')

	event.create('head_sand_cast')
	.displayName('Head Sand Cast')
	.tag('kubejs:head_casts')
	.tag('kubejs:sand_casts')

	event.create('ingot_sand_cast')
	.displayName('Ingot Sand Cast')
	.tag('kubejs:ingot_casts')
	.tag('kubejs:sand_casts')

	event.create('gear_sand_cast')
	.displayName('Gear Sand Cast')
	.tag('kubejs:gear_casts')
	.tag('kubejs:sand_casts')

	event.create('axle_sand_cast')
	.displayName('Axle Sand Cast')
	.tag('kubejs:axle_casts')
	.tag('kubejs:sand_casts')
	*/

	event.create('pebble')
	.displayName('Pebble')

	event.create('pebble_chiseled')
	.displayName('Chiseled Pebble')

	event.create('pebble_sharp')
	.displayName('Sharpened Pebble')

	event.create('empty_sieve')
	.displayName('Empty Sieve')

	event.create('string_sieve')
	.displayName('String Sieve')
	.maxStackSize(1)
	.maxDamage(200)

	event.create('copper_bit')
	.displayName('Copper Bit')

	event.create('coal_bit')
	.displayName('Coal Bit')
	.burnTime(200)

	event.create('iron_bit')
	.displayName('Iron Bit')

	event.create('dirty_gold')
	.displayName('Dirty Gold Nugget')

	event.create('flimsy_pickaxe')
	.displayName('Flimsy Pickaxe')
	.maxStackSize(1)
	.maxDamage(100)

	/*
	event.create('gold_chisel')
	.displayName('Gold Chisel')
	.tag('kubejs:advanced_chisels')
	.unstackable()
	.maxDamage(32)

	event.create('stone_chisel')
	.displayName('Stone Chisel')
	.tag('kubejs:advanced_chisels')
	.unstackable()
	.maxDamage(131)

	event.create('iron_chisel')
	.displayName('Iron Chisel')
	.tag('kubejs:advanced_chisels')
	.unstackable()
	.maxDamage(250)

	event.create('diamond_chisel')
	.displayName('Diamond Chisel')
	.tag('kubejs:advanced_chisels')
	.unstackable()
	.maxDamage(1561)
	*/
})