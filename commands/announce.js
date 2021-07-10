module.exports = {
	name: 'announce',
	description: 'Announces a message into a specific channel.',
    guildOnly: true,
    args: true,
    permissions: 'ADMINISTRATOR',
    usage:   '<channel> <message>',
	cooldown: 5,
	excecute(message, args, client) {
        const channel = args[0]
        message.channel.send()
    }
}