ServerEvents.recipes(event => {
    event.replaceOutput({mod: "crossroads"}, "crossroads:dust_iron", "electrodynamics:dustiron");
    event.replaceOutput({mod: "crossroads"}, "crossroads:dust_gold", "electrodynamics:dustgold");
    event.replaceOutput({mod: "crossroads"}, "crossroads:dust_copper", "electrodynamics:dustcopper");
    event.replaceOutput({mod: "crossroads"}, "crossroads:dust_tin", "electrodynamics:dusttin");
});