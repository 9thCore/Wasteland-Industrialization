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
    },
    block_cast: {
        size: 81,
        displayName: "Block Cast",
        modifier: block => {}
    },
    nugget_cast: {
        size: 9,
        displayName: "Nuggets Cast",
        modifier: block => {
            block.box(5, 0, 3, 11, 4, 13).box(6, 3, 1, 10, 4, 15);
        }
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
                count: 12
            },
            {
                id: "minecraft:deepslate_gold_ore",
                count: 12
            },
            {
                id: "minecraft:nether_gold_ore",
                count: 12
            },
            {
                id: "minecraft:gold_block",
                count: 81
            },
            {
                id: "minecraft:raw_gold_block",
                count: 81
            },
            {
                id: "quark:raw_gold_bricks",
                count: 81
            },
            {
                id: "supplementaries:gold_gate",
                count: 11
            },
            {
                id: "supplementaries:gold_door",
                count: 18
            },
            {
                id: "supplementaries:gold_trapdoor",
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
                recipeId: "gear_large",
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
                recipeId: "axle_mount",
                count: 3
            },
            {
                id: "quark:raw_gold_bricks_stairs",
                count: 60
            },
            {
                id: "quark:raw_gold_bricks_slab",
                count: 40
            },
            {
                id: "quark:raw_gold_bricks_vertical_slab",
                count: 40
            },
            {
                id: "quark:raw_gold_bricks_wall",
                count: 81
            },
            {
                id: "quark:gold_bars",
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
                count: 12
            },
            {
                id: "minecraft:deepslate_iron_ore",
                count: 12
            },
            {
                id: "minecraft:iron_block",
                count: 81
            },
            {
                id: "minecraft:raw_iron_block",
                count: 81
            },
            {
                id: "quark:raw_iron_bricks",
                count: 81
            },
            {
                id: "supplementaries:iron_gate",
                count: 11
            },
            {
                id: "minecraft:iron_door",
                count: 18
            },
            {
                id: "minecraft:iron_trapdoor",
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
                recipeId: "gear_large",
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
                recipeId: "axle_mount",
                count: 3
            },
            {
                id: "quark:raw_iron_bricks_stairs",
                count: 60
            },
            {
                id: "quark:raw_iron_bricks_slab",
                count: 40
            },
            {
                id: "quark:raw_iron_bricks_vertical_slab",
                count: 40
            },
            {
                id: "quark:raw_iron_bricks_wall",
                count: 81
            },
            {
                id: "minecraft:iron_bars",
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
                count: 12
            },
            {
                id: "minecraft:deepslate_copper_ore",
                count: 12
            },
            {
                id: "minecraft:copper_block",
                count: 81
            },
            {
                id: "minecraft:cut_copper",
                count: 81
            },
            {
                id: "minecraft:cut_copper_stairs",
                count: 60
            },
            {
                id: "minecraft:cut_copper_slab",
                count: 40
            },
            {
                id: "minecraft:exposed_copper",
                count: 81
            },
            {
                id: "minecraft:exposed_cut_copper",
                count: 81
            },
            {
                id: "minecraft:exposed_cut_copper_stairs",
                count: 60
            },
            {
                id: "minecraft:exposed_cut_copper_slab",
                count: 40
            },
            {
                id: "minecraft:weathered_copper",
                count: 81
            },
            {
                id: "minecraft:weathered_cut_copper",
                count: 81
            },
            {
                id: "minecraft:weathered_cut_copper_stairs",
                count: 60
            },
            {
                id: "minecraft:weathered_cut_copper_slab",
                count: 40
            },
            {
                id: "minecraft:oxidized_copper",
                count: 81
            },
            {
                id: "minecraft:oxidized_cut_copper",
                count: 81
            },
            {
                id: "minecraft:oxidized_cut_copper_stairs",
                count: 60
            },
            {
                id: "minecraft:oxidized_cut_copper_slab",
                count: 40
            },
            {
                id: "minecraft:raw_copper_block",
                count: 81
            },
            {
                id: "quark:raw_copper_bricks",
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
                recipeId: "gear_large",
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
                recipeId: "axle_mount",
                count: 3
            },
            {
                id: "quark:raw_copper_bricks_stairs",
                count: 60
            },
            {
                id: "quark:raw_copper_bricks_slab",
                count: 40
            },
            {
                id: "quark:raw_copper_bricks_vertical_slab",
                count: 40
            },
            {
                id: "quark:raw_copper_bricks_wall",
                count: 81
            },
            {
                id: "quark:cut_copper_vertical_slab",
                count: 40
            },
            {
                id: "quark:exposed_cut_copper_vertical_slab",
                count: 40
            },
            {
                id: "quark:weathered_cut_copper_vertical_slab",
                count: 40
            },
            {
                id: "quark:oxidized_cut_copper_vertical_slab",
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
                count: 12
            },
            {
                id: "electrodynamics:deepslateoretin",
                count: 12
            },
            {
                id: "electrodynamics:resourceblocktin",
                count: 81
            },
            {
                id: "electrodynamics:raworeblocktin",
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
                recipeId: "gear_base",
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
                recipeId: "axle_mount",
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

global.metalIndexMapping = {};

for (let i = 0; i < global.moltenMetals.length; i++) {
    global.metalIndexMapping[global.moltenMetals[i].coolId] = i;
}