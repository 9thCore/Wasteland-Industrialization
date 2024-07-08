// priority: 100

const ItemApplicationRecipe = {};

/**
 * 
 * @param {String|String[]} items
 * @param {Object} blockPredicate
 */
ItemApplicationRecipe.construct = function(items, blockPredicate) {
    return {
        type: "lychee:block_interacting",
        item_in: LycheeUtils.KJSItemListToLychee(items),
        block_in: blockPredicate
    };
};