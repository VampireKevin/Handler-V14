const { SlashCommandBuilder, ChatInputCommandInteraction, Client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),

	/**
	 *
	 * @param { ChatInputCommandInteraction } interaction
	 * @param { Client } client
	 */

	async execute(interaction, client) {
		await interaction.reply({content: `Pong! (${client.ws.ping} ms)`});
	},
};