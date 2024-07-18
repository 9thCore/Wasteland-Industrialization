// priority: 100

const RecipePost = {};

/**
 * 
 * @param {Number} num 
 */
RecipePost.weight = function(num) {
    this.weight = num;
    return this;
}

/**
 * 
 * @param {Object} obj 
 */
RecipePost.applyMethods = function(obj) {
    obj.setWeight = RecipePost.weight;
    return obj;
}

/**
 * 
 * @param {String} item
 * @param {Object} nbt
 * @returns {Object}
 */
RecipePost.dropItem = function(item, nbt) {
    const [count, name] = stripCountFromItem(item);
    return RecipePost.applyMethods({
        type: "drop_item",
        item: name,
        count: count,
        nbt: nbt ? nbt : "{}"
    });
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
    return RecipePost.applyMethods({
        type: "place",
        offsetX: offsetX ? offsetX : 0,
        offsetY: offsetY ? offsetY : 0,
        offsetZ: offsetZ ? offsetZ : 0,
        block: block
    });
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
    return RecipePost.applyMethods({
        type: "execute",
        command: command,
        hide: hide ? hide : false,
        repeat: repeat ? (repeat > 0 ? true : false) : false
    });
}

/**
 * 
 * @param {String} sound 
 * @param {String} type 
 * @param {Number} volume 
 * @param {Number} pitch 
 * @param {Boolean} hide 
 * @param {Boolean} repeat
 * @returns {Object}
 */
RecipePost.playSound = function(sound, type, volume, pitch, hide, repeat) {
    type = type ? type : "player";
    volume = volume ? volume : 1.0;
    pitch = pitch ? pitch : 1.0;
    return RecipePost.runCommand(`run playsound ${sound} ${type} @a ~ ~ ~ ${volume} ${pitch}`, hide, repeat)
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
    return RecipePost.applyMethods({
        type: "random",
        rolls: {
            min: rollMin,
            max: rollMax
        },
        entries: entries
    });
}

/**
 * 
 * @returns {Object}
 */
RecipePost.break = function() {
    return RecipePost.applyMethods({
        type: "break"
    });
}

/**
 * 
 * @returns {Object}
 */
RecipePost.preventDefault = function() {
    return RecipePost.applyMethods({
        type: "prevent_default"
    });
}

/**
 * 
 * @param {Number} [damage]
 * @param {String} [target]
 * @returns {Object}
 */
RecipePost.damageItem = function(damage, target) {
    if (target != null) {
        return RecipePost.applyMethods({
            type: "damage_item",
            damage: damage ? damage : 1,
            target: target
        })
    }

    return RecipePost.applyMethods({
        type: "damage_item",
        damage: damage ? damage : 1
    })
}

RecipePost.nothing = function() {
    return RecipePost.applyMethods({
        type: "custom",
        id: "do_nothing"
    });
}