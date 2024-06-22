// priority: 100

export let RandomBlockTickingRecipe = {};

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 * @param {Object} blockPredicate
 * @param {Object} post
 */
RandomBlockTickingRecipe.register = function(event, blockPredicate, post) {
    event.custom({
        type: "lychee:random_block_ticking",
        block_in: blockPredicate,
        post: post
    });
}