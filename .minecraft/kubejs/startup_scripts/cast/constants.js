// priority 200

global.casts = [
    {
        id: "ceramic",
        displayName: "Ceramic",
        texture: "minecraft:block/terracotta",
        maxTemp: 900
    }
];

global.moltenMetals = [
    {
        id: "molten_gold",
        items: [
            {
                id: "minecraft:gold_nugget",
                count: 1
            },
            {
                id: "minecraft:gold_ingot",
                count: 9
            }
        ],
        insideCastName: "gold",
        displayName: "Molten Gold",
        cooledDisplayName: "Gold",
        fluidTexture: "crossroads:block/molten_gold_still",
        cooledTexture: "minecraft:block/gold_block",
        temp: 900
    }
];