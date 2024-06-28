// priority: 100

import { Classes } from "../util";

StartupEvents.recipeSchemaRegistry(event => {
    const components = event.getComponents();

    event.register("crossroads:mill", new Classes.$RecipeSchema(
        components.get("outputItemArray")().key("output"),
        components.get("inputItem")().key("input")
    ));
});