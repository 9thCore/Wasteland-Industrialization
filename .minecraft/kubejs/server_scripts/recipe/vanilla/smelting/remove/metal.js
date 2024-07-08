ServerEvents.recipes(event => {
    event.remove(Filters.smelting("#forge:ingots"));
    event.remove(Filters.smelting("#forge:gems"));
});