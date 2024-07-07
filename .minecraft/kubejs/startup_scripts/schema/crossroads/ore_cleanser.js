// priority: 100

StartupEvents.recipeSchemaRegistry(event => {
    const Component = (string, args) => event.components[string](args);

    event.register("crossroads:ore_cleanser", new Classes.$RecipeSchema(
        Component("outputItem").key("output"),
        Component("inputItem").key("ingredient")
    ));
});