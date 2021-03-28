const Discord = require('discord.js');
console.log("peach module has started")

module.exports = {
    name: 'peach',
    description: 'peach!',
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffa880')
            .setTitle("peach")
            .setAuthor('peach', 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/281/peach_1f351.png', 'https://pika.coffee')
        message.channel.send(exampleEmbed);
        message.react('🍑');
    }
}