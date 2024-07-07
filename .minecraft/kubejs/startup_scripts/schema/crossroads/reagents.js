// priority: 100

StartupEvents.recipeSchemaRegistry(event => {
    const Component = (string, args) => event.components[string](args);
    const intNumber = Component("intNumber");
    const anyString = Component("anyString");
    const builder = Component("bool").builder;

    const vessel = Component("filteredString", {
        error: `Invalid vessel: must be "glass", "crystal" or "destructive"`,
        filter: s => s == "glass" || s == "crystal" || s == "destructive"
    });

    const stringMustBe = target => Component("filteredString", {
        error: `Must be "${target}"`,
        filter: s => s == target
    })

    const stateChangePoint = stringMustBe("never").or(intNumber);

    const hexColor = Component("filteredString", {
        error: `Invalid hex string`,
        filter: s => /[0-9A-Fa-f]{6}/.test(s)
    });

    const colorObject = builder(
        hexColor.key("base").optional("FFFFFFFF"),
        hexColor.key("solid").optional("FFFFFFFF"),
        hexColor.key("liquid").optional("FFFFFFFF"),
        hexColor.key("gas").optional("FFFFFFFF"),
        hexColor.key("flame").optional("FFFFFFFF")
    );
    const color = hexColor.or(colorObject);

    const resourceLocation = Component("filteredString", {
        error: `Incorrect ResourceLocation, must only contain a-z, A-Z, 0-9 or _`,
        filter: s => /[a-zA-Z0-9_]+:[a-zA-Z0-9_]+/.test(s)
    });

    const flame = Component("filteredString", {
        error: `Must be one of "none", "small", "large", "fixed_small", "fixed_large"`,
        filter: s => s == "none" || s == "small" || s == "large" || s == "fixed_small" || s == "fixed_large"
    });

    const fluid = builder(
        resourceLocation.key("tag").optional("crossroads:empty"),
        resourceLocation.key("fluid").optional("minecraft:empty")
    );

    event.register("crossroads:reagents", new Classes.$RecipeSchema(
        anyString.key("id"),
        anyString.key("group").optional(""),
        fluid.key("fluid").optional(undefined),
        intNumber.key("fluid_amount").optional(0),
        vessel.key("vessel").optional("glass"),
        stateChangePoint.key("melting").optional(-275),
        stateChangePoint.key("boiling").optional(-274),
        color.key("color").optional("FFFFFFFF"),
        anyString.key("effect").optional("none"),
        flame.key("flame").optional("none"),
        Component("itemTag").key("item").optional("crossroads:empty")
    ));
});