module.exports = {
	name: 'say',
	description: 'Let the bot say the arguments provided.',
	guildOnly: true,
	args: true,
	usage:   '<arguments>',
	cooldown: 5,
	execute(message, args, client) {
        if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
	
		message.channel.send(`${args[0]}`);
	}
}	