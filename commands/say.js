module.exports = {
    name: 'say',
    description: "this is a say command!",
    execute(message, args){
         message.channel.send('No');
         message.channel.send('Sorry');
         message.channel.send('I will not say🤣🤣...');
    }
}