PlayerEvents.loggedIn((event) => {
	const {player} = event
	
	if (!player.stages.has("post_first_join")) {
		player.give("ftbquests:book")
		player.stages.add("post_first_join")
	}
})