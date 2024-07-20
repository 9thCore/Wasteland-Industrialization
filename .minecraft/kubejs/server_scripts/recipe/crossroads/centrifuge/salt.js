ServerEvents.recipes(event => {
    event.replaceOutput({
        type: "crossroads:centrifuge"
    }, "crossroads:dust_salt", "electrodynamics:dustsalt");
})