StartupEvents.registry("item", event => {
    event.create('diamond_smithing_template')
    .tooltip(Text.translate("item.kubejs.smithing_template.diamond_upgrade").gray())
    .tooltip(Text.empty())
	.tooltip(Text.translate("item.minecraft.smithing_template.applies_to").gray())
    .tooltip(Text.white(" ").append(Text.translate("item.kubejs.smithing_template.diamond_upgrade_target").blue()))
    .tooltip(Text.translate("item.minecraft.smithing_template.ingredients").gray())
    .tooltip(Text.white(" ").append(Text.translate("item.quark.diamond_heart").blue()))
    .displayName(Text.translate("item.minecraft.smithing_template"))

	event.create('incomplete_diamond_pickaxe')
	.maxStackSize(1)
	.displayName('Incomplete Diamond Pickaxe')

	event.create('incomplete_diamond_axe')
	.maxStackSize(1)
	.displayName('Incomplete Diamond Axe')

	event.create('incomplete_diamond_sword')
	.maxStackSize(1)
	.displayName('Incomplete Diamond Sword')

	event.create('incomplete_diamond_shovel')
	.maxStackSize(1)
	.displayName('Incomplete Diamond Shovel')

	event.create('incomplete_diamond_hoe')
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