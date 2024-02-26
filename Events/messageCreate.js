const { Prefix } = require('../Json/config.json');
const client = require('..')

client.on('messageCreate', async message => {

	if(message.content.indexOf(Prefix) !== 0) return;

	const args = message.content.slice(Prefix.length).trim().split(/ +/g)

	const Command = args.shift().toLowerCase()

	const Cmd = client.Cmd.get(Command)

	if(!Cmd) return console.log('❌ | The Command is Invalid')

	Cmd.run(client, message, args)

})