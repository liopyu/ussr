ServerEvents.recipes(event => {


    // Minecraft
    event.shapeless('4x minecraft:string', [
      '#forge:wool'
    ]);
  
    event.shaped('minecraft:fishing_rod', [
      '  E',
      ' EA',
      'E B'
    ], {
      A: 'aquaculture:fishing_line',
      B: 'aquaculture:iron_hook',
      E: 'minecraft:stick'
    });
    
  
    event.shapeless('4x minecraft:paper', [
      'minecraft:birch_log',
      'minecraft:birch_log'
    ]);
  
    event.shapeless('4x minecraft:paper', [
      'minecraft:birch_wood',
      'minecraft:birch_wood'
    ]);
  
    event.shapeless('4x minecraft:paper', [
      'minecraft:stripped_birch_wood',
      'minecraft:stripped_birch_wood'
    ]);
  
    event.shapeless('4x minecraft:paper', [
      'minecraft:stripped_birch_log',
      'minecraft:stripped_birch_log'
    ]);
    
      
  
    event.shaped('minecraft:chest', [
      'AAA',
      'A A',
      'AAA'
    ], {
      A: '#minecraft:planks'
    });
  
  
    event.shaped('minecraft:chain', [
      'A',
      'A',
      'A'
    ], {
      A: 'minecraft:iron_nugget'
    });
  
    event.shaped('minecraft:end_crystal', [
      'AAA',
      'ABA',
      'ACA'
    ], {
      A: 'mekanism:structural_glass',
      B: 'minecraft:ender_eye',
      C: 'minecraft:ghast_tear'
    });
  })