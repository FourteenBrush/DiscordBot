module.exports = {
    name: 'ping',
    description: "shows the bot/'s ping",
    execute(message, args, client) {
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms\nWebsocket heartbeat: ${client.ws.ping}ms`);
        });
    }
}
