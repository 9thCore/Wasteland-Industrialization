// priority: 100

const ItemInBlockRecipe = {};

/**
 * 
 * @param {String} item 
 * @param {String|Object} block 
 * @param {Number} [seconds=1]
 */
ItemInBlockRecipe.construct = function(items, block, seconds) {
    return {
        type: "lychee:item_inside",
        item_in: LycheeUtils.KJSItemListToLychee(items),
        block_in: block,
        time: seconds ? seconds : 1
    };
};