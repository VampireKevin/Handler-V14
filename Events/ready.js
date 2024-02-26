const { Events } = require("discord.js");
const client = require("../index");

client.on(Events.ClientReady, async (c) => {
  console.log(`${c.user.tag} Is Ready`)
});