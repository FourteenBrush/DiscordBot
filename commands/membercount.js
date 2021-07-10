module.exports = {
	name: 'membercount',
	aliases: ['server'],
	description: 'Display info about this server.',
	guildOnly: true,
	cooldown: 5,
	execute(message, args, client) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};