ServerEvents.recipes(event => {
    global.casts.forEach(cast => {
        global.moltenMetals.forEach(metal => {
            if (metal.temp <= cast.maxTemp) {
                event.campfireCooking(
                    `kubejs:${metal.id}_${cast.id}_${cast.type}`,
                    Item.of(`kubejs:${cast.id}_${cast.type}`).withNBT({
                        nugget_count: 9,
                        metal_inside: metal.insideCastName
                    }).strongNBT()
                ).cookingTime(300);
            };
        });
    });
});