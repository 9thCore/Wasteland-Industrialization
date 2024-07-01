ServerEvents.recipes(event => {
    event.campfireCooking(
        Item.of("kubejs:ceramic_ingot_cast").withNBT(global.getCastNBT()).strongNBT(),
        "kubejs:clay_ingot_cast"
    ).cookingTime(300);
})