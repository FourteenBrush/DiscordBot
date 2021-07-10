module.exports = {
    name: 'suggest',
    description: 'shows a suggestion',
    guildOnly: true,
    cooldown: 5,
    execute(message, args, client) {
        let [ch, su] = args;
        let channel = args[0]
        message.channel.send(args[1])
    }
}