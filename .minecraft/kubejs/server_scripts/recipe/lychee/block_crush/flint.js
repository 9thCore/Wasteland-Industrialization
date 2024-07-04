import { RecipePost } from "../post";
import { BlockCrushingRecipe } from "./recipe_type";

ServerEvents.recipes(event => {
    BlockCrushingRecipe.register(event, "minecraft:gravel", null, null, [
        RecipePost.dropItem("minecraft:flint"),
        RecipePost.random(1, 1, [
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.dropItem("minecraft:flint")
        ])
    ]);
});