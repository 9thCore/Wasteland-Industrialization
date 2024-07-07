// priority: 100

StartupEvents.recipeSchemaRegistry(event => {
    const Component = (string, args) => event.components[string](args);

    event.register("crossroads:cr_blast_furnace", new Classes.$RecipeSchema(
        Component("outputFluid").key("output"),
        Component("intNumber").key("slag"),
        Component("inputItem").key("ingredient")
    ));
});