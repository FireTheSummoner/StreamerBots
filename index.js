const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
const { summonerToken, bunnyToken } = require('./tokens.json');

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
            directory: './SummonerBot/events/main',
        });
        this.listenerHandler.setEmitters({
            //commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process: process,
        });
        //this.commandHandler.useListenerHandler(this.listenerHandler);
        //this.commandHandler.loadAll();
        this.listenerHandler.loadAll();

        this.invHander = new ListenerHandler(this, {
            directory: './SummonerBot/events/inventory',
        });
        this.invHander.setEmitters({
            //commandHandler: this.commandHandler,
            listenerHandler: this.invHander,
            process: process,
        });
        this.invHander.loadAll();
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