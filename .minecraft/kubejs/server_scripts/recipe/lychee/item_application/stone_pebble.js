ServerEvents.recipes(event => {
    LycheeUtils.register(
        event,
        ItemApplicationRecipe.construct("kubejs:pebble_sharp", "minecraft:stone"),
        [
            RecipePost.preventDefault(),
            RecipePost.random(1, 1, [
                RecipePost.break().setWeight(9),
                RecipePost.dropItem("kubejs:pebble_chiseled").setWeight(2),
                RecipePost.dropItem("kubejs:pebble"),
                RecipePost.dropItem("2x kubejs:pebble"),
                RecipePost.dropItem("6x kubejs:pebble")
            ]),
            RecipePost.placeBlock(0, 0, 0, "minecraft:cobblestone")
        ]
    );
    
    LycheeUtils.register(
        event,
        ItemApplicationRecipe.construct("kubejs:pebble_sharp", "minecraft:cobblestone"),
        [
            RecipePost.preventDefault(),
            RecipePost.random(1, 1, [
                RecipePost.break().setWeight(2),
                RecipePost.dropItem("2x kubejs:pebble_sharp"),
                RecipePost.dropItem("kubejs:pebble_chiseled"),
                RecipePost.dropItem("3x kubejs:pebble_sharp"),
                RecipePost.dropItem("5x kubejs:pebble_chiseled"),
            ]),
            RecipePost.destroyBlock()
        ]
    );
});