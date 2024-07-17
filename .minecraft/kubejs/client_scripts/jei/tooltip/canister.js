ItemEvents.tooltip(event => {
    event.addAdvanced("kubejs:canister", (item, advanced, text) => {
        const cap = item.getCapability(ForgeCapabilities.FLUID_HANDLER_ITEM);
        cap.ifPresent(c => {
            const stack = c.getFluidInTank(0);
            if (stack.isEmpty()) {
                return;
            };

            const id = stack.fluid.arch$registryName();
            console.log(text);
            text.add(1, Text.translate(`fluid.${id.toLanguageKey()}`).darkGray());
            text.add(1, Text.gray(`${stack.amount} mB / ${c.getTankCapacity(0)} mB`));
        });
    });
});