global.registeredToolTypes = {}
global.registeredToolTypesArray = []

function genHead(event, materialID, materialDisplay, color) {
    const headID = `kubejs:${materialID}_tool_head`

    event.create(headID)
    .displayName(`${materialDisplay} Tool Head`)
    .texture('kubejs:item/tool_head')
    .tag('kubejs:tool_heads')
    .color(0, color)

    return headID
}

function genTip(event, materialID, materialDisplay, color) {
    const tipID = `kubejs:${materialID}_tool_tip`

    event.create(tipID)
    .displayName(`${materialDisplay} Tool Tip`)
    .texture('kubejs:item/tool_tip')
    .tag('kubejs:tool_tips')
    .color(0, color)

    return tipID
}

function genToolStuff(event, itemID, moltenFluidID, materialID, materialDisplay, color, dontAddToArray) {
    const properties = {
        head: genHead(event, materialID, materialDisplay, color),
        tip: genTip(event, materialID, materialDisplay, color)
    }

    global.registeredToolTypes[itemID] = properties

    if (!dontAddToArray)
        global.registeredToolTypesArray.push({
            material: itemID,
            moltenFluidID: moltenFluidID,
            head: properties.head,
            tip: properties.tip
        })
}

StartupEvents.registry('item', event => {
    /*
    genToolStuff(event, 'minecraft:gold_ingot', 'crossroads:molten_gold', 'gold', 'Gold', 0xFDFF76, false)
    genToolStuff(event, '#minecraft:stone_crafting_materials', null, 'stone', 'Stone', 0x898989, false)
    genToolStuff(event, 'minecraft:iron_ingot', 'crossroads:molten_iron', 'iron', 'Iron', 0xFFFFFF, false)
    genToolStuff(event, 'immersiveengineering:ingot_steel', null, 'steel', 'Steel', 0xA4A4A4, false)
    genToolStuff(event, 'minecraft:diamond', null, 'diamond', 'Diamond', 0x2BC7AC, false)
    genToolStuff(event, '#minecraft:planks', null, 'wood', 'Wood', 0x694F1E, true)
    */
})