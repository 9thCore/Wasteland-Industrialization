ItemEvents.modification(event => {
    event.modify("electrodynamics:coalcoke", c => {
        c.setBurnTime(3200);
    });
});