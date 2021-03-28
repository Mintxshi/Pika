const Discord = require('discord.js');
console.log("invite module has started")

module.exports = {
    name: 'invite',
    description: 'invite for the bot.',
    execute(message, args){
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ba8249')
            .setTitle('Click here for the invite.')
            .setURL('https://discord.com/oauth2/authorize?client_id=505929598224302099&permissions=8&scope=bot')
            .setAuthor('Pika || Invite', 'https://cdn.discordapp.com/avatars/480813065701687306/49b1ce923f007cbbddc7452bbd260963.png?size=256', 'https://pika.coffee')
            .setDescription('Invite for the bot')
        message.channel.send(exampleEmbed);
    }
}