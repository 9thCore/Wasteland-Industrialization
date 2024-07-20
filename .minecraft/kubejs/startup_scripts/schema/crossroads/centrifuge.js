// priority: 100

StartupEvents.recipeSchemaRegistry(event => {
    const Component = (string, args) => event.components[string](args);

    event.register("crossroads:centrifuge", new Classes.$RecipeSchema(
        Component("outputFluid").key("output_fluid"),
        Component("outputItemArray").key("output"),
        Component("inputFluid").key("input")
    ));
});