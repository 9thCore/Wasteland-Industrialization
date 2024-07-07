// priority 200

// block: chance to melt every randomtick
global.castHeatSource = {
    "minecraft:campfire": 0.25, // about 4 minutes
    "minecraft:lava": 0.33 // about 3 minutes
};

global.castTypes = {
    ingot_cast: {
        size: 9,
        displayName: "Ingot Cast",
        modifier: block => {
            block.box(5, 0, 3, 11, 4, 13).box(6, 3, 1, 10, 4, 15);
        }
    }
};

global.casts = [
    {
        types: ["ingot_cast"],
        id: "ceramic",
        displayName: "Ceramic",
        texture: "minecraft:block/terracotta",
        maxTemp: 2000,
        canContainMetal: true
    },
    {
        types: ["ingot_cast"],
        id: "clay",
        displayName: "Clay",
        texture: "minecraft:block/clay",
        maxTemp: -Infinity,
        canContainMetal: false
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
            },
            {
                id: "minecraft:raw_gold",
                count: 9
            },
            {
                id: "electrodynamics:dustgold",
                count: 9
            },
            {
                id: "crossroads:ore_clump",
                nbt: {
                    material: "gold"
                },
                recipeId: "clump",
                count: 9
            },
            {
                id: "crossroads:ore_gravel",
                nbt: {
                    material: "gold"
                },
                recipeId: "gravel",
                count: 9
            },
            {
                id: "minecraft:gold_ore",
                count: 9
            },
            {
                id: "minecraft:nether_gold_ore",
                count: 9
            }
        ],
        results: {
            ingot_cast: "minecraft:gold_ingot"
        },
        displayName: "Molten Gold",
        cooledDisplayName: "Gold",
        fluidTexture: "crossroads:block/molten_gold_still",
        cooledTexture: "minecraft:block/gold_block",
        temp: 1000
    },
    {
        id: "molten_iron",
        coolId: "iron",
        items: [
            {
                id: "minecraft:iron_nugget",
                count: 1
            },
            {
                id: "kubejs:iron_bit",
                count: 1
            },
            {
                id: "minecraft:iron_ingot",
                count: 9
            },
            {
                id: "minecraft:raw_iron",
                count: 9
            },
            {
                id: "electrodynamics:dustiron",
                count: 9
            },
            {
                id: "crossroads:ore_clump",
                nbt: {
                    material: "iron"
                },
                recipeId: "clump",
                count: 9
            },
            {
                id: "crossroads:ore_gravel",
                nbt: {
                    material: "iron"
                },
                recipeId: "gravel",
                count: 9
            },
            {
                id: "minecraft:iron_ore",
                count: 9
            }
        ],
        results: {
            ingot_cast: "minecraft:iron_ingot"
        },
        displayName: "Molten Iron",
        cooledDisplayName: "Iron",
        fluidTexture: "crossroads:block/molten_iron_still",
        cooledTexture: "minecraft:block/iron_block",
        temp: 1000
    },
    {
        id: "molten_copper",
        coolId: "copper",
        items: [
            {
                id: "electrodynamics:nuggetcopper",
                count: 1
            },
            {
                id: "kubejs:copper_bit",
                count: 1
            },
            {
                id: "minecraft:copper_ingot",
                count: 9
            },
            {
                id: "minecraft:raw_copper",
                count: 9
            },
            {
                id: "electrodynamics:dustcopper",
                count: 9
            },
            {
                id: "crossroads:ore_clump",
                nbt: {
                    material: "copper"
                },
                recipeId: "clump",
                count: 9
            },
            {
                id: "crossroads:ore_gravel",
                nbt: {
                    material: "copper"
                },
                recipeId: "gravel",
                count: 9
            },
            {
                id: "minecraft:copper_ore",
                count: 9
            }
        ],
        results: {
            ingot_cast: "minecraft:copper_ingot"
        },
        displayName: "Molten Copper",
        cooledDisplayName: "Copper",
        fluidTexture: "crossroads:block/molten_copper_still",
        cooledTexture: "minecraft:block/copper_block",
        temp: 1000
    },
    {
        id: "molten_tin",
        coolId: "tin",
        items: [
            {
                id: "electrodynamics:nuggettin",
                count: 1
            },
            {
                id: "electrodynamics:ingottin",
                count: 9
            },
            {
                id: "electrodynamics:raworetin",
                count: 9
            },
            {
                id: "electrodynamics:dusttin",
                count: 9
            },
            {
                id: "crossroads:ore_clump",
                nbt: {
                    material: "tin"
                },
                recipeId: "clump",
                count: 9
            },
            {
                id: "crossroads:ore_gravel",
                nbt: {
                    material: "tin"
                },
                recipeId: "gravel",
                count: 9
            },
            {
                id: "electrodynamics:oretin",
                count: 9
            }
        ],
        results: {
            ingot_cast: "electrodynamics:ingottin"
        },
        displayName: "Molten Tin",
        cooledDisplayName: "Tin",
        fluidTexture: "crossroads:block/molten_tin_still",
        cooledTexture: "electrodynamics:block/resource/resourceblocktin",
        temp: 1000
    }
];