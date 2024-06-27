ItemEvents.tooltip(event => {
    // event.add("kubejs:clay_ingot_cast", Text.gray("Cannot contain metal."));

    global.casts.forEach(cast => {
        cast.types.forEach(type => {
            if (!cast.canContainMetal) {
                event.add(`kubejs:${cast.id}_${type}`, Text.gray("Cannot contain metal."));
                return;
            }

            event.addAdvanced(`kubejs:${cast.id}_${type}`, (item, advanced, text) => {
                const nbt = item.getNbt();
                if (nbt == null || nbt.metal_inside == null) {
                    text.add(Text.gray("Contains no metal."));
                } else {
                    text.add(Text.gray(`Contains ${nbt.nugget_count}/${global.castTypes[type].size} ${nbt.metal_inside}.`));
                };
            });
        });
    });
});