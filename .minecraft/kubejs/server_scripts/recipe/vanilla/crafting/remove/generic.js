ServerEvents.recipes(event => {
    event.remove("electrodynamics:obsidian"); // begone, convenient recipe
    event.remove("essentials:auto_crafter");
    event.remove({
        type: "minecraft:crafting_shaped",
        output: "#kubejs:crafting_plates"
    });
    event.remove("electrodynamics:ceramic_plate");
    event.remove("crossroads:heat_cables/heat_cable_dirt");
    event.remove("essentials:piston");
    event.remove("crossroads:block_raw_tin");
    event.remove({
        mod: "assemblyline",
        not: [
            {
                id: "assemblyline:detector"
            },
            {
                id: "assemblyline:crate_small"
            },
            {
                id: "assemblyline:crate_medium"
            },
            {
                id: "assemblyline:crate_large"
            }
        ]
    });
    event.remove("essentials:fluid_shifter");
    event.remove("essentials:basic_fluid_splitter");
    event.remove("essentials:fluid_splitter");
    event.remove("essentials:item_splitter");
    event.remove("essentials:basic_item_splitter");
});