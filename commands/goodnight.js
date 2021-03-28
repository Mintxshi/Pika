const Discord = require('discord.js');
console.log("gn module has started")

module.exports = {
    name: 'goodnight',
    description: 'Good night!',
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ba8249')
            .setTitle('Goodnight!')
            .setAuthor('Pika || Goodnight.', 'https://cdn.discordapp.com/avatars/480813065701687306/49b1ce923f007cbbddc7452bbd260963.png?size=256', 'https://pika.coffee')
        message.channel.send(exampleEmbed);
    }
}