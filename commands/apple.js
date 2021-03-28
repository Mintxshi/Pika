const Discord = require('discord.js');
console.log("apple module has started")

module.exports = {
    name: 'apple',
    description: 'apple!',
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#de1a10')
            .setTitle("apple")
            .setAuthor('apple', 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/281/red-apple_1f34e.png', 'https://pika.coffee')
        message.channel.send(exampleEmbed);
        message.react('🍎');
    }
}