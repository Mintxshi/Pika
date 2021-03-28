const Discord = require('discord.js');
console.log("execute module has started")

module.exports = {
    name: '//execute',
    description: 'Devs only!',
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ff0080')
            .setTitle("You cannot use this command or it's not out yet.")
            .setAuthor('Pika || Developer Commands.', 'https://cdn.discordapp.com/avatars/480813065701687306/49b1ce923f007cbbddc7452bbd260963.png?size=256', 'https://pika.coffee')
        message.channel.send(exampleEmbed);
       //   execute(args[2])
    }
}           