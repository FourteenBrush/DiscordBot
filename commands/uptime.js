const prettyMilliseconds = require("pretty-ms");
module.exports = {
    name: 'uptime',
    description: 'shows the bot\'s uptime',
    guildOnly: true,
    cooldown: 5,
    execute(message, args, client) {
        message.channel.send(`Uptime: ${prettyMilliseconds(client.uptime)}`)
    }
  }