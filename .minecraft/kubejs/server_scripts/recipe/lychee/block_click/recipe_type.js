// priority: 100

export let BlockClickRecipe = {};

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 * @param {String} item
 * @param {Object} blockPredicate
 * @param {Object} post
 */
BlockClickRecipe.register = function(event, item, blockPredicate, post) {
    const [count, name] = stripCountFromItem(item);
    event.custom({
        type: "lychee:block_clicking",
        item_in: {
            item: name,
            count: count
        },
        block_in: blockPredicate,
        post: post
    });
};