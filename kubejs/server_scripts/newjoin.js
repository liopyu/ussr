PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('new_join')) {
      event.player.stages.add('new_join');
      //this is a one time command that only runs once when a new player joins
  
      event.server.runCommandSilent('give @p diamond');  
      event.server.runCommandSilent('give @p emerald');  
    }
  
    //this is a command that will run every time a player joins
    event.server.runCommandSilent(`execute as ${e.entity.username} run attribute @s puffish_skills:player.mining_speed base set -1.2`);
  });