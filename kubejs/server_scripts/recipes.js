//Uncomment the below line and delete 'ServerEvents.recipes(event => {' for 1.18 syntax
//onEvent('recipes', event => {
ServerEvents.recipes(event => {
    event.shapeless('4x minecraft:string', [
      '#forge:wool'
    ]);
    event.shapeless('4x minecraft:paper', [
      'minecraft:birch_log',
      'minecraft:birch_log'
    ]);
    event.shaped('minecraft:end_crystal', [
      'AAA',
      'ABA',
      'ACA'
    ], {
      A: 'minecraft:glass',
      B: 'minecraft:ender_eye',
      C: 'minecraft:ghast_tear'
    });
  })