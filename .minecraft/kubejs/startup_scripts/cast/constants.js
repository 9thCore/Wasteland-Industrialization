// priority 200

global.casts = [
    {
        type: "ingot_cast",
        id: "ceramic",
        displayName: "Ceramic",
        texture: "minecraft:block/terracotta",
        maxTemp: 900
    }
];

global.moltenMetals = [
    {
        id: "molten_gold",
        coolId: "gold",
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
        results: {
            ingot_cast: "minecraft:gold_ingot"
        },
        insideCastName: "gold",
        displayName: "Molten Gold",
        cooledDisplayName: "Gold",
        fluidTexture: "crossroads:block/molten_gold_still",
        cooledTexture: "minecraft:block/gold_block",
        temp: 900
    }
];