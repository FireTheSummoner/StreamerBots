const { Listener } = require('discord-akairo');
const { ActivityType } = require("discord.js");

class BunnyReady extends Listener {
    constructor() {
        super('BunnyOnline', {
            event: 'ready',
            emitter: "client",
        })
    }

    exec() {
        /*              Code To Leave Blacklisted Servers
            for (const [serverID, server] of map) {
                if (BLServers.includes(serverID)) {
                    let ServerCache = this.client.guilds.cache.get(`${serverID}`)
                    ServerCache.leave()
                }
            }
        */
        console.log(`Tap Tap Tap`)
        this.client.user.setActivity("Must. Click. All. Circles.", {
            type: ActivityType.Streaming,
            url: "https://www.twitch.tv/firethesummoner"
        })
    }
}

module.exports = BunnyReady;