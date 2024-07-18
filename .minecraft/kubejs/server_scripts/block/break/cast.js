global.casts.forEach(cast => {
    cast.types.forEach(type => {
        BlockEvents.broken(`kubejs:${cast.id}_${type}`, event => {
            const player = event.getPlayer();
            if (player != null && player.isCreative()) {
                // don't drop anything in creative mode
                return;
            }

            const block = event.getBlock();
            const entity = block.getEntity();
            const item = Item.of(`kubejs:${cast.id}_${type}`).withNBT(global.getCastNBT());
            const storage = Item.of(`kubejs:${cast.id}_${type}`);
            entity.saveToItem(storage);
            item.nbt.BlockEntityTag.data.metal_inside = storage.nbt.BlockEntityTag.data.metal_inside;
            item.nbt.BlockEntityTag.data.nugget_count = storage.nbt.BlockEntityTag.data.nugget_count;
            block.popItem(item);
            block.setBlockState(Block.id("minecraft:air").getBlockState(), 0);
            event.cancel();
        });
    });
});