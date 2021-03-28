const Discord = require('discord.js');
console.log("brew module has started")
setTimeout(function(){ 
    //Code
 }, 10000); //time in milliseconds
module.exports = {
    name: 'brew',
    description: 'beta command!',
    execute(message, args){
        if (!args.length) {
            return message.channel.send(`is that tea or coffee, ${message.author}?`);
        }
        else if (args[0] === 'tea') {
            return message.channel.send('Brewing tea...');
        }
        else if (args[0] === 'coffee') {
            return message.channel.send('Brewing coffee...');
        }
        else if (args[0] === 'deleteds-blood-from-bakery') {
            return message.channel.send("Brewing deleted' blood...");
        }
    }
}