ServerEvents.recipes(event => {
    ItemApplicationRecipe.register(event, "kubejs:string_sieve", "minecraft:dirt",
        [
            RecipePost.damageItem(),
            RecipePost.preventDefault(),
            RecipePost.random(1, 1, [
                RecipePost.preventDefault(),
                RecipePost.preventDefault(),
                RecipePost.preventDefault(),
                RecipePost.preventDefault(),
                RecipePost.preventDefault(),
                RecipePost.preventDefault(),
                RecipePost.preventDefault(),
                RecipePost.preventDefault(),
                RecipePost.preventDefault(),
                RecipePost.dropItem("kubejs:oak_acorn"),
                RecipePost.dropItem("kubejs:spruce_acorn"),
                RecipePost.dropItem("kubejs:dark_oak_acorn"),
                RecipePost.dropItem("kubejs:birch_acorn"),
                RecipePost.dropItem("kubejs:acacia_acorn"),
                RecipePost.dropItem("kubejs:jungle_acorn")
            ]),
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
    
    ItemApplicationRecipe.register(event, "minecraft:air", "minecraft:dirt",
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
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.break(),
                RecipePost.dropItem("kubejs:oak_acorn"),
                RecipePost.dropItem("kubejs:spruce_acorn"),
                RecipePost.dropItem("kubejs:dark_oak_acorn"),
                RecipePost.dropItem("kubejs:birch_acorn"),
                RecipePost.dropItem("kubejs:acacia_acorn"),
                RecipePost.dropItem("kubejs:jungle_acorn")
            ]),
            RecipePost.destroyBlock()
        ]
    );
});