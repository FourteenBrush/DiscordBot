module.exports = {
	name: 'cat',
	description: 'Sends a picture of a random cat.',
	guildOnly: true,
	cooldown: 5,
	execute(message, args, client) {
        const { file } = fetch('https://aws.random.cat/meow').then(response => response.json());
        //const { file } =  await fetch('https://aws.random.cat/meow').then(response => response.json());
        message.channel.send(file);
    }
}