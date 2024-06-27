ServerEvents.recipes(event => {
    global.casts.forEach(cast => {
        cast.types.forEach(type => {
            const typedef = global.castTypes[type];
            if (!typedef.campfireMeltable) {
                return;
            }

            global.moltenMetals.forEach(metal => {
                if (metal.temp <= cast.maxTemp) {
                    event.campfireCooking(
                        `kubejs:${metal.id}_${cast.id}_${type}`,
                        Item.of(`kubejs:${cast.id}_${type}`).withNBT({
                            nugget_count: typedef.size,
                            metal_inside: metal.coolId
                        }).strongNBT()
                    ).cookingTime(300);
                };
            });
        });
    });
});