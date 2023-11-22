ServerEvents.loaded(event => {
    const {server,server: {persistentData}} = event
    if (!persistentData.firstLoad) {
        persistentData.firstLoad = true
        //Run code here to load once on first world load
    }
    //Run code here to load every time a world is loaded

})