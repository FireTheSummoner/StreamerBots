const { Listener } = require('discord-akairo');
const fs = require("fs")
const fetch = require('node-fetch');

const userInvMaps = require("../../../../StreamAddons/User_Invs/sample.json")

class SummonerInv extends Listener {

    constructor() {

        super('SummonerInventory', {
            event: 'interactionCreate',
            emitter: "client",
        })
    }

    async exec(interaction) {
//                                                                                                                                     ///////////////////////////////////////////////
        if (interaction.commandName === "inventory") {                                                                                 ///////////////////////////////////////////////
//                                                                                                                                     /////////                           ///////////
            let invBagArray = []                                                                                                       /////////                           ///////////
            let invMap =  new Map(Object.entries(userInvMaps));                                                                        /////////Add equipped check to items///////////
            let userInvetory = invMap.get(`${interaction.user.id}`);                                                                   /////////                           ///////////
//                                                                                                                                     /////////                           ///////////
            function invBagItems(inven) {                                                                                              ///////////////////////////////////////////////                                                               
                //sorts them based by types and whatnot. Figure how to make it work tomorrow ~ 2/28/2023                               ///////////////////////////////////////////////
                //I SAID TOMORROW YOU ADDICT ~ Me, to myself after work on same day as above
                //I did it some of it today anyway ~ me, 2/28/2023

                if (Object.keys(inven).length > 0 && invBagArray.length < 30) {

                    for (const itemName in inven) {
                        
                        if (invBagArray.length % 10 === 0) {
                            invBagArray.push(`\n${inven[itemName].image}`)
                        }
                        else {
                            invBagArray.push(inven[itemName].image)
                        }
                    }
                }
                return Promise.resolve(100);
            }
            function emptyItems() {
                while (invBagArray.length < 30) {
                    if (invBagArray.length % 10 === 0 && invBagArray.length !== 0) {
                        invBagArray.push("\n⬛")
                    }
                    else {
                        invBagArray.push("⬛")
                    }
                }
                return Promise.resolve(100);
            }
            function invColor(inven) {
                if (Object.keys(inven).length > 0) {
                    for (const colorName in inven) {
                        if (inven[colorName].equipped === true) {
                            return colorName
                        }
                    }
                }
                else {
                    return false
                }    
            }

            if (!userInvetory) { // check if registered first
                const replyMsg = await interaction.reply("You have not been registered")
                setTimeout(() => interaction.deleteReply(), 10000)
            }

            else if (userInvetory) {

                if (!interaction.options._hoistedOptions[0]) { //this is only for if no choice is selected

                    invBagItems(userInvetory.items.weapons)
                    .then(invBagItems(userInvetory.items.helmets))
                    .then(invBagItems(userInvetory.items.armor))
                    .then(invBagItems(userInvetory.items.shields))
                    .then(invBagItems(userInvetory.items.subWeapons))
                    .then(invBagItems(userInvetory.items.pets))
                    .then(invBagItems(userInvetory.items.consumables))
                    .then(invBagItems(userInvetory.items.colors))
                    .then(emptyItems())
                    
                    //Weird shit above
    
                    const invEmbed = {
                        title: `${interaction.user.username}'s Inventory`,
                        color: invColor(userInvetory.items.colors) === false ? 0xFF9900 : invColor(userInvetory.items.colors),
                        fields: [
                            {
                                name: `Stats:`,
                                value: `**HP**: 0`,
                                inline: true
                            },
                            {
                                name: "\u200B",
                                value: `**ATK**: 0`,
                                inline: true
                            },
                            {
                                name: "\u200B",
                                value: `\u200b`
                            },
                            {
                                name: "\u200B",
                                value: `**DEF**: 0`,
                                inline: true
                            },
                            {
                                name: "\u200B",
                                value: `**SPD**: 0`,
                                inline: true
                            },
                            {
                                name: "\u200B",
                                value: `\u200b`
                            },
                            {
                                name: `Bag:`,
                                value: `${invBagArray.join(" ")}`
                            }
                        ]
                    }
        
                    interaction.reply({ embeds: [invEmbed] })
                }

                else if (interaction.options._hoistedOptions[0]) {//this is only for if a choice is selected

                    let itemsMap =  new Map(Object.entries(userInvetory.items));
                    let invItems = itemsMap.get(`${interaction.options._hoistedOptions[0].value}`)
                    
                    invBagItems(invItems).then(emptyItems())

                    const invEmbed = {
                        title: `${interaction.user.username}'s Inventory`,
                        color: invColor(userInvetory.items.colors) === false ? 0xFF9900 : invColor(userInvetory.items.colors),
                        fields: [
                            {
                                name: `Stats:`,
                                value: `**HP**: 0`,
                                inline: true
                            },
                            {
                                name: "\u200B",
                                value: `**ATK**: 0`,
                                inline: true
                            },
                            {
                                name: "\u200B",
                                value: `\u200b`
                            },
                            {
                                name: "\u200B",
                                value: `**DEF**: 0`,
                                inline: true
                            },
                            {
                                name: "\u200B",
                                value: `**SPD**: 0`,
                                inline: true
                            },
                            {
                                name: "\u200B",
                                value: `\u200b`
                            },
                            {
                                name: `Bag:`,
                                value: `${invBagArray.join(" ")}`
                            }
                        ]
                    }
        
                    interaction.reply({ embeds: [invEmbed] })
                }
            }
        }
    }
}

module.exports = SummonerInv;

