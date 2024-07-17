ServerEvents.recipes(event => {
    RegisterSieveRecipes(
        event,
        [
            "kubejs:string_sieve",
            "kubejs:iron_sieve"
        ],
        "minecraft:gravel",
        [
            RecipePost.damageItem(),
            RecipePost.preventDefault(),
            RecipePost.random(1, 1, [
                RecipePost.break().setWeight(8),
                RecipePost.dropItem("minecraft:flint")
            ]),
            RecipePost.destroyBlock()
        ]
    );
});