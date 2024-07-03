import { RecipePost } from "../post";
import { BlockCrushingRecipe } from "./recipe_type";

ServerEvents.recipes(event => {
    BlockCrushingRecipe.register(event, "minecraft:cobblestone", null, null, [
        RecipePost.dropItem("minecraft:gravel"),
        RecipePost.random(1, 1, [
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.break(),
            RecipePost.dropItem("kubejs:iron_bit"),
            RecipePost.dropItem("2x kubejs:iron_bit"),
            RecipePost.dropItem("kubejs:coal_bit"),
            RecipePost.dropItem("kubejs:coal_bit"),
            RecipePost.dropItem("2x kubejs:coal_bit"),
            RecipePost.dropItem("3x kubejs:coal_bit"),
            RecipePost.dropItem("2x kubejs:copper_bit"),
            RecipePost.dropItem("3x kubejs:copper_bit"),
            RecipePost.dropItem("3x kubejs:copper_bit"),
            RecipePost.dropItem("4x kubejs:copper_bit")
        ])
    ]);
});