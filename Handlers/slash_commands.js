const fs = require("node:fs");
const { REST, Routes, Events } = require("discord.js");
const { Token } = require("../Json/config.json");
const rest = new REST({ version: '10' }).setToken(Token);

module.exports = (client) => {
  const commands = [];

  fs.readdirSync("./SlashCommands").forEach(folder => {
    const commandFiles = fs.readdirSync(`./SlashCommands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandFiles) {
      const command = require(`../SlashCommands/${folder}/${file}`);

      if (command.data?.name && command.data?.description) {
        commands.push(command.data.toJSON());
        client.commands.set(command.data.name, command)
      }
    }
  });

  client.on(Events.ClientReady, async (c) => {
    try {
      console.log(`Started Refreshing ${commands.length} Application (/) Commands.`);
      const data = await rest.put(Routes.applicationCommands(c.user.id), {
        body: commands
      });
      console.log(`Successfully Reloaded ${data.length} Application (/) Commands.`);
    } catch (err) {
      console.log(err)
    }
  })
}