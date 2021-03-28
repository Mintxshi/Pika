const Discord = require('discord.js');
console.log("hello module has started")

module.exports = {
    name: 'hello',
    description: 'hi :)',
    execute(message, args){
        const helloembed = new Discord.MessageEmbed()
            .setColor('#ba8249')
            .setTitle('Hey!')
            .setAuthor('Pika || Hello', 'https://cdn.discordapp.com/avatars/480813065701687306/49b1ce923f007cbbddc7452bbd260963.png?size=256', 'https://pika.coffee')
        message.channel.send(helloembed);
    }
}