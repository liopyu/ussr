//This script lets you run a function once a second instead of every single tick. Increases performance in larger scripts, 
//especially if running many event.server.runnCommandSilent('') functions!

/*
 * You can use the player's age. This works for most cases, but keep in mind the player's age resets on relogging
 */
PlayerEvents.tick(event => {
    if (event.player.age % 20 != 0) return
    /* Code below here runs once every 20 ticks (20 ticks = 1 second) */
    event.player.tell('I get 1 gold ingot and 1 diamond every 20 ticks.. Im rich!')
    event.server.runCommandSilent(`execute as ${event.player.username} run give @s diamond`)
    event.server.runCommandSilent(`execute as ${event.player.username} run give @s gold_ingot`)
})

//In this player tick event we're giving the player regeneration periodically while they're wearing a diamond chestplate
PlayerEvents.tick(event => {
    const { player } = event

    // Fires event once a second
    if (player.age % 20 != 0) return

    // Check if the player is wearing a diamond chestplate
    const diamondChestplateId = 'minecraft:diamond_chestplate' // Replace with the correct identifier
    if (player.chestArmorItem.id === diamondChestplateId) {
        // Apply regeneration potion effect
        let potion = event.player.potionEffects
        potion.add('minecraft:regeneration', 200, 0, false, false)
    }
})