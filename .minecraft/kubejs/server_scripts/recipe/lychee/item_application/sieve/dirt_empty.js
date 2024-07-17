ServerEvents.recipes(event => {
    LycheeUtils.register(
        event,
        ItemApplicationRecipe.construct("minecraft:air", "minecraft:dirt"),
        [
            RecipePost.preventDefault(),
            RecipePost.random(1, 1, [
                RecipePost.break().setWeight(14),
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