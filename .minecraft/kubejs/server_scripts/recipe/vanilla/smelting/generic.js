ServerEvents.recipes(event => {
    event.campfireCooking(
        Item.of("kubejs:ceramic_ingot_cast").withNBT(global.getCastNBT()).strongNBT(),
        "kubejs:clay_ingot_cast"
    ).cookingTime(300);

    event.campfireCooking(
        "minecraft:stone",
        "minecraft:cobblestone"
    ).cookingTime(600);

    event.campfireCooking(
        "minecraft:smooth_stone",
        "minecraft:stone"
    ).cookingTime(600);
})