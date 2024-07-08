// priority: 100

const LycheeUtils = {};

/**
 * 
 * @param {Array<Internal.KubeJSIngredient>} items 
 * @returns {Array<Ingredient>}
 */
LycheeUtils.KJSItemListToLychee = function(items) {
    let items_in = [];
    items = Array.isArray(items) ? items : [items];
    items.forEach(name => {
        const [count, id] = stripCountFromItem(name);
        for (let i = 0; i < count; i++) {
            items_in.push({
                item: id
            });
        };
    });
    return items_in;
};

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 * @param {JSON} recipe 
 * @param {Object|Object[]} post 
 * @param {Object|Object[]} [conditions] 
 * @param {Object|Object[]} [contextual] 
 * @param {String} [comment] 
 * @param {Boolean} [ghost] 
 * @param {Boolean} [hideInViewer] 
 * @param {String} [group] 
 * @param {Integer} [maxRepeats]
 */
LycheeUtils.register = function(event, recipe, post, conditions, contextual, comment, ghost, hideInViewer, group, maxRepeats) {
    if (post == null) {
        throw new Error("Recipe must have post actions");
    }
    recipe.post = post;
    if (conditions != null) { recipe.conditions = condition; }
    if (contextual != null) { recipe.contextual = contextual; }
    if (comment != null) { recipe.comment = comment; }
    if (ghost != null) { recipe.ghost = ghost; }
    if (hideInViewer != null) { recipe.hide_in_viewer = hideInViewer; }
    if (group != null) { recipe.group = group; }
    if (maxRepeats != null) { recipe.max_repeats = maxRepeats; }
    return event.custom(recipe);
}