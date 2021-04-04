const Discord = require('discord.js');
console.log("execute module has started")

module.exports = {
    name: 'execute',
    description: 'Devs only!',
    execute(message, args){
        let sentence = message.content.split(" ");
        sentence.shift();
        sentence = sentence.join(" ");

        if (!message.author.id !== 'your UID here.'){
            eval(sentence)
                const exampleEmbed2 = new Discord.MessageEmbed()
                .setColor('#ff0080')
                .setTitle("Done.")
                .setAuthor('Pika || Developer Commands.', 'https://cdn.discordapp.com/avatars/480813065701687306/49b1ce923f007cbbddc7452bbd260963.png?size=256', 'https://pika.coffee')
            message.channel.send(exampleEmbed2);
            message.react('✅');
        } else{
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ff0080')
            .setTitle("Error 1")
            .setAuthor('Pika || Developer Commands.', 'https://cdn.discordapp.com/avatars/480813065701687306/49b1ce923f007cbbddc7452bbd260963.png?size=256', 'https://pika.coffee')
        message.channel.send(exampleEmbed);
        message.react('❌');
        }
    }
}           
