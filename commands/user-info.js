module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	guildOnly: true,
	cooldown: 5,
	execute(message, args, client) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};