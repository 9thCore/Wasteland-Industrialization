ServerEvents.recipes(event => {
    event.remove("crossroads:smelting/salt_from_water_bottle");
    event.remove({type: "minecraft:blasting"});
});