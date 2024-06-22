import { ItemApplicationRecipe } from "./recipe_type"

ServerEvents.recipes(event => {
    ItemApplicationRecipe.register(event, "kubejs:string_sieve", "minecraft:dirt",
        [
            RecipePost.damageItem(),
            RecipePost.preventDefault(),
            RecipePost.random(1, 1, [
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.dropItem("minecraft:clay_ball"),
                RecipePost.dropItem("minecraft:clay_ball"),
                RecipePost.dropItem("kubejs:dirty_gold"),
                RecipePost.dropItem("2x minecraft:clay_ball"),
                RecipePost.dropItem("2x kubejs:dirty_gold"),
                RecipePost.dropItem("kubejs:dirty_gold"),
                RecipePost.dropItem("2x minecraft:clay_ball"),
                RecipePost.dropItem("3x minecraft:clay_ball")
            ]),
            RecipePost.destroyBlock()
        ]
    );
});