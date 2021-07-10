module.exports = {
	name: 'restart',
	description: 'restarts the bot.',
	guildOnly: true,
	permissions: 'ADMINISTRATOR',
	cooldown: 5,
	execute(message, args, client) {
		if (message.author.id !== "583252968497872900") return
		console.log('Client shutdown')
		message.channel.send('Shutdown in 2...')
		message.channel.send('Shutdown in 1...')
		message.channel.send('Shutdown...')
		setTimeout(function(){ process.exit(); }, 2000);
	}
}