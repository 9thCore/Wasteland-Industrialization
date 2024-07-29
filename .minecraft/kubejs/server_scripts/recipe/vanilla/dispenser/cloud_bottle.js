(function() {
    const $BlockTags = Java.loadClass("net.minecraft.tags.BlockTags");
    const $FluidTags = Java.loadClass("net.minecraft.tags.FluidTags");
    const $BeehiveBlock = Java.loadClass("net.minecraft.world.level.block.BeehiveBlock");
    const $BeehiveBlockEntity = Java.loadClass("net.minecraft.world.level.block.entity.BeehiveBlockEntity");
    const $PotionUtils = Java.loadClass("net.minecraft.world.item.alchemy.PotionUtils");
    const $Potions = Java.loadClass("net.minecraft.world.item.alchemy.Potions");

    /**
     * 
     * @param {Internal.BlockSource} block 
     * @param {Internal.ItemStack} item 
     * @param {Internal.ItemStack} result 
     */
    const TakeLiquid = (block, item, result) => {
        item.shrink(1);
        if (item.isEmpty()) {
            // lol
            block.getLevel()["gameEvent(net.minecraft.world.entity.Entity,net.minecraft.world.level.gameevent.GameEvent,net.minecraft.core.BlockPos)"](null, $GameEvent.FLUID_PICKUP, block.getPos());
            return result;            
        }

        if (block.getEntity().addItem(result) < 0) {
            SimulateDispense(block, result);
        }

        return item;
    }

    $DispenserBlock.registerBehavior(Item.of("minecraft:glass_bottle"), (block, item) => {
        const level = block.level;
        if (level.isClientSide()) {
            return;
        }

        const pos = block.getPos();
        const direction = GetDispenserDirection(block);
        const affectedPos = pos.relative(direction);
        const affectedState = level.getBlockState(affectedPos);

        // Vanilla behaviour
        // Honey
        if (affectedState.is($BlockTags.BEEHIVES, state => {
            return state.hasProperty($BeehiveBlock.HONEY_LEVEL) && state.getBlock() instanceof $BeehiveBlock;
        }) && affectedState.getValue($BeehiveBlock.HONEY_LEVEL) >= 5) {
            affectedState.getBlock().releaseBeesAndResetHoneyLevel(level, affectedState, affectedPos, null, $BeehiveBlockEntity.BeeReleaseStatus.BEE_RELEASED);
            return TakeLiquid(block, item, Item.of("minecraft:honey_bottle"));
        }

        // Water
        if (level.getFluidState(affectedPos).getFluidType() == "minecraft:water") {
            return TakeLiquid(block, item, $PotionUtils.setPotion(Item.of("minecraft:potion"), $Potions.WATER));
        }

        // Modded behaviour
        // Cloud
        
        // Check if at cloud level
        if (affectedPos.y < 192) {
            item.shrink(1);
            SimulateDispense(block, Item.of(item, 1));
            return item;
        }

        return TakeLiquid(block, item, Item.of("quark:bottled_cloud"));
    });
})();