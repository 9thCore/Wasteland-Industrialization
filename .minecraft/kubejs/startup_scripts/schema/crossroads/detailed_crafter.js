// priority: 100

StartupEvents.recipeSchemaRegistry(event => {
    const Component = (string, args) => event.components[string](args);
    const builder = Component("bool").builder;

    const Path = Component("filteredString", {
        error: "Must be one of 'alchemy', 'witchcraft' or 'technomancy'",
        filter: s => s == "alchemy" || s == "witchcraft" || s == "technomancy"
    });

    const Pattern = Component("filteredString", {
        error: "Pattern lines cannot exceed 3 characters",
        filter: s => s.length < 4
    }).asArray();

    const ing = s => Component("inputItem").key(s).optional("minecraft:air");
    const IngMap = builder(
        ing("A"), ing("B"), ing("C"), ing("D"), ing("E"), ing("F"), ing("G"), ing("H"), ing("I"), ing("J"), ing("K"), ing("L"), ing("M"),
        ing("N"), ing("O"), ing("P"), ing("Q"), ing("R"), ing("S"), ing("T"), ing("U"), ing("V"), ing("W"), ing("X"), ing("Y"), ing("Z"),
        ing("a"), ing("b"), ing("c"), ing("d"), ing("e"), ing("f"), ing("g"), ing("h"), ing("i"), ing("j"), ing("k"), ing("l"), ing("m"),
        ing("n"), ing("o"), ing("p"), ing("q"), ing("r"), ing("s"), ing("t"), ing("u"), ing("v"), ing("w"), ing("x"), ing("y"), ing("z")
    );

    event.register("crossroads:detailed_crafter", new Classes.$RecipeSchema(
        Path.key("path"),
        Component("outputItem").key("result"),
        Pattern.key("pattern"),
        IngMap.key("key")
    ));
});