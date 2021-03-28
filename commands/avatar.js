const Discord = require('discord.js');
console.log("avatar module has started")

module.exports = {
    name: 'avatar',
    description: 'Good afternoon!',
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ba8249')
            .setTitle('Your avatar')
            .setAuthor('Pika || Avatar.', 'https://cdn.discordapp.com/avatars/480813065701687306/49b1ce923f007cbbddc7452bbd260963.png?size=256', 'https://pika.coffee')
            .setImage(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)

        message.channel.send(exampleEmbed);
    }
}         