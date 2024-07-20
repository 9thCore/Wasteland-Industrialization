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

    LycheeUtils.register(
        event,
        ItemApplicationRecipe.construct(
            "kubejs:string_sieve",
            "minecraft:dirt"
        ),
        [
            RecipePost.damageItem(),
            RecipePost.preventDefault(),
            RecipePost.random(1, 1, [
                RecipePost.preventDefault().setWeight(9),
                RecipePost.dropItem("kubejs:oak_acorn"),
                RecipePost.dropItem("kubejs:spruce_acorn"),
                RecipePost.dropItem("kubejs:dark_oak_acorn"),
                RecipePost.dropItem("kubejs:birch_acorn"),
                RecipePost.dropItem("kubejs:acacia_acorn"),
                RecipePost.dropItem("kubejs:jungle_acorn")
            ]),
            RecipePost.random(1, 1, [
                RecipePost.break().setWeight(6),
                RecipePost.dropItem("minecraft:clay_ball").setWeight(2),
                RecipePost.dropItem("2x minecraft:clay_ball").setWeight(2),
                RecipePost.dropItem("3x minecraft:clay_ball"),
                RecipePost.dropItem("kubejs:dirty_gold").setWeight(2),
                RecipePost.dropItem("2x kubejs:dirty_gold")
            ]),
            RecipePost.destroyBlock()
        ]
    );

    LycheeUtils.register(
        event,
        ItemApplicationRecipe.construct(
            "kubejs:iron_sieve",
            "minecraft:dirt"
        ),
        [
            RecipePost.damageItem(),
            RecipePost.preventDefault(),
            RecipePost.random(1, 1, [
                RecipePost.break().setWeight(24),
                RecipePost.dropItem("wheat_seeds"),
                RecipePost.dropItem("supplementaries:flax_seeds").setWeight(2),
                RecipePost.dropItem("minecraft:clay_ball").setWeight(3),
                RecipePost.dropItem("2x minecraft:clay_ball"),
                RecipePost.dropItem("3x minecraft:clay_ball").setWeight(2),
                RecipePost.dropItem("2x kubejs:dirty_gold").setWeight(3),
                RecipePost.dropItem("3x kubejs:dirty_gold").setWeight(2)
            ]),
            RecipePost.destroyBlock()
        ]
    );
});