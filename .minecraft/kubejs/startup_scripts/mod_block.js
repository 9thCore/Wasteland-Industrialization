BlockEvents.modification(event => {

	// Make every type of wood require an axe
	event.modify(/minecraft:.*_(log|wood|stem|hyphae)/, block => {
		block.requiresTool = true
	})

})