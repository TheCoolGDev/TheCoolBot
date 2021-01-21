module.exports = {
    name: 'pinged',
    description: "this is a real ping command!",
    execute(message, args){
        message.author.reply('Finding bots ping...').then(msg => {
                const ping = msg.createdTimestamp - message.createdTimestamp;
                msg.edit(`TheCoolBot's ping is ${ping}`);
        })
   }
}
