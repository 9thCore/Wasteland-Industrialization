// priority: 1000
// Script by omgimanerd
// Slightly adapted to fit own needs

/**
 * @param {string} s
 * @returns {string}
 */
const stripModPrefix = (s) => {
    return s.replace(/^#{0,1}[a-z_]+:/, '')
  }
  
  /**
   * @param {string} name
   * @returns {string}
   */
  const getDisplayName = (name) => {
    return stripModPrefix(name)
      .split('_')
      .map((c) => c[0].toUpperCase() + c.substring(1))
      .join(' ')
  }
  
  /**
   * @param {Registry.Block} e
   * @param {string} id
   * @param {string} displayName
   * @param {object} modelJson
   * @returns {Internal.BasicBlockJS$Builder}
   */
  const registerCast = (e, id, displayName, modelJson) => {
    const block = e
      .create(id)
      .displayName(displayName)
      .stoneSoundType()
      .fullBlock(false)
      .box(5, 0, 3, 11, 4, 13)
      .box(6, 3, 1, 10, 4, 15)
      .notSolid()
      .hardness(0.0)
      .resistance(0.0)
      .requiresTool(false)
      .tagBlock('minecraft:mineable/pickaxe')
      .tagBlock('create:wrench_pickup')
      .item((item) => {
        item.modelJson(modelJson).maxStackSize(8)
      })
    block.modelJson = modelJson
    return block
  }
  
  /**
   * @param {Registry.Item} e
   * @param {string} id
   * @param {string} displayName
   * @param {object} modelJson
   * @returns {Internal.BasicItemJS$Builder}
   */
  const registerItemCast = (e, id, displayName, modelJson) => {
    const item = e
      .create(id)
      .displayName(displayName)
      .modelJson(modelJson)
      .maxStackSize(8)
    return item
  }
  
  /**
   * @param {Registry.Block} e
   * @param {string} id
   * @param {string} baseTexture
   */
  const registerBaseIngotCast = (e, id, baseTexture) => {
    const modelJson = {
      parent: 'kubejs:block/base_ingot_cast',
      textures: {
        base: baseTexture,
      },
    }
    return registerItemCast(e, id, getDisplayName(id), modelJson)
  }
  
  /**
   * @param {Registry.Block} e
   * @param {string} id
   * @param {string} displayName
   * @param {string} baseTexture
   * @param {string} fluidTexture
   */
  const registerFilledIngotCast = (
    e,
    id,
    displayName,
    baseTexture,
    fluidTexture
  ) => {
    const modelJson = {
      parent: 'kubejs:block/filled_ingot_cast',
      textures: {
        base: baseTexture,
        fluid: fluidTexture,
      },
    }
    return registerCast(e, id, displayName, modelJson).lightLevel(12)
  }
  
  /**
   * @param {Registry.Block} e
   * @param {string} id
   * @param {string} displayName
   * @param {string} baseTexture
   * @param {string} ingotTexture
   */
  const registerCooledIngotCast = (
    e,
    id,
    displayName,
    baseTexture,
    ingotTexture
  ) => {
    const modelJson = {
      parent: 'kubejs:block/filled_ingot_cast',
      textures: {
        base: baseTexture,
        fluid: ingotTexture,
      },
    }
    return registerCast(e, id, displayName, modelJson)
  }