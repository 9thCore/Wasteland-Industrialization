StartupEvents.registry("item", event => {
	event.create('incomplete_diamond_pickaxe', 'pickaxe')
	.tier('iron')
	.maxDamage(4)
	.maxStackSize(1)
	.displayName('Incomplete Diamond Pickaxe')

	event.create('incomplete_diamond_axe', 'axe')
	.tier('iron')
	.maxDamage(4)
	.maxStackSize(1)
	.displayName('Incomplete Diamond Axe')

	event.create('incomplete_diamond_sword', 'sword')
	.tier('iron')
	.maxDamage(4)
	.maxStackSize(1)
	.displayName('Incomplete Diamond Sword')

	event.create('incomplete_diamond_shovel', 'shovel')
	.tier('iron')
	.maxDamage(4)
	.maxStackSize(1)
	.displayName('Incomplete Diamond Shovel')

	event.create('incomplete_diamond_hoe', 'hoe')
	.tier('iron')
	.maxDamage(4)
	.maxStackSize(1)
	.displayName('Incomplete Diamond Hoe')

	event.create('incomplete_diamond_helmet')
	.maxStackSize(1)
	.displayName('Incomplete Diamond Helmet')

	event.create('incomplete_diamond_chestplate')
	.maxStackSize(1)
	.displayName('Incomplete Diamond Chestplate')

	event.create('incomplete_diamond_leggings')
	.maxStackSize(1)
	.displayName('Incomplete Diamond Leggings')

	event.create('incomplete_diamond_boots')
	.maxStackSize(1)
	.displayName('Incomplete Diamond Boots')
});