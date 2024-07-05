PlayerEvents.loggedIn((event) => {
	const {player} = event;
	
	if (!player.stages.has("post_first_join")) {
		player.give("ftbquests:book");
		player.give(Item.of("essentials:guide_book").withNBT({"patchouli:book": "essentials:manual"}).strongNBT());
		player.stages.add("post_first_join");
		event.getLevel().runCommandSilent("gamerule doTraderSpawning false");
		event.getLevel().runCommandSilent("gamerule doPatrolSpawning false");
		event.getLevel().runCommandSilent("gamerule doInsomnia false");
	};
});