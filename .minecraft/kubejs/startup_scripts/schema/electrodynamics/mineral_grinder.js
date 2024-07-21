// priority: 100

StartupEvents.recipeSchemaRegistry(event => {
    const Component = (string, args) => event.components[string](args);
    const builder = Component("bool").builder;

    const ChancedItem = itemType => builder(
        Component(itemType).key("item").defaultOptional(),
        Component("itemTag").key("tag").defaultOptional(),
        Component("anyIntNumber").key("count").optional(1),
        Component("anyDoubleNumber").key("chance").optional(1.0)
    );

    const CountedChancedItem = itemType => builder(
        ChancedItem(itemType).key("0"),
        Component("anyIntNumber").key("count").optional(1)
    );

    event.register("electrodynamics:mineral_grinder_recipe", new Classes.$RecipeSchema(
        Component("outputItem").key("output"),
        Component("anyDoubleNumber").key("experience"),
        CountedChancedItem("inputItem").key("iteminputs"),
        CountedChancedItem("outputItem").key("itembi").defaultOptional(),
        Component("ticks").key("ticks").optional(20),
        Component("anyDoubleNumber").key("usagepertick").optional(1.0).preferred("usagePerTick")
    ));
});