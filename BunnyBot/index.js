const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
const { bunnyToken } = require('../tokens.json')

class Client extends AkairoClient {
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
            directory: './events/',
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
const client = new Client();
client.login(Token);
