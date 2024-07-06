// priority: 100

const BlockCrushingRecipe = {};

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 * @param {String|String[]} [items]
 * @param {Object} [fallingBlockPredicate]
 * @param {Object} [landingBlockPredicate]
 * @param {Object} post
 */
BlockCrushingRecipe.register = function(event, items, fallingBlockPredicate, landingBlockPredicate, post) {
    let items_in = [];
    items = Array.isArray(items) ? items : [items];
    items.forEach(name => {
        items_in.push({
            item: name
        });
    });

    const recipe = {
        type: "lychee:block_crushing",
        item_in: items_in,
        post: post
    };
    
    if (fallingBlockPredicate) {
        recipe.falling_block = fallingBlockPredicate;
    };
    if (landingBlockPredicate) {
        recipe.landing_block = landingBlockPredicate;
    };

    event.custom(recipe);
};