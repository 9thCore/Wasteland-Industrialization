ServerEvents.recipes(event => {
    event.remove("crossroads:smelting/salt_from_water_bottle");
    event.remove("electrodynamics:smelting/coal_coke");
    event.remove({type: "minecraft:blasting"});
});