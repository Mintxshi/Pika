const Discord = require('discord.js');
console.log("afternoon module has started")

module.exports = {
    name: 'afternoon',
    description: 'Good afternoon!',
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ba8249')
            .setTitle('Afternoon!')
            .setAuthor('Pika || Afternoon.', 'https://cdn.discordapp.com/avatars/480813065701687306/49b1ce923f007cbbddc7452bbd260963.png?size=256', 'https://pika.coffee')
        message.channel.send(exampleEmbed);
    }
}           