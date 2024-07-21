ServerEvents.recipes(event => {
    event.remove({
        type: "crossroads:mill",
        input: "#forge:raw_materials"
    })

    event.recipes.crossroads.mill(
        "kubejs:coke_dust",
        "electrodynamics:coalcoke"
    );
});