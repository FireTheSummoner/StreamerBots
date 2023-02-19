const { Listener } = require('discord-akairo');
const { ActivityType } = require("discord.js");

class SummonerReady extends Listener {
    constructor() {
        super('SummonerOnline', {
            event: 'ready',
            emitter: "client",
        })
    }

    exec() {
        console.log(`You called master?`)
        this.client.user.setActivity("Watching the realms", {
            type: ActivityType.Streaming,
            url: "https://www.twitch.tv/firethesummoner"
        })
    }
}

module.exports = SummonerReady;