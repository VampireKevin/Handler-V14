const { Client, Message, EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'ping',

    /**
     * 
     * @param { Client } client 
     * @param { Message } message 
     * @param { String[] } args
     */

    run: async (client, message, args) => {
       await message.reply({content: `Pong! (${client.ws.ping} ms)`});
    }
}