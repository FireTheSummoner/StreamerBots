const { Listener } = require('discord-akairo');
const { bots } = require("../../../serverBotCount.json")
const fs = require("fs")

class SummonerJoiners extends Listener {
    constructor() {
        super('Joiners', {
            event: 'guildMemberAdd',
            emitter: "client",
        })
    }

    async exec(member) {
        let sendChan = member.guild.channels.cache.get("1015688079551512769");
        if (member.user.bot === true) {
            let newBotCount = {
                bots: bots + 1
            }

            const welcomeEmb = {
                color: 0xFF9900,
                title: `${member.user.username}#${member.user.discriminator}`,
                thumbnail: {
                    url: `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}?size=4096`
                },
                description: `Welcome in <@!${member.user.id}> to the abyss\nYou are the ${bots + 1} bot`
            }

            //add 1 to bot file count
            fs.writeFile( `./serverBotCount.json`, JSON.stringify(newBotCount), (err) => {
                if (err) {
                    console.log(err)
                }
                else if (!err) {
                    console.log("Bot added to server")
                }
            })

            sendChan.send({ embeds: [welcomeEmb] })
        }
        else if (member.user.bot === false) {
            const welcomeEmb = {
                color: 0xFF9900,
                title: `${member.user.username}#${member.user.discriminator}`,
                thumbnail: {
                    url: `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}?size=4096`
                },
                description: `Welcome in <@!${member.user.id}> to the abyss\nYou are the ${member.guild.memberCount - bots} member`
            }
    
            sendChan.send({ embeds: [welcomeEmb] })
        }
    }
}

module.exports = SummonerJoiners;