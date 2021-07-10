module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pf', 'av'],
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	guildOnly: true,
	cooldown: 5,
	execute(message, args, client) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`;
		});

		message.channel.send(avatarList);
	},
};