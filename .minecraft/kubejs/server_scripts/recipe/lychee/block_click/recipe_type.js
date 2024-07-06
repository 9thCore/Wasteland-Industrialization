// priority: 100

const BlockClickRecipe = {};

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 * @param {String|String[]} items
 * @param {Object} blockPredicate
 * @param {Object} post
 */
BlockClickRecipe.register = function(event, items, blockPredicate, post) {
    let items_in = [];
    items = Array.isArray(items) ? items : [items];
    items.forEach(name => {
        items_in.push({
            item: name
        });
    });

    event.custom({
        type: "lychee:block_clicking",
        item_in: items_in,
        block_in: blockPredicate,
        post: post
    });
};