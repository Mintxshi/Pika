const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '>';
const fs = require ('fs');

client.commands = new Discord.Collection();

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ activity: { name: 'Code' }, status: 'dnd' });
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(client.commands.has(command)) {
        client.commands.get(command).execute(message, args);
    }
    
});

client.login('stinky bot token also heres a message, i didnt think this through and im new to node.js');
console.log("Index has loaded")

console.log("the cake is a lie")









































