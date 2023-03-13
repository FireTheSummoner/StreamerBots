const { Listener } = require('discord-akairo');
const fetch = require("node-fetch")

class SummonerFighting extends Listener {

    constructor() {

        super('SummonerFighting', {
            event: 'interactionCreate',
            emitter: "client",
        })
    }

    async exec(interaction) {
        if (interaction.commandName === "fight") {
            let user = interaction.user.id
            let monster = 1
            let timer = 1000
            const response = await fetch(`${apiLink}fight/${user}/${monster}`); //Yes this line will not work unless access to api
            const data = await response.json();

            interaction.reply(`Fight started between ${interaction.user.username} and AJ`) //change API Responce to include monster name
            
            for (let i = 0; i < data.length; i++) {
                setTimeout(() => {
                    interaction.channel.send(`${data[i]}`)
                    timer += 1000
                },timer)
            }
        }
    }
}

module.exports = SummonerFighting;

