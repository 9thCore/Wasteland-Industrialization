const woodTierBlocks = [
	"kubejs:dry_dirt"
]

const goldTierBlocks = [
	"#forge:stone",
	"#forge:cobblestone"
]

const stoneTierBlocks = [
	'minecraft:netherrack',
	'minecraft:crimson_nylium',
	'minecraft:warped_nylium',
	'minecraft:stone',
	'minecraft:stone_slab',
	'minecraft:smooth_stone',
	'minecraft:smooth_stone_slab',
	'#forge:sandstone',
	'#minecraft:stone_bricks',
	'#forge:gravel',
	/minecraft:.*granite.*/,
	/minecraft:.*andesite.*/,
	/minecraft:.*diorite.*/,
	'minecraft:coal_ore',
	'minecraft:iron_ore'
]

const ironTierBlocks = [
	/minecraft:.*deepslate(?!_iron_ore).*/,
	'minecraft:dripstone_block',
	'#forge:ores_in_ground/deepslate',
	'minecraft:tuff'
]

const woodTier = 'forge:needs_wood_tool'
const goldTier = 'forge:needs_gold_tool'
const stoneTier = 'minecraft:needs_stone_tool'
const ironTier = 'minecraft:needs_iron_tool'
const diamondTier = 'minecraft:needs_diamond_tool'
const netheriteTier = 'forge:needs_netherite_tool'
const mineableLevelTags = [
	woodTier,
	goldTier,
	stoneTier,
	ironTier,
	diamondTier,
	netheriteTier
]

ServerEvents.tags('block', event => {

	woodTierBlocks.forEach(block => {
		addThingToTag(event, block, woodTier)
	})

	goldTierBlocks.forEach(block => {
		addThingToTag(event, block, goldTier)
	})

	stoneTierBlocks.forEach(block => {
		addThingToTag(event, block, stoneTier)
	})

	ironTierBlocks.forEach(block => {
		addThingToTag(event, block, ironTier)
	})
})