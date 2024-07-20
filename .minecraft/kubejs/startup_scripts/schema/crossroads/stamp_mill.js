// priority: 100

StartupEvents.recipeSchemaRegistry(event => {
    const components = event.getComponents();

    event.register("crossroads:stamp_mill", new Classes.$RecipeSchema(
        components.get("outputItem")().key("output"),
        components.get("inputItem")().key("ingredient")
    ));
});