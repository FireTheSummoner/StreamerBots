const { Listener } = require('discord-akairo');
const fetch = require('node-fetch');

class SummonerInv extends Listener {
    constructor() {
        super('SummonerInventory', {
            event: 'interactionCreate',
            emitter: "client",
        })
    }

    async exec(interaction) {
        if (interaction.commandName === "inventory") {
            console.log(interaction.options._hoistedOptions[0].value)
            if (!interaction.options._hoistedOptions) { //this is only for if no choice is selected
                //Call to API to recieve all inventory data
                /*    SAMPLE
                    try {
                        const response = await fetch(`${apiURL}/${token}/inventory/${interaction.user.id}`);
                        const data = await response.json();

                        if (data) {
                            interaction.channel.send(`You have ${data.size} items`)
                        }
                        else if (!data) {
                            interaction.channel.send("You have no items ;-;")
                        }
                        else {
                            //smells like weird error
                        }
                    }
                    catch (err) {
                        console.log(err)
                    }
                */
            }
            else if (interaction.options._hoistedOptions[0]) {//this is only for if a choice is selected
                //Call to API to recieve all inventory data
                /*    SAMPLE
                    try {
                        const response = await fetch(`${apiURL}/${token}/inventory/${interaction.user.id}/${interaction.options._hoistedOptions[0].value}`);
                        const data = await response.json();

                        if (data) {
                            interaction.channel.send(`You have ${data.size} ${interaction.options._hoistedOptions[0].value}s`)
                        }
                        else if (!data) {
                            interaction.channel.send("You have no ${interaction.options._hoistedOptions[0].value}s ;-;")
                        }
                        else {
                            //smells like weird error
                        }
                    }
                    catch (err) {
                        console.log(err)
                    }
                */
            }
            else {
                //smells like something I forgot it can return or an error
            }
        }
    }
}

module.exports = SummonerInv;
