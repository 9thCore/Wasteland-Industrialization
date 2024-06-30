ItemEvents.tooltip(event => {
    global.casts.forEach(cast => {
        cast.types.forEach(type => {
            if (!cast.canContainMetal) {
                event.add(`kubejs:${cast.id}_${type}`, Text.gray("Cannot contain metal."));
                return;
            }

            event.addAdvanced(`kubejs:${cast.id}_${type}`, (item, advanced, text) => {
                const nbt = item.getNbt();
                const data = nbt?.BlockEntityTag?.data;
                if (nbt == null || data == null || data.metal_inside == null) {
                    text.add(Text.gray("Contains no metal."));
                } else {
                    text.add(Text.gray(`Contains ${data.nugget_count}/${global.castTypes[type].size} ${data.metal_inside}.`));
                };
            });
        });
    });
});