// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('item', event => {
	// Register new items here
	event.create('dragon_ring').displayName('§6Ring of Fire Dragons')

})
ItemEvents.modification(event => {
	//Modify any item here
	event.modify("kubejs:dragon_ring", item => { item.setMaxStackSize(1) })
	event.modify("minecraft:potion", item => { item.setMaxStackSize(16) })
	event.modify("minecraft:splash_potion", item => { item.setMaxStackSize(16) })
})


StartupEvents.registry('block', event => {
	// Register new blocks here
	event.create('charred_grass').displayName('Charred Grass')
		.soundType('dirt')
		.hardness(0.8)
		.tagBlock('minecraft:mineable/shovel') // Make it mine faster using a shovel in 1.18.2+
		.requiresTool(false)


	event.create('charred_dirt').displayName('Charred Dirt')
		.soundType('dirt')
		.hardness(0.8)
		.tagBlock('minecraft:mineable/shovel') // Make it mine faster using a shovel in 1.18.2+
		.requiresTool(false)

	event.create('exploding_block').displayName('Exploding Block')
		.soundType('rooted_dirt')
		.hardness(0.8)
		.tagBlock('minecraft:mineable/shovel') // Make it mine faster using a shovel in 1.18.2+
		.requiresTool(false)

	event.create('charred_stone').displayName('Charred Stone')
		.soundType('stone')
		.hardness(1)
		.tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
		.requiresTool(true)



	event.create('charred_earth').displayName('Charred Earth')
		.soundType('dirt')
		.hardness(0.7)
		.tagBlock('minecraft:mineable/shovel') // Make it mine faster using a shovel in 1.18.2+
		.requiresTool(false)

})

StartupEvents.registry('mob_effect', event => {
	//register effects here
	//effects can do a lot of things, a common use is modifying a specific attribute, these can be modded attributes as well!
	event.create('faeles_power').modifyAttribute('minecraft:generic.attack_damage',
		'e0f4e796-3d3d-11ee-be56-0242ac120002',
		//you must have a unique uuid for every newly created effect, the reason for this is so they have id's basically.
		//A good uuid generator is here -> https://www.uuidgenerator.net/
		1,
		"multiply_base").color(Color.GREEN)



})

StartupEvents.registry('sound_event', event => {
	//register sounds here
	//must have them in the kubejs>assets folder
	event.create('minecraft:dragonfire_breath')
})



StartupEvents.registry('item', event => {
	event.create('ancient_tempura').displayName('§a§lAncient Tempura').food(food => {
		food
			.hunger(10)
			.saturation(.6)//This value does not directly translate to saturation points gained
			//The real value can be assumed to be:
			//min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
			.effect('minecraft:regeneration', 1800, 1, 1)
			.effect('minecraft:strength', 1800, 2, 1)
			//.removeEffect('poison')
			.alwaysEdible()//Like golden apples
			//.fastToEat()//Like dried kelp
			.meat()//Dogs are willing to eat it
		//.eaten(ctx => {//runs code upon consumption
		ctx.player.tell(Text.gold('Now THATS Ancient Tempura!'))
		//If you want to modify this code then you need to restart the game.
	})

})
//More complex way of adding a potion effect
//You will need the client event to set your custom death message as well which should be included in this pack!
const $EntityDamageSource = Java.loadClass(`net.minecraft.world.damagesource.EntityDamageSource`);

/** Register effects */
StartupEvents.registry('mob_effect', event => {
	// Register radiation effect
	event.create('radiation')
		// Change the name to be "Radiation", in green
		.displayName(Component.green("Radiation"))
		// Set a tick event to apply the action
		.effectTick((entity, lvl) => global.radiationEffect(entity, lvl))
		// Set the color of the effect
		.color(Color.GREEN)
		// Set whether the effect is harmful
		.harmful();
})

/**
 * Applies the radiation effect.
 * Damages the entity (likely player) with 2 HP (1 hearts) per 10 ticks.
 *
 * @param {Internal.Entity} entity The entity to apply the effect to
 * @param {number} lvl The level of the effect
 */
global.radiationEffect = (entity, lvl) => {
	// Create damage source
	const damageSource = new $EntityDamageSource("radiation", entity);
	// Check if the global is run on the client. If so, return
	if (entity.level.clientSide) return;
	// Damage based on level 
	entity.attack(damageSource, lvl + 1);
}