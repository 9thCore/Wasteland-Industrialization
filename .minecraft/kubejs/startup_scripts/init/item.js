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

	event.create('iron_sieve')
	.displayName('Iron Sieve')
	.maxStackSize(1)
	.maxDamage(500)

	event.create('copper_bit')
	.displayName('Copper Bit')

	event.create('coal_bit')
	.displayName('Coal Bit')
	.burnTime(200)

	event.create('iron_bit')
	.displayName('Iron Bit')

	event.create('tin_bit')
	.displayName('Tin Bit')

	event.create('gold_bit')
	.displayName('Gold Bit')

	event.create('dirty_gold')
	.displayName('Dirty Gold Bit')

	event.create('dry_fiber')
	.displayName('Dry Fiber')

	event.create('flimsy_pickaxe', 'pickaxe')
	.displayName('Flimsy Pickaxe')
	.maxStackSize(1)
	.maxDamage(60)
	.tier('flimsy')

	event.create('oak_acorn')
	.displayName('Oak Acorn')

	event.create('birch_acorn')
	.displayName('Birch Acorn')

	event.create('spruce_acorn')
	.displayName('Spruce Acorn')

	event.create('acacia_acorn')
	.displayName('Acacia Acorn')

	event.create('jungle_acorn')
	.displayName('Jungle Acorn')

	event.create('dark_oak_acorn')
	.displayName('Dark Oak Acorn')

	event.create('canister')
	.displayName('Canister')
	.attachCapability(CapabilityBuilder.FLUID.itemStack(360));

	event.create('ceramic_stick')
	.displayName('Ceramic-Hardened Stick')

	event.create('steel_stick')
	.displayName('Steel-Ceramic-Hardened Stick')

	event.create('coke_dust')
	.displayName('Coal Coke Dust')

	event.create('diamond_plate')
	.displayName('Diamond Plate')
})