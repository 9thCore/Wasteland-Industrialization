ItemEvents.modification(event => {
    event.modify("electrodynamics:coalcoke", c => {
        c.setBurnTime(3200);
    });

    event.modify(["quark:bottled_cloud", "minecraft:honey_bottle"], c => {
        c.setMaxStackSize(1);
    });
});