PlayerEvents.loggedIn(event => {
  //Checks if the player already has the 'new_join' stage and if not it adds it, effectively only running
  //this once on first world join.
  if (!event.player.stages.has('new_join')) {
    event.player.stages.add('new_join')
    event.server.runCommandSilent(`give ${event.entity.username} nether_star`)
    event.server.runCommandSilent(`give ${event.entity.username} emerald`)
    //Equips player in full leather
    event.entity.setItemSlot(5, 'minecraft:leather_helmet')
    event.entity.setItemSlot(4, 'minecraft:leather_chestplate')
    event.entity.setItemSlot(3, 'minecraft:leather_leggings')
    event.entity.setItemSlot(2, 'minecraft:leather_boots')
  }
  //This runs every time a player joins
  event.server.runCommandSilent(`execute as ${event.entity.username} run give @s diamond`)
});


PlayerEvents.loggedIn(event => {
  // Define the player as well as the username to the event
  const { player, server, player: { username } } = event
  //Multiple colors version
  let message = Text.of("Hello, ").green().bold()
    .append(Text.of(`${username} `).yellow())
    .append(Text.of(`and welcome to minecraft!`).green());
  player.tell(message);

  //Simple version
  //player.tell(`Hello, ${username} and welcome to minecraft!`)

  //You can also tell the whole server the message if you wanted to
  //Multiple colors version
  let serverannouncement = Text.of(`${username} `).green().bold()
    //we .append to add another text.of to change the color
    .append(Text.of(`just joined!`).green());
  server.tell(serverannouncement);


});

// Event listener for player leaving
PlayerEvents.loggedOut(event => {
  // Define the player as well as the username to the event
  const { player, server, player: { username } } = event
  //Tells server the player left
  let serverannouncement = Text.of(`${username} `).green().bold()
    //we .append to add another text.of to change the color
    .append(Text.of(`just left.`).green());
  server.tell(serverannouncement);
});