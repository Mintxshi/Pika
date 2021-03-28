const Discord = require('discord.js');
console.log("ember module has started")

module.exports = {
    name: '//Ember -f -s',
    description: 'Ember - Loading Servers...',
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ff0080')
            .setTitle('Invalid permissions.')
            .setAuthor('Pika || Developer Commands.', 'https://cdn.discordapp.com/avatars/480813065701687306/49b1ce923f007cbbddc7452bbd260963.png?size=256', 'https://pika.coffee')
        message.channel.send(exampleEmbed);
    }
}           