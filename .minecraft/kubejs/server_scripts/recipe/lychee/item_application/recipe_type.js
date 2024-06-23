// priority: 100

export let ItemApplicationRecipe = {};

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 * @param {String|String[]} items
 * @param {Object} blockPredicate
 * @param {Object} post
 */
ItemApplicationRecipe.register = function(event, items, blockPredicate, post) {
    let items_in = [];
    items = Array.isArray(items) ? items : [items];
    items.forEach(name => {
        items_in.push({
            item: name
        });
    });

    event.custom({
        type: "lychee:block_interacting",
        item_in: items_in,
        block_in: blockPredicate,
        post: post
    });
};