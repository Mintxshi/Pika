const Discord = require('discord.js');
console.log("intro module has started")
module.exports = {
    name: 'introduction',
    description: 'Introduce!',
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ba8249')
            .setTitle('My introduction!')
            .setAuthor('Pika || Introduction', 'https://cdn.discordapp.com/avatars/480813065701687306/49b1ce923f007cbbddc7452bbd260963.png?size=256', 'https://pika.coffee')
            .setDescription("Salutations, hello. My name is Pika. I am open sourced (Soon:TM:). It's a pleasure to help you. You can invite me by using >invite. WE'RE IN BETA!!")
        message.channel.send(exampleEmbed);
    }
}