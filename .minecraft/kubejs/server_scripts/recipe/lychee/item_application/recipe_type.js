// priority: 100

const ItemApplicationRecipe = {};

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 * @param {String|String[]} items
 * @param {Object} blockPredicate
 * @param {Object} post
 * @param {Object[]} conditions
 * @param {Object[]} contextualConditions
 * @param {Object[]} forgeConditions
 */
ItemApplicationRecipe.register = function(event, items, blockPredicate, post, contextualConditions, forgeConditions) {
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
        post: post,
        conditions: forgeConditions ? forgeConditions : [],
        contextual: contextualConditions ? contextualConditions : []
    });
};