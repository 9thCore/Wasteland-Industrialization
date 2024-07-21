ServerEvents.recipes(event => {
    event.remove("electrodynamics:obsidian"); // begone, convenient recipe
    event.remove("essentials:auto_crafter");
    event.remove({
        type: "minecraft:crafting_shaped",
        output: "#kubejs:crafting_plates"
    });
    event.remove("electrodynamics:ceramic_plate");
    event.remove("crossroads:heat_cables/heat_cable_dirt");
    event.remove("minecraft:blast_furnace");
    event.remove("essentials:piston");
});