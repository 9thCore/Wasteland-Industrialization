ServerEvents.recipes(event => {
    BlockCrushingRecipe.register(event, "minecraft:iron_block", null, null, RecipePost.dropItem("2x electrodynamics:plateiron"));
    BlockCrushingRecipe.register(event, "minecraft:copper_block", null, null, RecipePost.dropItem("2x electrodynamics:platecopper"));
    BlockCrushingRecipe.register(event, "electrodynamics:resourceblocksteel", null, null, RecipePost.dropItem("2x electrodynamics:platesteel"));
    BlockCrushingRecipe.register(event, "electrodynamics:resourceblocklead", null, null, RecipePost.dropItem("2x electrodynamics:platelead"));
    BlockCrushingRecipe.register(event, "electrodynamics:resourceblockbronze", null, null, RecipePost.dropItem("2x electrodynamics:platebronze"));
});