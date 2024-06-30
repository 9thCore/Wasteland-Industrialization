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
   * @param {Registry.Block} e
   * @param {string} id
   * @param {string} baseTexture
   * @param {string} type
   */
  const registerBaseCast = (e, id, baseTexture, type) => {
    const modelJson = {
      parent: `kubejs:block/base_${type}`,
      textures: {
        base: baseTexture,
        particle: baseTexture
      },
    }
    return registerCast(e, id, getDisplayName(id), modelJson)
  }
  
  /**
   * @param {Registry.Block} e
   * @param {string} id
   * @param {string} displayName
   * @param {string} baseTexture
   * @param {string} fluidTexture
   * @param {string} type
   */
  const registerFilledCast = (
    e,
    id,
    displayName,
    baseTexture,
    fluidTexture,
    type
  ) => {
    const modelJson = {
      parent: `kubejs:block/filled_${type}`,
      textures: {
        base: baseTexture,
        fluid: fluidTexture,
        particle: baseTexture
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
   * @param {string} type
   */
  const registerCooledCast = (
    e,
    id,
    displayName,
    baseTexture,
    ingotTexture,
    type
  ) => {
    const modelJson = {
      parent: `kubejs:block/filled_${type}`,
      textures: {
        base: baseTexture,
        fluid: ingotTexture,
        particle: baseTexture
      },
    }
    return registerCast(e, id, displayName, modelJson)
  }