const Discord = require('discord.js');
console.log("ping module has started")

module.exports = {
    name: 'ping',
    description: 'Pong!',
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ba8249')
            .setTitle('Pong!')
            .setAuthor('Pika || Pong', 'https://cdn.discordapp.com/avatars/480813065701687306/49b1ce923f007cbbddc7452bbd260963.png?size=256', 'https://pika.coffee')
            .setDescription('Bot is running at [PING] ms!')
        message.channel.send(exampleEmbed);
    }
}   