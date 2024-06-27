(function() {
    const modularRecipe = function(event, cast, type, metal, item, index) {
        const typedef = global.castTypes[type];
        let ing = Item.of(`${item.id}`);
        const ingArray = [];
        ingArray.push(`kubejs:${cast.id}_${type}`);

        if (item.nbt) {
            ing = ing.withNBT(item.nbt).strongNBT();
        }

        for (let i = 0; i < index; i++) {
            ingArray.push(ing);
        }
        
        event.shapeless(
            `kubejs:${cast.id}_${type}`,
            ingArray
        )
        .id(`kubejs:fill_${metal.coolId}_${cast.id}_${type}_${index}${item.recipeId}`)
        .modifyResult((grid, result) => {
            let nbt = grid.find(`kubejs:${cast.id}_${type}`).getNbt();
            nbt = nbt ? nbt : global.getCastNBT();
            nbt.nugget_count += index * item.count;
            if (nbt.nugget_count > typedef.size) {
                return Item.of("minecraft:air");
            };
            if (nbt.metal_inside && nbt.metal_inside != metal.coolId) {
                return Item.of("minecraft:air");
            };
            nbt.metal_inside = metal.coolId;
            result.setNbt(nbt);
            return result;
        });
    };

    const registerCastRecipes = function(event, cast, type) {
        const typedef = global.castTypes[type];

        global.moltenMetals.forEach(metal => {
            if (metal.temp > cast.maxTemp) {
                return;
            }
            
            let j = 0;
            metal.items.forEach(item => {
                if (item.count > typedef.size) {
                    return;
                }

                // Fake recipe
                event.shapeless(
                    Item.of(`kubejs:${cast.id}_${type}`)
                    .withNBT({
                        metal_inside: metal.coolId,
                        nugget_count: item.count
                    }).strongNBT(),
                    [
                        Item.of(`kubejs:${cast.id}_${type}`)
                        .withNBT({
                            dummy: true
                        }).strongNBT(),
                        Item.of(`${item.id}`)
                        .withNBT(item.nbt ? item.nbt : {})
                        .strongNBT()
                    ]
                )
                .id(`kubejs:fill_hint_${metal.coolId}_${cast.id}_${type}_${j++}`)
                .modifyResult(_ => {
                    return Item.of("mineraft:air"); // Never return a real item
                });

                for (let i = 1; i <= Math.min(8, Math.floor(typedef.size / item.count)); i++) {
                    modularRecipe(event, cast, type, metal, item, i);
                };
            });

            event.shapeless(
                `${metal.results[type]}`,
                `kubejs:${metal.coolId}_${cast.id}_${type}`
            )
            .id(`kubejs:pickup_result_${metal.id}_${cast.id}_${type}`)
            .replaceIngredient(
                `kubejs:${metal.coolId}_${cast.id}_${type}`,
                `kubejs:${cast.id}_${type}`
            );
        });

        event.shapeless(
            `kubejs:${cast.id}_${type}`,
            `kubejs:${cast.id}_${type}`
        ).id(`kubejs:empty_${cast.id}_${type}`);

        event.shapeless(
            `kubejs:${cast.id}_${type}`,
            Item.of(`kubejs:${cast.id}_${type}`).withNBT({
                metal_inside: "any metal",
                nugget_count: "?"
            }).strongNBT()
        ).id(`kubejs:empty_hint_${cast.id}_${type}`);
    };

    ServerEvents.recipes(event => {
        global.casts.forEach(cast => {
            cast.types.forEach(type => {
                registerCastRecipes(event, cast, type);
            });     
        });
    });

})();