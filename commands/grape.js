const Discord = require('discord.js');
console.log("grape module has started")

module.exports = {
    name: 'grape',
    description: 'grape!',
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#9732a8')
            .setTitle("grape")
            .setAuthor('grape', 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/281/grapes_1f347.png', 'https://pika.coffee')
        message.channel.send(exampleEmbed);
        message.react('🍇');
    }
}