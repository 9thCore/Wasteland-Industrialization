// priority: 100

const $DispenserBlock = Java.loadClass("net.minecraft.world.level.block.DispenserBlock");
const $GameEvent = Java.loadClass("net.minecraft.world.level.gameevent.GameEvent");

/**
 * 
 * @param {Internal.BlockSource} block 
 */
const GetDispenserDirection = block => {
    return block.getBlockState().getValue($DispenserBlock.FACING);
}

/**
 * 
 * @param {Internal.Direction} direction 
 */
const GetDirectionIndex = direction => {
    switch(direction) {
        case Direction.DOWN:
            return 0;
        case Direction.UP:
            return 1;
        case Direction.NORTH:
            return 2;
        case Direction.SOUTH:
            return 3;
        case Direction.WEST:
            return 4;
        case Direction.EAST:
            return 5;
    }
}

/**
 * 
 * @param {Internal.BlockSource} block
 * @param {Internal.ItemStack} item 
 */
const SimulateDispense = (block, item) => {
    const level = block.getLevel();
    const pos = block.getPos();
    const direction = GetDispenserDirection(block);
    level.getBlock(pos).popItemFromFace(item, direction);
    level.levelEvent(1000, pos, 0);
    level.levelEvent(2000, pos, GetDirectionIndex(direction));
}