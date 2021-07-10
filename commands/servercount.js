module.exports = {
	name: 'servercount',
	description: 'Show a count of all the servers the bot is in.',
	guildOnly: true,
	cooldown: 5,
	execute(message, args, client) {
        message.channel.send(`serving ${client.guild.array().length} servers`)
    }
}