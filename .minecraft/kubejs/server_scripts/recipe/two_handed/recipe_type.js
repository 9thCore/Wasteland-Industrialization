// priority: 100
/**
 * Namespace for two-handed recipe registrations, used with one main hand itme and one off hand item
 * @namespace
 */
var TwoHandedRecipe = {
    $InteractionHand: Java.loadClass("net.minecraft.world.InteractionHand")
};

/**
 * 
 * @param {String} mainHand - Mainhand item ID
 * @param {String} offHand - Offhand item ID
 * @param {Number} chance - Chance for action to fail
 * @param {Function} failFunc - Callback in case of failure
 * @param {Function} successFunc - Callback in case of success
 */
TwoHandedRecipe.register = function(mainHand, offHand, chance, failFunc, successFunc) {
    ItemEvents.rightClicked(event => {
        // Only allow main hand interaction
        if (event.getHand() != TwoHandedRecipe.$InteractionHand.MAIN_HAND) {
            return;
        }

        const player = event.getPlayer();

        if (player == null) {
            return;
        }

        if (!Ingredient.of(mainHand).test(player.getMainHandItem())) {
            return;
        }

        if (!Ingredient.of(offHand).test(player.getOffHandItem())) {
            return;
        }

        if (chance < Math.random()) {
            failFunc(event);
            return;
        }

        successFunc(event);
    });
}

/**
 * 
 * @param {String} result - Item to give 
 * @returns {Function}
 */
TwoHandedRecipe.genericGive = function(result) {
    return event => {
        const player = event.getPlayer();
        player.getOffHandItem().shrink(1);
        player.getMainHandItem().hurtAndBreak(1, player, _ => {
            event.getLevel().broadcastEntityEvent(player, 47); 
        });
        player.giveInHand(result);
    }
}

/**
 * 
 * @param {String} sound
 * @param {String} [type="player"]
 * @param {Number} [volume=0.25]
 * @param {Number} [pitch=1.0]
 */
TwoHandedRecipe.genericSound = function(sound, type, volume, pitch) {
    type = type ? type : "player";
    volume = volume ? volume : 0.25;
    pitch = pitch ? pitch : 1.0;
    return event => {
        event.getLevel().runCommandSilent(`execute as ${event.getPlayer().getUuid()} at @s run playsound ${sound} ${type} @s ~ ~ ~ ${volume} ${pitch}`);
    }
}