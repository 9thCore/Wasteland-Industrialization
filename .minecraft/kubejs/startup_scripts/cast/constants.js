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
                id: "electrodynamics:dustgold",
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
                id: "kubejs:iron_bit",
                recipeId: "bit",
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
                id: "electrodynamics:dustiron",
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
    },
    {
        id: "molten_copper",
        coolId: "copper",
        items: [
            {
                id: "electrodynamics:nuggetcopper",
                recipeId: "nug",
                count: 1
            },
            {
                id: "kubejs:copper_bit",
                recipeId: "bit",
                count: 1
            },
            {
                id: "minecraft:copper_ingot",
                recipeId: "ing",
                count: 9
            },
            {
                id: "minecraft:raw_copper",
                recipeId: "raw",
                count: 9
            },
            {
                id: "electrodynamics:dustcopper",
                recipeId: "dst",
                count: 9
            },
            {
                id: "crossroads:ore_clump",
                nbt: {
                    material: "copper"
                },
                recipeId: "cmp",
                count: 9
            },
            {
                id: "crossroads:ore_gravel",
                nbt: {
                    material: "copper"
                },
                recipeId: "gvl",
                count: 9
            },
            {
                id: "minecraft:copper_ore",
                recipeId: "ore",
                count: 12
            },
            {
                id: "minecraft:deepslate_copper_ore",
                recipeId: "dore",
                count: 12
            },
            {
                id: "minecraft:copper_block",
                recipeId: "blk",
                count: 81
            },
            {
                id: "minecraft:cut_copper",
                recipeId: "cut",
                count: 81
            },
            {
                id: "minecraft:cut_copper_stairs",
                recipeId: "cutst",
                count: 60
            },
            {
                id: "minecraft:cut_copper_slab",
                recipeId: "cutsl",
                count: 40
            },
            {
                id: "minecraft:exposed_copper",
                recipeId: "exp",
                count: 81
            },
            {
                id: "minecraft:exposed_cut_copper",
                recipeId: "ecut",
                count: 81
            },
            {
                id: "minecraft:exposed_cut_copper_stairs",
                recipeId: "ecutst",
                count: 60
            },
            {
                id: "minecraft:exposed_cut_copper_slab",
                recipeId: "ecutsl",
                count: 40
            },
            {
                id: "minecraft:weathered_copper",
                recipeId: "wea",
                count: 81
            },
            {
                id: "minecraft:weathered_cut_copper",
                recipeId: "wcut",
                count: 81
            },
            {
                id: "minecraft:weathered_cut_copper_stairs",
                recipeId: "wcutst",
                count: 60
            },
            {
                id: "minecraft:weathered_cut_copper_slab",
                recipeId: "wcutsl",
                count: 40
            },
            {
                id: "minecraft:oxidized_copper",
                recipeId: "oxi",
                count: 81
            },
            {
                id: "minecraft:oxidized_cut_copper",
                recipeId: "ocut",
                count: 81
            },
            {
                id: "minecraft:oxidized_cut_copper_stairs",
                recipeId: "ocutst",
                count: 60
            },
            {
                id: "minecraft:oxidized_cut_copper_slab",
                recipeId: "ocutsl",
                count: 40
            },
            {
                id: "minecraft:raw_copper_block",
                recipeId: "rblk",
                count: 81
            },
            {
                id: "quark:raw_copper_bricks",
                recipeId: "rbrk",
                count: 81
            },
            {
                id: "crossroads:gear_base",
                nbt: {
                    material: "copper"
                },
                recipeId: "gear",
                count: 17
            },
            {
                id: "crossroads:gear_base_large",
                nbt: {
                    material: "copper"
                },
                recipeId: "lgear",
                count: 49
            },
            {
                id: "crossroads:axle",
                nbt: {
                    material: "copper"
                },
                recipeId: "axle",
                count: 9
            },
            {
                id: "crossroads:axle_mount",
                nbt: {
                    material: "copper"
                },
                recipeId: "mnt",
                count: 3
            },
            {
                id: "quark:raw_copper_bricks_stairs",
                recipeId: "rbst",
                count: 60
            },
            {
                id: "quark:raw_copper_bricks_slab",
                recipeId: "rbsl",
                count: 40
            },
            {
                id: "quark:raw_copper_bricks_vertical_slab",
                recipeId: "rvsl",
                count: 40
            },
            {
                id: "quark:raw_copper_bricks_wall",
                recipeId: "rbwl",
                count: 81
            },
            {
                id: "quark:cut_copper_vertical_slab",
                recipeId: "cutv",
                count: 40
            },
            {
                id: "quark:exposed_cut_copper_vertical_slab",
                recipeId: "ecutv",
                count: 40
            },
            {
                id: "quark:weathered_cut_copper_vertical_slab",
                recipeId: "wcutv",
                count: 40
            },
            {
                id: "quark:oxidized_cut_copper_vertical_slab",
                recipeId: "ocutv",
                count: 40
            }
        ],
        results: {
            ingot_cast: "minecraft:copper_ingot",
            block_cast: "minecraft:copper_block",
            nugget_cast: "9x electrodynamics:nuggetcopper"
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
                recipeId: "nug",
                count: 1
            },
            {
                id: "electrodynamics:ingottin",
                recipeId: "ing",
                count: 9
            },
            {
                id: "electrodynamics:raworetin",
                recipeId: "raw",
                count: 9
            },
            {
                id: "electrodynamics:dusttin",
                recipeId: "dst",
                count: 9
            },
            {
                id: "crossroads:ore_clump",
                nbt: {
                    material: "tin"
                },
                recipeId: "cmp",
                count: 9
            },
            {
                id: "crossroads:ore_gravel",
                nbt: {
                    material: "tin"
                },
                recipeId: "gvl",
                count: 9
            },
            {
                id: "electrodynamics:oretin",
                recipeId: "ore",
                count: 12
            },
            {
                id: "electrodynamics:deepslateoretin",
                recipeId: "dore",
                count: 12
            },
            {
                id: "electrodynamics:resourceblocktin",
                recipeId: "blk",
                count: 81
            },
            {
                id: "electrodynamics:raworeblocktin",
                recipeId: "rblk",
                count: 81
            },
            {
                id: "crossroads:gear_base",
                nbt: {
                    material: "tin"
                },
                recipeId: "gear",
                count: 17
            },
            {
                id: "crossroads:gear_base_large",
                nbt: {
                    material: "tin"
                },
                recipeId: "lgear",
                count: 49
            },
            {
                id: "crossroads:axle",
                nbt: {
                    material: "tin"
                },
                recipeId: "axle",
                count: 9
            },
            {
                id: "crossroads:axle_mount",
                nbt: {
                    material: "tin"
                },
                recipeId: "mnt",
                count: 3
            }
        ],
        results: {
            ingot_cast: "electrodynamics:ingottin",
            block_cast: "electrodynamics:resourceblocktin",
            nugget_cast: "9x electrodynamics:nuggettin"
        },
        displayName: "Molten Tin",
        cooledDisplayName: "Tin",
        fluidTexture: "crossroads:block/molten_tin_still",
        cooledTexture: "electrodynamics:block/resource/resourceblocktin",
        temp: 1000
    }
];