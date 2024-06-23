import { RecipePost } from "../post";
import { ItemInBlockRecipe } from "./recipe_type";

ServerEvents.recipes(event => {
    ItemInBlockRecipe.register(event, "kubejs:dry_dirt", "minecraft:water", 2, null, [
        RecipePost.dropItem("minecraft:dirt")
    ]);
    
    ItemInBlockRecipe.register(event, "kubejs:dirty_gold", "minecraft:water", 3, null, [
        RecipePost.dropItem("minecraft:gold_nugget")
    ]);
});