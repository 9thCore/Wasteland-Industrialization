// priority: 100

export const RecipePost = {};

/**
 * 
 * @param {String} item
 * @param {Object} nbt
 * @returns {Object}
 */
RecipePost.dropItem = function(item, nbt) {
    const [count, name] = stripCountFromItem(item);
    return {
        type: "drop_item",
        item: name,
        count: count,
        nbt: nbt ? nbt : "{}"
    };
}

/**
 * 
 * @param {Number} [offsetX]
 * @param {Number} [offsetY]
 * @param {Number} [offsetZ]
 * @param {Object} block
 * @returns {Object}
 */
RecipePost.placeBlock = function(offsetX, offsetY, offsetZ, block) {
    return {
        type: "place",
        offsetX: offsetX ? offsetX : 0,
        offsetY: offsetY ? offsetY : 0,
        offsetZ: offsetZ ? offsetZ : 0,
        block: block
    };
}

/**
 * 
 * @param {Number} offsetX
 * @param {Number} offsetY
 * @param {Number} offsetZ
 * @returns {Object}
 */
RecipePost.destroyBlock = function(offsetX, offsetY, offsetZ) {
    return RecipePost.placeBlock(offsetX, offsetY, offsetZ, "*");
}

/**
 * 
 * @param {String} command 
 * @param {Boolean} hide 
 * @param {Boolean} repeat
 * @returns {Object}
 */
RecipePost.runCommand = function(command, hide, repeat) {
    return {
        type: "execute",
        command: command,
        hide: hide ? hide : false,
        repeat: repeat ? (repeat > 0 ? true : false) : false
    };
}

/**
 * 
 * @param {Number} rollMin 
 * @param {Number} rollMax 
 * @param {Object|Object[]} entries 
 * @param {Object} entries[]
 * @returns {Object}
 */
RecipePost.random = function(rollMin, rollMax, entries) {
    return {
        type: "random",
        rolls: {
            min: rollMin,
            max: rollMax
        },
        entries: entries
    };
}

/**
 * 
 * @returns {Object}
 */
RecipePost.break = function() {
    return {
        type: "break"
    };
}

/**
 * 
 * @returns {Object}
 */
RecipePost.preventDefault = function() {
    return {
        type: "prevent_default"
    };
}

/**
 * 
 * @param {Number} [damage]
 * @param {String} [target]
 * @returns {Object}
 */
RecipePost.damageItem = function(damage, target) {
    if (target != null) {
        return {
            type: "damage_item",
            damage: damage ? damage : 1,
            target: target
        }
    }

    return {
        type: "damage_item",
        damage: damage ? damage : 1
    }
}