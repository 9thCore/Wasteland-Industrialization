FTBQuestsEvents.customReward('1602CE6A83864860', event => {
    console.info("Running unstuck reward!")
    const {server, player} = event
    player.runCommandSilent(`trigger trigger_tp`)
})