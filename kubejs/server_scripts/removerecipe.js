ServerEvents.recipes(event => {
    //Remove by recipe ID
    [
      'minecraft:bone_meal',
      'ars_nouveau:horn_to_bonemeal'
  
    ].forEach((recipeID) => event.remove({id: recipeID}));

    //Remove all recipes an item is related to. For example putting 'minecraft:bonemeal' here would remove the recipe for bone blocks as well.
    [

    ].forEach((ingredientID) => event.remove({input: ingredientID}));
    
    //Remove by item ID
    [

    ].forEach((itemID) => event.remove({output: itemID}));

})

