// priority 200

global.castTypes = {
    ingot_cast: {
        size: 9,
        displayName: "Ingot Cast",
        modifier: block => {
            block.box(5, 0, 3, 11, 4, 13).box(6, 3, 1, 10, 4, 15);
        },
        campfireMeltable: true
    },
    block_cast: {
        size: 81,
        displayName: "Block Cast",
        modifier: block => {},
        campfireMeltable: false
    },
    nugget_cast: {
        size: 9,
        displayName: "Nuggets Cast",
        modifier: block => {
            block.box(5, 0, 3, 11, 4, 13).box(6, 3, 1, 10, 4, 15);
        },
        campfireMeltable: true
    }
};

global.casts = [
    {
        types: ["ingot_cast", "block_cast", "nugget_cast"],
        id: "ceramic",
        displayName: "Ceramic",
        texture: "minecraft:block/terracotta",
        maxTemp: 2000,
        canContainMetal: true
    },
    {
        types: ["ingot_cast", "block_cast", "nugget_cast"],
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
                recipeId: "nug",
                count: 1
            },
            {
                id: "minecraft:gold_ingot",
                recipeId: "ing",
                count: 9
            },
            {
                id: "minecraft:raw_gold",
                recipeId: "raw",
                count: 9
            },
            {
                id: "crossroads:dust_gold",
                recipeId: "dst",
                count: 9
            },
            {
                id: "crossroads:ore_clump",
                nbt: {
                    material: "gold"
                },
                recipeId: "cmp",
                count: 9
            },
            {
                id: "crossroads:ore_gravel",
                nbt: {
                    material: "gold"
                },
                recipeId: "gvl",
                count: 9
            },
            {
                id: "minecraft:gold_ore",
                recipeId: "ore",
                count: 12
            },
            {
                id: "minecraft:deepslate_gold_ore",
                recipeId: "dore",
                count: 12
            },
            {
                id: "minecraft:nether_gold_ore",
                recipeId: "nore",
                count: 12
            },
            {
                id: "minecraft:gold_block",
                recipeId: "blk",
                count: 81
            },
            {
                id: "minecraft:raw_gold_block",
                recipeId: "rblk",
                count: 81
            },
            {
                id: "quark:raw_gold_bricks",
                recipeId: "rbrk",
                count: 81
            },
            {
                id: "supplementaries:gold_gate",
                recipeId: "gate",
                count: 11
            },
            {
                id: "supplementaries:gold_door",
                recipeId: "door",
                count: 18
            },
            {
                id: "supplementaries:gold_trapdoor",
                recipeId: "tdoor",
                count: 36
            },
            {
                id: "crossroads:gear_base",
                nbt: {
                    material: "gold"
                },
                recipeId: "gear",
                count: 17
            },
            {
                id: "crossroads:gear_base_large",
                nbt: {
                    material: "gold"
                },
                recipeId: "lgear",
                count: 49
            },
            {
                id: "crossroads:axle",
                nbt: {
                    material: "gold"
                },
                recipeId: "axle",
                count: 9
            },
            {
                id: "crossroads:axle_mount",
                nbt: {
                    material: "gold"
                },
                recipeId: "mnt",
                count: 3
            },
            {
                id: "quark:raw_gold_bricks_stairs",
                recipeId: "rbst",
                count: 60
            },
            {
                id: "quark:raw_gold_bricks_slab",
                recipeId: "rbsl",
                count: 40
            },
            {
                id: "quark:raw_gold_bricks_vertical_slab",
                recipeId: "rvsl",
                count: 40
            },
            {
                id: "quark:raw_gold_bricks_wall",
                recipeId: "rbwl",
                count: 81
            },
            {
                id: "quark:gold_bars",
                recipeId: "bars",
                count: 3
            }
        ],
        results: {
            ingot_cast: "minecraft:gold_ingot",
            block_cast: "minecraft:gold_block",
            nugget_cast: "9x minecraft:gold_nugget"
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
                recipeId: "nug",
                count: 1
            },
            {
                id: "minecraft:iron_ingot",
                recipeId: "ing",
                count: 9
            },
            {
                id: "minecraft:raw_iron",
                recipeId: "raw",
                count: 9
            },
            {
                id: "crossroads:dust_iron",
                recipeId: "dst",
                count: 9
            },
            {
                id: "crossroads:ore_clump",
                nbt: {
                    material: "iron"
                },
                recipeId: "cmp",
                count: 9
            },
            {
                id: "crossroads:ore_gravel",
                nbt: {
                    material: "iron"
                },
                recipeId: "gvl",
                count: 9
            },
            {
                id: "minecraft:iron_ore",
                recipeId: "ore",
                count: 12
            },
            {
                id: "minecraft:deepslate_iron_ore",
                recipeId: "dore",
                count: 12
            },
            {
                id: "minecraft:iron_block",
                recipeId: "blk",
                count: 81
            },
            {
                id: "minecraft:raw_iron_block",
                recipeId: "rblk",
                count: 81
            },
            {
                id: "quark:raw_iron_bricks",
                recipeId: "rbrk",
                count: 81
            },
            {
                id: "supplementaries:iron_gate",
                recipeId: "gate",
                count: 11
            },
            {
                id: "minecraft:iron_door",
                recipeId: "door",
                count: 18
            },
            {
                id: "minecraft:iron_trapdoor",
                recipeId: "tdoor",
                count: 36
            },
            {
                id: "crossroads:gear_base",
                nbt: {
                    material: "iron"
                },
                recipeId: "gear",
                count: 17
            },
            {
                id: "crossroads:gear_base_large",
                nbt: {
                    material: "iron"
                },
                recipeId: "lgear",
                count: 49
            },
            {
                id: "crossroads:axle",
                nbt: {
                    material: "iron"
                },
                recipeId: "axle",
                count: 9
            },
            {
                id: "crossroads:axle_mount",
                nbt: {
                    material: "iron"
                },
                recipeId: "mnt",
                count: 3
            },
            {
                id: "quark:raw_iron_bricks_stairs",
                recipeId: "rbst",
                count: 60
            },
            {
                id: "quark:raw_iron_bricks_slab",
                recipeId: "rbsl",
                count: 40
            },
            {
                id: "quark:raw_iron_bricks_vertical_slab",
                recipeId: "rvsl",
                count: 40
            },
            {
                id: "quark:raw_iron_bricks_wall",
                recipeId: "rbwl",
                count: 81
            },
            {
                id: "minecraft:iron_bars",
                recipeId: "bars",
                count: 3
            }
        ],
        results: {
            ingot_cast: "minecraft:iron_ingot",
            block_cast: "minecraft:iron_block",
            nugget_cast: "9x minecraft:iron_nugget"
        },
        displayName: "Molten Iron",
        cooledDisplayName: "Iron",
        fluidTexture: "crossroads:block/molten_iron_still",
        cooledTexture: "minecraft:block/iron_block",
        temp: 1000
    }
];