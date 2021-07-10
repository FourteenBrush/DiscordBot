module.exports = {
	name: 'role',
    description: 'gives a role to a user',
    guildOnly: true,
    args: true,
    usage:  '<user> <role>',
    cooldown: 5,
    execute(message, args, client) {
        message.channel.send('This command is not made yet \nwhat a n00b developer');
	},
};
    