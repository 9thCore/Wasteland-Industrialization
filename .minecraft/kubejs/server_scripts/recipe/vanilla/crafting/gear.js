ServerEvents.recipes(event => {
    event.shaped(
        Item.of("crossroads:gear_base")
        .withNBT({
            material: "gold"
        })
        .strongNBT(),
        [
            "NNN",
            "NIN",
            "NNN"
        ],
        {
            N: "minecraft:gold_nugget",
            I: "minecraft:gold_ingot"
        }
    ).id("crossroads:mechanisms/small_gear_single_gold");
    
    event.shaped(
        Item.of("9x crossroads:gear_base")
        .withNBT({
            material: "gold"
        })
        .strongNBT(),
        [
            "III",
            "IBI",
            "III"
        ],
        {
            B: "minecraft:gold_block",
            I: "minecraft:gold_ingot"
        }
    ).id("crossroads:mechanisms/small_gear_gold");
    
    event.shaped(
        Item.of("crossroads:gear_base")
        .withNBT({
            material: "tin"
        })
        .strongNBT(),
        [
            "NNN",
            "NIN",
            "NNN"
        ],
        {
            N: "electrodynamics:nuggettin",
            I: "electrodynamics:ingottin"
        }
    ).id("crossroads:mechanisms/small_gear_single_tin");
    
    event.shaped(
        Item.of("9x crossroads:gear_base")
        .withNBT({
            material: "tin"
        })
        .strongNBT(),
        [
            "III",
            "IBI",
            "III"
        ],
        {
            B: "electrodynamics:resourceblocktin",
            I: "electrodynamics:ingottin"
        }
    ).id("crossroads:mechanisms/small_gear_tin");
    
    event.shaped(
        Item.of("crossroads:gear_base")
        .withNBT({
            material: "copper"
        })
        .strongNBT(),
        [
            "NNN",
            "NIN",
            "NNN"
        ],
        {
            N: "electrodynamics:nuggetcopper",
            I: "minecraft:copper_ingot"
        }
    ).id("crossroads:mechanisms/small_gear_single_copper");
    
    event.shaped(
        Item.of("9x crossroads:gear_base")
        .withNBT({
            material: "copper"
        })
        .strongNBT(),
        [
            "III",
            "IBI",
            "III"
        ],
        {
            B: "minecraft:copper_block",
            I: "minecraft:copper_ingot"
        }
    ).id("crossroads:mechanisms/small_gear_copper");
    
    event.shaped(
        Item.of("crossroads:gear_base")
        .withNBT({
            material: "iron"
        })
        .strongNBT(),
        [
            "NNN",
            "NIN",
            "NNN"
        ],
        {
            N: "minecraft:iron_nugget",
            I: "minecraft:iron_ingot"
        }
    ).id("crossroads:mechanisms/small_gear_single_iron");
    
    event.shaped(
        Item.of("9x crossroads:gear_base")
        .withNBT({
            material: "ingot"
        })
        .strongNBT(),
        [
            "III",
            "IBI",
            "III"
        ],
        {
            B: "minecraft:iron_block",
            I: "minecraft:iron_ingot"
        }
    ).id("crossroads:mechanisms/small_gear_iron");
    
    event.shaped(
        Item.of("crossroads:gear_base")
        .withNBT({
            material: "bronze"
        })
        .strongNBT(),
        [
            "NNN",
            "NIN",
            "NNN"
        ],
        {
            N: "crossroads:nugget_bronze",
            I: "electrodynamics:ingotbronze"
        }
    ).id("crossroads:mechanisms/small_gear_single_bronze");
    
    event.shaped(
        Item.of("9x crossroads:gear_base")
        .withNBT({
            material: "bronze"
        })
        .strongNBT(),
        [
            "III",
            "IBI",
            "III"
        ],
        {
            B: "electrodynamics:resourceblockbronze",
            I: "electrodynamics:ingotbronze"
        }
    ).id("crossroads:mechanisms/small_gear_bronze");
    
    event.shaped(
        Item.of("crossroads:gear_base")
        .withNBT({
            material: "copshowium"
        })
        .strongNBT(),
        [
            "NNN",
            "NIN",
            "NNN"
        ],
        {
            N: "crossroads:nugget_copshowium",
            I: "crossroads:ingot_copshowium"
        }
    ).id("crossroads:mechanisms/small_gear_single_copshowium");
    
    event.shaped(
        Item.of("9x crossroads:gear_base")
        .withNBT({
            material: "copshowium"
        })
        .strongNBT(),
        [
            "III",
            "IBI",
            "III"
        ],
        {
            B: "crossroads:block_copshowium",
            I: "crossroads:ingot_copshowium"
        }
    ).id("crossroads:mechanisms/small_gear_copshowium");

    event.replaceInput({
        mod: "electrodynamics"
    },
    "electrodynamics:geariron",
    Item.of("crossroads:gear_base")
    .withNBT({
        material: "iron"
    }).strongNBT());

    event.replaceInput({
        mod: "electrodynamics"
    },
    "electrodynamics:gearcopper",
    Item.of("crossroads:gear_base")
    .withNBT({
        material: "copper"
    }).strongNBT());

    event.replaceInput({
        mod: "electrodynamics"
    },
    "electrodynamics:geartin",
    Item.of("crossroads:gear_base")
    .withNBT({
        material: "tin"
    })
    .strongNBT());

    event.replaceInput({
        mod: "electrodynamics"
    },
    "electrodynamics:gearbronze",
    Item.of("crossroads:gear_base")
    .withNBT({
        material: "bronze"
    })
    .strongNBT());

    event.replaceInput({
        mod: "electrodynamics"
    },
    "electrodynamics:gearsteel",
    Item.of("crossroads:gear_base")
    .withNBT({
        material: "steel"
    })
    .strongNBT());
});