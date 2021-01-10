module.exports = {
    name: 'banme',
    description: "this is a ban command!",
    execute(message, args){
         message.channel.send('Deleting Your messages');
         message.channel.send('Deleting your roles');
         message.channel.send('Ok you are banned...');
         message.channel.send('But in your dreams🤣😂');
    }
}