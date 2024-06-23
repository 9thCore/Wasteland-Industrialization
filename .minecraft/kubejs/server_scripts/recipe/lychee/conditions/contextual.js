// priority: 100

export const ContextualCondititions = {};

/**
 * 
 * @param {Object} condition 
 * @returns {Object}
 */
ContextualCondititions.not = function(condition) {
    return {
        type: "not",
        contextual: condition
    };
};

/**
 * 
 * @param {Object[]} condition 
 * @returns {Object}
 */
ContextualCondititions.or = function(conditions) {
    return {
        type: "not",
        contextual: conditions
    };
};

/**
 * 
 * @param {Object[]} condition 
 * @returns {Object}
 */
ContextualCondititions.and = function(conditions) {
    return {
        type: "not",
        contextual: conditions
    };
};

/**
 * 
 * @param {Number} chance
 * @returns {Object}
 */
ContextualCondititions.chance = function(chance) {
    return {
        type: "not",
        chance: chance
    };
};

/**
 * 
 * @param {Number} offsetX
 * @param {Number} offsetY
 * @param {Number} offsetZ
 * @param {Object} location 
 * @returns {Object}
 */
ContextualCondititions.location = function(offsetX, offsetY, offsetZ, location) {
    return {
        type: "location",
        offsetX: offsetX ? offsetX : 0,
        offsetY: offsetY ? offsetY : 0,
        offsetZ: offsetZ ? offsetZ : 0,
        predicate: location
    };
};

/**
 * 
 * @param {Number} offsetX
 * @param {Number} offsetY
 * @param {Number} offsetZ
 * @param {String} biome_tag
 * @returns {Object}
 */
ContextualCondititions.biome = function(offsetX, offsetY, offsetZ, biome_tag) {
    return ContextualCondititions.location(offsetX, offsetY, offsetZ, {
        "lychee:biome_tag": biome_tag
    });
};

/**
 * 
 * @param {String} direction
 * @returns {Object}
 */
ContextualCondititions.direction = function(direction) {
    return {
        type: "direction",
        direction: direction
    };
};