StartupEvents.registry('item', event => {
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

	event.create('dry_fiber')
	.displayName('Dry Fiber')

	event.create('flimsy_pickaxe', 'pickaxe')
	.displayName('Flimsy Pickaxe')
	.maxStackSize(1)
	.maxDamage(60)
	.tier("flimsy")
})