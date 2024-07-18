(function() {
    const breakableOres = [
        {
            block: "minecraft:iron_ore",
            bit: "kubejs:iron_bit",
            minRange: 4,
            maxRange: 8
        },
        {
            block: "minecraft:coal_ore",
            bit: "kubejs:coal_bit",
            minRange: 4,
            maxRange: 8
        },
        {
            block: "minecraft:copper_ore",
            bit: "kubejs:copper_bit",
            minRange: 8,
            maxRange: 37
        },
        {
            block: "electrodynamics:oretin",
            bit: "kubejs:tin_bit",
            minRange: 3,
            maxRange: 7
        }
    ];

    breakableOres.forEach(ore => {
        BlockEvents.broken(ore.block, event => {
            const level = event.getLevel();
            const block = event.getBlock();
            const player = event.getPlayer();
            const drops = Item.of(ore.bit);
            const count = Math.round(arbitraryRangeRandom(ore.minRange, ore.maxRange));
            if (player == null || player.isCreative()) {
                return;
            }

            const item = player.getMainHandItem();
            if (item == null || item.isEmpty()) {
                return;
            }

            if (
                !item.is("minecraft:golden_pickaxe")
                || item.getEnchantmentLevel("minecraft:silk_touch") > 0
            ) {
                return;
            }

            drops.setCount(count * (1 + item.getEnchantmentLevel("minecraft:fortune")));
            block.popItem(drops);
            level.setBlockAndUpdate(block.pos, Block.id("minecraft:air").getBlockState());
        });
    });
})();