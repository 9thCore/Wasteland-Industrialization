(function() {
    const specialKeys = {
        "minecraft.water": "block.minecraft.water",
        "minecraft.lava": "block.minecraft.lava",
        "minecraft.flowing_milk": "fluid_type.minecraft.milk"
    }

    ItemEvents.tooltip(event => {
        event.addAdvanced("kubejs:canister", (item, advanced, text) => {
            const cap = item.getCapability(ForgeCapabilities.FLUID_HANDLER_ITEM);
            cap.ifPresent(c => {
                const stack = c.getFluidInTank(0);
                if (stack.isEmpty()) {
                    return;
                };
    
                const id = stack.fluid.arch$registryName().toLanguageKey();
                const key = specialKeys[id] != null ? specialKeys[id] : `fluid.${id}`;
                text.add(1, Text.translate(key).darkGray());
                text.add(1, Text.gray(`${stack.amount} mB / ${c.getTankCapacity(0)} mB`));
            });
        });
    });
})();