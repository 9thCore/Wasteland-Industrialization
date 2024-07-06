ServerEvents.recipes(event => {
    event.remove(Filters.either("#forge:ingots"));
    event.remove(Filters.either("#forge:gems"));
});