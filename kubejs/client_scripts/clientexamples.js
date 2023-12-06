//hide things in Jei
JEIEvents.hideItems(event => {
    event.hide([
        'minecraft:grass_block',
        'minecraft:diamond'
    ])
})

/** Add language entries */
//Here we add our custom death message for our radiation effect in startup-scripts!
ClientEvents.lang('en_us', (e) => {
    // Effect / Radiation
    e.add("death.attack.radiation", "%1$s died in a horrible way");
})