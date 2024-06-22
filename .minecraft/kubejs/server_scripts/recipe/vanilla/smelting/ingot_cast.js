ServerEvents.recipes(event => {
    global.casts.forEach(cast => {
        global.moltenMetals.forEach(metal => {
            if (metal.temp <= cast.maxTemp) {
                event.campfireCooking(
                    `kubejs:${metal.id}_${cast.id}_ingot_cast`,
                    Item.of(`kubejs:${cast.id}_ingot_cast`).withNBT({
                        nugget_count: 9,
                        metal_inside: metal.insideCastName
                    }).strongNBT()
                ).cookingTime(300);
            };
        });
    });
});