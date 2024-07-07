// priority: 100

StartupEvents.recipeSchemaRegistry(event => {
    const Component = (string, args) => event.components[string](args);

    event.register("crossroads:crucible", new Classes.$RecipeSchema(
        Component("outputFluid").key("output"),
        Component("inputItem").key("input")
    ));
});