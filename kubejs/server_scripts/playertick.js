//This script lets you run a function once a second instead of every single tick. Increases performance in larger scripts, 
//especially if running many event.server.runnCommandSilent('') functions!

/*
 * You can use the player's age. This works for most cases, but keep in mind the player's age resets on relogging
 */
PlayerEvents.tick(event => {
    if(event.player.age%20!=0) return
    /* Code below here runs once every 20 ticks (20 ticks = 1 second) */
    event.player.tell('I get 1 gold ingot and 1 diamond every 20 ticks.. Im rich!')
    event.server.runCommandSilent(`execute as ${event.player.username} run give @s diamond`)
    event.server.runCommandSilent(`execute as ${event.player.username} run give @s gold_ingot`)
})