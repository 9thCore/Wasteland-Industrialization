// priority: 100

StartupEvents.recipeSchemaRegistry(event => {
    const Component = (string, args) => event.components[string](args);

    // Because the format is all over the place, recipes are constructed with a builder scheme instead
    // event.recipes.crossroads.fluid_cooling(200).fluid("minecraft:milk").output("minecraft:diamond");

    event.register("crossroads:fluid_cooling", new Classes.$RecipeSchema(
        Component("anyIntNumber").key("fluid_amount").preferred("fluidAmount"),
        Component("registryObject", { registry: "fluid" }).key("fluid").defaultOptional(),
        Component("tag", { registry: "fluid" }).key("tag").defaultOptional(),
        Component("registryObject", { registry: "item" }).key("item").defaultOptional(),
        Component("outputItem").key("output").defaultOptional(),
        Component("anyFloatNumber").key("max_temp").preferred("maxTemp").optional(0).alwaysWrite(),
        Component("anyFloatNumber").key("temp_change").preferred("tempChange").optional(20).alwaysWrite()
    ));
});