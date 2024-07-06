ServerEvents.recipes(event => {
    ItemApplicationRecipe.register(event, "kubejs:pebble_sharp", "minecraft:stone",
        [
            RecipePost.preventDefault(),
            RecipePost.random(1, 1, [
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.dropItem("kubejs:pebble_chiseled"),
                RecipePost.dropItem("kubejs:pebble"),
                RecipePost.dropItem("kubejs:pebble_chiseled"),
                RecipePost.dropItem("2x kubejs:pebble"),
                RecipePost.dropItem("6x kubejs:pebble")
            ]),
            RecipePost.placeBlock(0, 0, 0, "minecraft:cobblestone")
        ]
    );
    
    ItemApplicationRecipe.register(event, "kubejs:pebble_sharp", "minecraft:cobblestone",
        [
            RecipePost.preventDefault(),
            RecipePost.random(1, 1, [
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.dropItem("2x kubejs:pebble_sharp"),
                RecipePost.dropItem("kubejs:pebble_chiseled"),
                RecipePost.dropItem("3x kubejs:pebble_sharp"),
                RecipePost.dropItem("5x kubejs:pebble_chiseled"),
            ]),
            RecipePost.destroyBlock()
        ]
    );
});