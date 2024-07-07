ServerEvents.recipes(event => {
    event.remove({
        type: "crossroads:mill",
        input: "#forge:raw_materials"
    })
});