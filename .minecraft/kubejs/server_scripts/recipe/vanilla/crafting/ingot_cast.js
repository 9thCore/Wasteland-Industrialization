ServerEvents.recipes(event => {
    global.casts.forEach(cast => {
        global.moltenMetals.forEach(metal => {
            if (metal.temp > cast.maxTemp) {
                return;
            }
            
            let j = 0;
            metal.items.forEach(item => {
                for (let i = 1; i <= Math.min(8, Math.floor(9 / item.count)); i++) {
                    (function(index) {
                        event.shapeless(
                            `kubejs:${cast.id}_ingot_cast`,
                            [
                                `kubejs:${cast.id}_ingot_cast`,
                                `${i}x ${item.id}`
                            ]
                        )
                        .id(`kubejs:fill_cast_${cast.id}_${metal.id}_${item.count}${i}`)
                        .modifyResult((grid, result) => {
                            let nbt = grid.find(`kubejs:${cast.id}_ingot_cast`).getNbt();
                            nbt = nbt ? nbt : global.getCastNBT();
                            nbt.nugget_count += index * item.count;
                            if (nbt.nugget_count > 9) {
                                return Item.of("minecraft:air");
                            };
                            if (nbt.metal_inside && nbt.metal_inside != metal.insideCastName) {
                                return Item.of("minecraft:air");
                            };
                            nbt.metal_inside = metal.insideCastName;
                            result.setNbt(nbt);
                            return result;
                        });
                    })(i);
                };

                // Fake recipe
                event.shapeless(
                    Item.of(`kubejs:${cast.id}_ingot_cast`)
                    .withNBT({
                        metal_inside: metal.insideCastName,
                        nugget_count: item.count
                    })
                    .strongNBT(),
                    [
                        `kubejs:${cast.id}_ingot_cast`,
                        `1x ${item.id}`
                    ]
                )
                .id(`kubejs:cast_fill_hint_${cast.id}_${metal.id}_${j++}`)
                .modifyResult(_ => {
                    return Item.of("mineraft:air"); // Never return a real item
                });
            });
        });

        event.shapeless(
            `kubejs:${cast.id}_ingot_cast`,
            `kubejs:${cast.id}_ingot_cast`
        ).id(`kubejs:empty_cast_${cast.id}`);

        event.shapeless(
            `kubejs:${cast.id}_ingot_cast`,
            Item.of(`kubejs:${cast.id}_ingot_cast`).withNBT({
                metal_inside: "any metal",
                nugget_count: "?"
            }).strongNBT()
        ).id(`kubejs:cast_empty_hint_${cast.id}`);
    });
})