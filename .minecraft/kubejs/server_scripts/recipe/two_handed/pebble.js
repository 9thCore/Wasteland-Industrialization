// priority: 0

(function() {
    const pebbleHitSound = TwoHandedRecipe.genericSound("minecraft:block.stone.hit");
    const pebbleBreakSound = TwoHandedRecipe.genericSound("minecraft:block.stone.break");

    const oreData = [
        {id: "minecraft:air", weight: 150},
        {id: "kubejs:coal_bit", weight: 30},
        {id: "kubejs:coal_bit", count: 2, weight: 20},
        {id: "kubejs:iron_bit", weight: 20},
        {id: "kubejs:iron_bit", count: 2, weight: 10},
        {id: "kubejs:copper_bit", count: 3, weight: 25},
        {id: "kubejs:copper_bit", count: 2, weight: 5},
    ]

    function pebbleParticles(event) {
        event.getLevel().runCommandSilent(`execute as ${event.getPlayer().getUuid()} at @s run particle minecraft:block minecraft:stone ^ ^1.5 ^0.5 0 0 0 1 5`);
    }

    function breakOpenPebble(event, failChance, successItem) {
        const player = event.getPlayer();
        const level = event.getLevel();

        player.getOffHandItem().shrink(1);
        if (Math.random() <= failChance) {
            level.runCommandSilent(`execute as ${player.getUuid()} at @s rotated as @s run playsound minecraft:entity.item.break player @s ~ ~ ~ 0.25`);
        } else {
            player.give(successItem);
        }
    }

    function generatePebbleOre(event) {
        let totalWeight = 0;
        for (let i = 0; i < oreData.length; i++) {
            totalWeight += oreData[i].weight;
        }

        let chosenWeight = arbitraryRangeRandom(0, totalWeight);

        let chosenOre = 0;
        for (let i = 0; i < oreData.length; i++) {
            chosenWeight -= oreData[i].weight;
            if (chosenWeight <= 0) {
                chosenOre = i;
                break;
            }
        }

        if (chosenOre > 0) {
            const ore = oreData[chosenOre];
            event.getPlayer().give(ore.id);
        }
    }

    TwoHandedRecipe.register(
        "kubejs:pebble", "kubejs:pebble",
        0.1,
        pebbleHitSound,
        event => {
            pebbleBreakSound(event);
            pebbleParticles(event);
            breakOpenPebble(event, 0.75, "kubejs:pebble_chiseled");
            generatePebbleOre(event);
        }
    );

    TwoHandedRecipe.register(
        "kubejs:pebble", "kubejs:pebble_chiseled",
        0.075,
        pebbleHitSound,
        event => {
            pebbleBreakSound(event);
            pebbleParticles(event);
            breakOpenPebble(event, 0.75, "kubejs:pebble_sharp");
        }
    );

    TwoHandedRecipe.register(
        "kubejs:pebble_sharp", "kubejs:pebble",
        0.2,
        pebbleHitSound,
        event => {
            pebbleBreakSound(event);
            pebbleParticles(event);
            breakOpenPebble(event, 0.4, "kubejs:pebble_chiseled");
            generatePebbleOre(event);
        }
    );

    TwoHandedRecipe.register(
        "kubejs:pebble_sharp", "kubejs:pebble_chiseled",
        0.3,
        pebbleHitSound,
        event => {
            pebbleBreakSound(event);
            pebbleParticles(event);
            breakOpenPebble(event, 0.3, "kubejs:pebble_sharp");
        }
    );
})();