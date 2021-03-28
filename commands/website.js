console.log("website module has started")

module.exports = {
    name: 'website',
    description: "Sends the owner's website.",
    execute(message, args){
        message.channel.send('https://pika.coffee')
    }
}