// priority: 100

const ItemInBlockRecipe = {};

/**
 * 
 * @param {Object} event 
 * @param {String} item 
 * @param {String|Object} block 
 * @param {Number} [seconds=1]
 * @param {Number} [max_repeats=64]
 * @param {Object|Object[]} post
 */
ItemInBlockRecipe.register = function(event, item, block, seconds, max_repeats, post) {
    event.custom({
        type: "lychee:item_inside",
        item_in: {
            item: item,
            count: 1
        },
        block_in: block,
        time: seconds ? seconds : 1,
        max_repeats: max_repeats ? max_repeats : 64,
        post: post
    });
};