//This script lets you run a function once a second instead of every single tick. Increases performance in larger scripts, 
//especially if running many event.server.runnCommandSilent('') functions!



//Gives players the timer's persistent data to initialize the timer on each player who logs in.
PlayerEvents.loggedIn(event => {
    if(!event.player.persistentData.timer) event.player.persistentData.timer = 0
})

  //Sets a timer on a 20 tick interval
  PlayerEvents.tick(event => {
    let pData = event.player.persistentData
    pData.timer = (++pData.timer) % 20
    if(pData.timer != 0) return //event here if you wanted to ignore the lower event block
})

//I personally do a seperate event block all together to keep things clean thought you could do events in the above blocks too.
PlayerEvents.tick(event => {
    let pData = event.player.persistentData
    if(pData.timer == 0 & event.player.block.getBiomeId() == 'minecraft:swamp') {
        event.player.tell('I get 1 gold ingot and 1 diamond every 20 ticks.. Im rich!')
        event.server.runCommandSilent(`execute as ${event.player.username} run give @s diamond`)
        event.server.runCommandSilent(`execute as ${event.player.username} run give @s gold_ingot`)
    }
})