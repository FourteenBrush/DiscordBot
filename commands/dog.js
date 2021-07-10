module.exports = {
	name: 'dog',
	description: 'Sends a picture of a random dog.',
	guildOnly: true,
	cooldown: 5,
	execute(message, args, client) {
        let dog = 
            ["https://images.dog.ceo/breeds/malinois/n02105162_5327.jpg",
             "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_5395.jpg",
             "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_5395.jpg",
             "https://images.dog.ceo/breeds/terrier-norwich/n02094258_2312.jpg",
             "https://images.dog.ceo/breeds/germanshepherd/n02106662_855.jpg",
             "https://images.dog.ceo/breeds/germanshepherd/n02106662_855.jpg",
             "https://images.dog.ceo/breeds/entlebucher/n02108000_1512.jpg",
             "https://images.dog.ceo/breeds/terrier-westhighland/n02098286_1591.jpg",
             "https://images.dog.ceo/breeds/germanshepherd/n02106662_23996.jpg",
             "https://images.dog.ceo/breeds/dane-great/n02109047_1813.jpg",
             "https://images.dog.ceo/breeds/mountain-bernese/n02107683_2007.jpg",
             "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_3702.jpg",
             "https://images.dog.ceo/breeds/pomeranian/n02112018_5367.jpg",
             "https://images.dog.ceo/breeds/terrier-american/n02093428_12462.jpg",
             "https://images.dog.ceo/breeds/bulldog-french/n02108915_1866.jpg",
             "https://images.dog.ceo/breeds/beagle/n02088364_2566.jpg",
             "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_3611.jpg",
             "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_6650.jpg",
             "https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20190611_152047.jpg",
             "https://cdn.discordapp.com/attachments/765266789344083988/804360348907208724/20201007_154131.jpg"]
    const random = dog[Math.floor(Math.random() * dog.length)]
    message.channel.send(random)
    //message.channel.send('https://random.dog/')
    }
}