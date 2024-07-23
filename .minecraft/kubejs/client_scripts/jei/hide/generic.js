// priority: 100

JEIEvents.hideItems(event => {
    console.log("Started hide event"); // 

    event.hide('kubejs:pebble_block');
    event.hide('ftbquests:barrier');
    event.hide('ftbquests:stage_barrier');
    event.hide('ftbquests:missing_item');
    event.hide('ftbquests:custom_icon');

    console.log("Checkpoint 1"); // 
    
    event.hide('crossroads:nugget_copper');
    
    event.hide('crossroads:ingot_bronze');
    event.hide('crossroads:block_bronze');

    console.log("Checkpoint 2"); // 

    event.hide('crossroads:ingot_tin');
    event.hide('crossroads:nugget_tin');
    event.hide('crossroads:raw_tin');
    event.hide('crossroads:block_tin');
    event.hide('crossroads:block_raw_tin');
    event.hide('crossroads:ore_tin');
    event.hide('crossroads:ore_tin_deep');
    
    event.hide('crossroads:dust_iron');
    event.hide('crossroads:dust_gold');
    event.hide('crossroads:dust_copper');
    event.hide('crossroads:dust_tin');

    console.log("Checkpoint 3"); // 

    event.hide('electrodynamics:geariron');
    event.hide('electrodynamics:gearcopper');
    event.hide('electrodynamics:geartin');
    event.hide('electrodynamics:gearsteel');
    event.hide('electrodynamics:gearbronze');

    console.log("Checkpoint 4"); // 
    
    event.hide('essentials:auto_crafter');
    event.hide('crossroads:dust_salt');
    event.hide('crossroads:sulfur');

    console.log("Checkpoint 5"); // 

    event.hide('assemblyline:conveyorbelt');
    event.hide('assemblyline:sorterbelt');
    event.hide('assemblyline:autocrafter');
    event.hide('assemblyline:blockbreaker');
    event.hide('assemblyline:blockplacer');
    event.hide('assemblyline:rancher');
    event.hide('assemblyline:mobgrinder');
    event.hide('assemblyline:farmer');

    console.log("Checkpoint 6"); // 
})