const { Listener } = require('discord-akairo');
const fs = require("fs")
const fetch = require('node-fetch');

const userInvMaps = require("../../../../StreamAddons/User_Invs/sample.json")

class SummonerStart extends Listener {

    constructor() {

        super('SummonerStart', {
            event: 'interactionCreate',
            emitter: "client",
        })
    }

    async exec(interaction) {
        /*
            first read command is used and their player status --
            if !player : --
                display welcome message (hidden)
                have player use buttons to cycle through messages
                at end display a confirmation button to register
            if player:
                display a "what you want?" message (hidden)
                have player use dropdown menues for guides
        */

        if (interaction.commandName === "tutorial") {
            let invMap =  new Map(Object.entries(userInvMaps));
            let userExists = invMap.get(`${interaction.user.id}`);

            if (!userExists) {
                //start of tutorial

                const welcomeEmbed = {
                    title: "Welcome to uhhhhh",
                    color: 0xFF9900,
                    description: `Welcome ${interaction.user.username} to the world of [UHHHHH], here you can fight all the monsters and gods you want to your hearts content. Be warned tho because some actions can raise the worlds taboo level and bring an end to all life as we know it. For now though the gods have blessed the world so that cant happen for a long time, including so many other things that make commiting taboos easier so rest easy. Lemme teach you all you need to know about this world all the amazing wonders inside it`
                }

                const tabooEmb = {
                    title: "World Taboo",
                    color: 0x000001,
                    description: `Taboo is when you break the laws of this world set forth by the gods, not to worry though because it can be offset by doing holy favors for the gods.
                    If the taboo reaches a certain level the gods will summon an ancient chaos that thinks about nothing but destorying the world, likewise if the gods love the world enough they will grant their blessings to its inhabitiants.`
                }

                const invenEMb = {
                    title: "Your inventory",
                    color: 0xFF9900,
                    description: "A magic bag that can hold items of any size but you only have 30 slots you can use to hold items. Equipped items do not show up in your bag, and in town you do have the inifinty chest so remember to use that before every quest or outing",
                }
                
                const battlingEmb = {}
                const treeEmbed = {}
                const runeEmded = {}
                const cardEmbd = {}
                const skillEmb = {}
                const abilityEmbed = {}
                const profileEmb = {}
                const auraEmb = {}
                const forgingEmb = {}
                const enhancingEmb = {}
                //const treeEmbed = {}
            }




        
            

            //take user id to sample.json file with all object data set to nothing.

            invMap.set(`${interaction.user.id}`, {
                name: `${interaction.user.username}`,
                id: `${interaction.user.id}`,
                stats: {
                    hp: 0,
                    mp: 0,
                    atk: 0,
                    def: 0,
                    spd: 0,
                },
                items: {
                    weapons:{},
                    helmets: {},
                    armor: {},
                    shields: {},
                    subWeapons: {},
                    pets: {},
                    colors: {},
                    consumables: {}
                }
            })
        }
    }
}

module.exports = SummonerStart;