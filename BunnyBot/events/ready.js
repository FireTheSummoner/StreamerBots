const { Listener } = require('discord-akairo');

class BunnyReady extends Listener {
    constructor() {
        super('BunnyOnline', {
            event: 'ready',
            emitter: "client",
        })
    }

    exec() {
        console.log(`Tap Tap Tap`)
        this.client.user.setActivity("Must. Click. All. Circles.", {
            type: "STREAMING",
            url: "https://www.twitch.tv/firethesummoner"
        })
    }
}

module.exports = BunnyReady;