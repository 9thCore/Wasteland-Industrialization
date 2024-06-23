import { BlockClickRecipe } from "./recipe_type";
import { RecipePost } from "../post";

ServerEvents.recipes(event => {
    BlockClickRecipe.register(event, "kubejs:flimsy_pickaxe", "kubejs:dry_dirt",
        [
            RecipePost.preventDefault(),
            RecipePost.random(1, 1, [
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.destroyBlock()
            ]),
            RecipePost.preventDefault(),
            RecipePost.damageItem(1),
            RecipePost.dropItem("kubejs:dry_dirt")
        ]
    );
});