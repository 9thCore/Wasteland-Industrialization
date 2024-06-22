ItemEvents.tooltip(event => {
    event.add("kubejs:clay_ingot_cast", Text.gray("Cannot contain metal."));

    event.addAdvanced("#kubejs:casts", (item, advanced, text) => {
        let nbt = item.getNbt();
        if (nbt == null || nbt.metal_inside == null) {
            text.add(Text.gray("Contains no metal."));
        } else {
            text.add(Text.gray(`Contains ${nbt.nugget_count}/9 ${nbt.metal_inside}.`));
        };
    });
});