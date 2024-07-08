// priority: 100

const BlockClickRecipe = {};

/**
 * 
 * @param {String|String[]} items
 * @param {Object} blockPredicate
 * @param {Object} post
 */
BlockClickRecipe.construct = function(items, blockPredicate) {
    return {
        type: "lychee:block_clicking",
        item_in: LycheeUtils.KJSItemListToLychee(items),
        block_in: blockPredicate
    };
};