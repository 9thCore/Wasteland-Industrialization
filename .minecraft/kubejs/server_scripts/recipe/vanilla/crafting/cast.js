(function() {
    const modularRecipe = function(event, cast, type, metal, item, idPostfix, nbt, maxRecipes) {
        const typedef = global.castTypes[type];
        let ingredient = nbt ? Item.of(item).withNBT(nbt).strongNBT() : Ingredient.of(item);
        let id = `kubejs:fill_${metal.coolId}_${cast.id}_${type}`;

        if (idPostfix != null) {
            id = `${id}_${idPostfix}`;
        }

        maxRecipes = Math.min(maxRecipes ? maxRecipes : 8, 8);
        for (let i = 0; i < maxRecipes; i++) {
            let ingredients = [`kubejs:${cast.id}_${type}`];
            for (let j = 0; j <= i; j++) {
                ingredients.push(ingredient);
            }

            event.shapeless(
                `kubejs:${cast.id}_${type}`,
                ingredients
            )
            .id(`${id}_${i}`)
            .modifyResult((grid, result) => {
                let nbt = grid.find(`kubejs:${cast.id}_${type}`).getNbt();
                nbt = nbt ? nbt : global.getCastNBT();
                const data = nbt.BlockEntityTag.data;
                
                const items = grid.findAll(ingredient);
                items.forEach(ing => {
                    data.nugget_count += metal.valueMap[ing.id];
                });
                
                if (data.nugget_count > typedef.size) {
                    return Item.of("minecraft:air");
                };

                if (data.metal_inside && data.metal_inside != metal.coolId) {
                    return Item.of("minecraft:air");
                };

                data.metal_inside = metal.coolId;
                result.setNbt(nbt);

                return result;
            });
        };
    }

    const registerCastRecipes = function(event, cast, type) {
        const typedef = global.castTypes[type];

        global.moltenMetals.forEach(metal => {
            if (metal.temp > cast.maxTemp) {
                return;
            }

            // nbt-less items
            modularRecipe(event, cast, type, metal, `#kubejs:meltable_${metal.coolId}`, null, false, null);
            
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

                if (item.nbt != null) {
                    // nbt item
                    modularRecipe(event, cast, type, metal, item.id, item.recipeId, item.nbt, Math.floor(typedef.size / item.count));
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