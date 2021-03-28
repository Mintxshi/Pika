const Discord = require('discord.js');
console.log("word module has started")

module.exports = {
    name: 'word',
    description: 'beta command!',
    execute(message, args){
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        else if (args[0] === '104') {
            return message.channel.send('uhm');
        }
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ba8249')
            .setTitle(`${args[0]}`)
            .setAuthor('Repeat', 'https://cdn.discordapp.com/avatars/480813065701687306/49b1ce923f007cbbddc7452bbd260963.png?size=256', 'https://pika.coffee')
        message.channel.send(exampleEmbed);
        message.react('✅');
    }
}