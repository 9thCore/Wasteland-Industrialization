ServerEvents.recipes(event => {
    event.remove("electrodynamics:obsidian"); // begone, convenient recipe
    event.remove("essentials:auto_crafter");
    event.remove({
        type: "minecraft:crafting_shaped",
        output: "#kubejs:crafting_plates"
    });
});