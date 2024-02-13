ServerEvents.loaded(event => {
    const { server, server: { persistentData } } = event
    if (!persistentData.firstLoad) {
        persistentData.firstLoad = true
        persistentData.timer = 0
        //Running code within these curly brackets will only run once upon first world load

    }
    //Things you want to load every time a server loads goes here outside of the curly brackets
})

//Sets a timer on a 20 tick interval
ServerEvents.tick(event => {
    let pData = event.server.persistentData
    pData.servertimer = (++pData.servertimer) % 20
    if (pData.servertimer != 0) return

    //Run code here which will run every 20 ticks
})