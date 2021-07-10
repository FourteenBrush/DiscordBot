module.exports = {
    name: 'stats',
    description: 'shows the bot\'s stats',
    guildOnly: true,
    permissions: 'ADMINISTRATOR',
    cooldown: 5,
    execute(message, args, client) {
        let Memory = process.memoryUsage().heapUsed / 1024 / 1024
    message.channel.send(`Memory usage: ${Memory.toFixed(1)} MB`)
    }
}