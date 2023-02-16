const { Listener } = require('discord-akairo');
const { ActivityType } = require("discord.js");
const fetch = require('node-fetch')

class SummonerReady extends Listener {
    constructor() {
        super('SummonerOnline', {
            event: 'ready',
            emitter: "client",
        })
    }

    async exec() {
    /*
        try {
            const response = await fetch('https://github.com/');
            const data = await response.text();

            if (data) {
                console.log("API WORKS")
            }
            else if (!data) {
                console.log("API WORKS BUT NO DATA")
            }
            
        }
        catch (err) {
            console.log(err)
        }
    */
        console.log(`You called master?`)
        this.client.user.setActivity("Watching the realms", {
            type: ActivityType.Streaming,
            url: "https://www.twitch.tv/firethesummoner"
        })
    }
}

module.exports = SummonerReady;