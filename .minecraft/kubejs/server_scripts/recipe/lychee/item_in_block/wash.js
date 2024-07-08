ServerEvents.recipes(event => {
    LycheeUtils.register(
        event,
        ItemInBlockRecipe.construct("kubejs:dry_dirt", "minecraft:water", 2),
        [
            RecipePost.dropItem("minecraft:dirt")
        ]
    )
    
    LycheeUtils.register(
        event,
        ItemInBlockRecipe.construct("kubejs:dirty_gold", "minecraft:water", 3),
        [
            RecipePost.dropItem("minecraft:gold_nugget")
        ]
    )
});