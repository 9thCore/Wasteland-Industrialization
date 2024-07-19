(function() {
    const $LycheeContextBuilder = Java.loadClass("snownee.lychee.core.LycheeContext$Builder");
    const $ItemHolderCollectionInventory = Java.loadClass("snownee.lychee.core.input.ItemHolderCollection$Inventory");

    /**
     * 
     * @param {Internal.BlockSource} block 
     * @param {Internal.ItemStack} item 
     */
    const SieveHandler = (block, item) => {
        const level = block.level;
        if (level.isClientSide()) {
            return;
        }

        const blockState = block.getBlockState();
        const dispenserDirection = $DispenserBlock.FACING;
        const pos = block.getPos();
        const newPos = pos.relative(blockState.getValue(dispenserDirection));
        const newPosXYZ = Vec3d.atCenterOf(newPos);

        // find matching recipe
        const recipes = level.getRecipeManager().getAllRecipesFor("lychee:block_interacting");

        let recipeExists = false;
        recipes.some(recipe => {
            const ingredients = recipe.getIngredients();
            const blockPredicate = recipe.getBlock();
            if (ingredients[0].test(item) && blockPredicate.matches(level, newPos)) {
                // the context requires an entity, so create a temporary cloud
                const cloud = level.createEntity("minecraft:area_effect_cloud");
                cloud.setPos(newPosXYZ);
                cloud.setNbt({Duration: 5}); // will expire in a quarter a second

                // build recipe context
                const builder = new $LycheeContextBuilder(level);
                builder.withParameter(LycheeLootContextParams.DIRECTION, dispenserDirection);
                builder.withParameter(LootContextParams.ORIGIN, newPosXYZ);
                builder.withParameter(LootContextParams.THIS_ENTITY, cloud);
                builder.withParameter(LootContextParams.BLOCK_STATE, blockState);
                builder.withParameter(LycheeLootContextParams.BLOCK_POS, newPos);
                const context = builder.create(recipe.getType().contextParamSet);

                // make a clone so lychee isnt allowed to interfere with the original item in any way
                context.itemHolders = $ItemHolderCollectionInventory.of(context, item.copy(), Item.empty);

                if (recipe.tickOrApply(context)) {
                    // i cant figure out playsound so this is fine enough for now
                    level.runCommandSilent(`playsound minecraft:block.dispenser.dispense block @s ${pos.x} ${pos.y} ${pos.z} 1.0 1.0`);
                    recipeExists = true;
                    const times = recipe.getRandomRepeats(1, context);
                    recipe.applyPostActions(context, times);
                    context.itemHolders.postApply(context.runtime.doDefault, times);
                    if (item.hurt(1, level.getRandom(), null)) {
                        item.shrink(1);
                    }
                }
            }
            
            return recipeExists;
        });

        if (!recipeExists) {
            level.runCommandSilent(`playsound minecraft:block.dispenser.fail block @s ${pos.x} ${pos.y} ${pos.z} 1.0 1.0`);
        }

        return item;
    };

    $DispenserBlock.registerBehavior(Item.of("kubejs:string_sieve"), SieveHandler);
})();