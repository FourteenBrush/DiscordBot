const Discord = require('discord.js');
module.exports = {
	name: 'embed',
	description: 'Sends an embed.',
	guildOnly: true,
	cooldown: 5,
	execute(message, args, client) {
        const embed = new Discord.MessageEmbed()
			.setTitle('User Information')
			.addField('Player Name', message.author.username)
			.addField('Version', Discord.version)
			.addField('Current Server', message.guild.name)
			.setColor(0xF1C40F)
			.setImage(message.author.avatarURL())
        message.channel.send(embed);
    }
}