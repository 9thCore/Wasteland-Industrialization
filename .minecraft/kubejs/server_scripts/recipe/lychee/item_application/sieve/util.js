/**
 * 
 * @param {Internal.ServerEventJS} event 
 * @param {String|String[]} sieves 
 * @param {String} block 
 * @param {Object|Object[]} post 
 */
function RegisterSieveRecipes(event, sieves, block, post) {
    (Array.isArray(sieves) ? sieves : [sieves]).forEach(sieve => {
        LycheeUtils.register(event, ItemApplicationRecipe.construct(sieve, block), post);
    });
};