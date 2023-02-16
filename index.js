const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
const { summonerToken, bunnyToken, summonerClientID, bunnyClientID } = require('./tokens.json');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const BotCommands = require("./Commands.json");

const summonerRest = new REST({ version: '9' }).setToken(summonerToken);

(async () => {
	try {
		console.log('Starting....');

        await summonerRest.put(
			Routes.applicationGuildCommands(`1016528542223310940`, `1015445131131895808`),
			{ body: BotCommands.summoner },
		);

        console.log("Finished")
	}
    catch (error) {
		console.error(error);
	}
})();

class SummonerBot extends AkairoClient {
    constructor() {
        super(
            {
                ownerID: ['714973277457743983'],
            },
            {
                disableMentions: 'everyone',
                intents: 131071,
            },
        );

        //Change below when adding new folders or working with manual commands
        /*this.commandHandler = new CommandHandler(this, {
            directory: './main/commands/',
            prefix: 'dk.',
            automateCategories: true,
        });*/
        this.listenerHandler = new ListenerHandler(this, {
            directory: './SummonerBot/events/',
        });
        this.listenerHandler.setEmitters({
            //commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process: process,
        });
        //this.commandHandler.useListenerHandler(this.listenerHandler);
        //this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    }
}

class BunnyBot extends AkairoClient {
    constructor() {
        super(
            {
                ownerID: ['714973277457743983'],
            },
            {
                intents: 131071,
            },
        );

        //Change below when adding new folders or working with manual commands
        /*this.commandHandler = new CommandHandler(this, {
            directory: './main/commands/',
            prefix: 'dk.',
            automateCategories: true,
        });*/
        this.listenerHandler = new ListenerHandler(this, {
            directory: './BunnyBot/events/',
        });
        this.listenerHandler.setEmitters({
            //commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process: process,
        });
        //this.commandHandler.useListenerHandler(this.listenerHandler);
        //this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    }
}

const summoner = new SummonerBot();
const bunny = new BunnyBot();
summoner.login(summonerToken);
bunny.login(bunnyToken);