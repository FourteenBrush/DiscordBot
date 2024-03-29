module.exports = {
	name: 'clear',
	description: 'Clears up to 99 messages.',
	guildOnly: true,
	permissions: 'ADMINISTRATOR',
	usage:   '<amount>',
	cooldown: 5,
	execute(message, args, client) {
			const amount = parseInt(args[0]) + 1;//command === 'clear'
		
			if (isNaN(amount)) {
				return message.reply('that doesn\'t seem to be a valid number.');
			} else if (amount <= 1 || amount > 100) {
				return message.reply('you need to input a number between 1 and 99.');
			}
	
			message.channel.bulkDelete(amount, true).catch(err => {
				console.error(err);
				message.channel.send('there was an error trying to clear messages in this channel!');
			});
		 }
	};