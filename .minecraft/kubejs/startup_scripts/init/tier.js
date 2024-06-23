// Java fuckery by Uncandango/unknownrj

const $TierSortingRegistry = Java.loadClass("net.minecraftforge.common.TierSortingRegistry")
const $Tiers = Java.loadClass("net.minecraft.world.item.Tiers")
const $ForgeTier = Java.loadClass("net.minecraftforge.common.ForgeTier")
const $BlockTags = Java.loadClass("net.minecraft.tags.BlockTags")

ItemEvents.toolTierRegistry((event) => {
  event.add("flimsy", (tier) => {
    tier.uses = 100
    tier.speed = 1.0
    tier.attackDamageBonus = 1.0
    tier.level = -1
    tier.enchantmentValue = 5.0
    tier.repairIngredient = "#kubejs:pebbles"
  })

  $TierSortingRegistry.registerTier("flimsy", "flimsy", [], [$Tiers.WOOD])

  const newGoldTier = new $ForgeTier(0, 32, 12, 0, 22, $BlockTags.create("minecraft:needs_gold_tool"), () => Ingredient.of("#forge:ingots/gold"))
  $TierSortingRegistry.registerTier(newGoldTier, "new_gold", [$Tiers.WOOD], [$Tiers.STONE])
})