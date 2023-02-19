const { Listener } = require('discord-akairo');
const { bots } = require("../../../serverBotCount.json")
const fs = require("fs")

class SummonerLeavers extends Listener {
    constructor() {
        super('Leavers', {
            event: 'guildMemberRemove',
            emitter: "client",
        })
    }

    async exec(member) {
        let sendChan = member.guild.channels.cache.get("1015688079551512769");
        if (member.user.bot === true) {
            let newBotCount = {
                bots: bots - 1
            }

            const welcomeEmb = {
                color: 0xFF9900,
                title: `${member.user.username}#${member.user.discriminator} has left`,
                thumbnail: {
                    url: `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}?size=4096`
                },
                description: `<@!${member.user.id}> has left us ;-;\nThere are now ${newBotCount.bots} bots`
            }

            //add 1 to bot file count
            fs.writeFile( `./serverBotCount.json`, JSON.stringify(newBotCount), (err) => {
                if (err) {
                    console.log(err)
                }
                else if (!err) {
                    console.log("Bot removed from server")
                }
            })

            sendChan.send({ embeds: [welcomeEmb] })
        }
        else if (member.user.bot === false) {
            const welcomeEmb = {
                color: 0xFF9900,
                title: `${member.user.username}#${member.user.discriminator} has left`,
                thumbnail: {
                    url: `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}?size=4096`
                },
                description: `<@!${member.user.id}> has left us ;-;\nThere are now ${member.guild.memberCount - bots} members`
            }
    
            sendChan.send({ embeds: [welcomeEmb] })
        }
    }
}

module.exports = SummonerLeavers;