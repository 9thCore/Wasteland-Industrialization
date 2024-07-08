// priority: 100

const BlockCrushingRecipe = {};

/**
 * 
 * @param {String|String[]} [items]
 * @param {Object} [fallingBlockPredicate]
 * @param {Object} [landingBlockPredicate]
 * @param {Object} post
 */
BlockCrushingRecipe.construct = function(items, fallingBlockPredicate, landingBlockPredicate) {
    const recipe = {
        type: "lychee:block_crushing"
    };

    if (items != null) {
        recipe.item_in = LycheeUtils.KJSItemListToLychee(items);
    }
    if (fallingBlockPredicate != null) {
        recipe.falling_block = fallingBlockPredicate;
    };
    if (landingBlockPredicate != null) {
        recipe.landing_block = landingBlockPredicate;
    };

    return recipe;
};