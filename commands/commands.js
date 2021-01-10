module.exports = {
    name: 'commands',
    description: "this is a commands command!",
    execute(message, args){
         message.channel.send('MyPrefix is .');
         message.channel.send('I am made by TheCoolDeveloper');
         message.channel.send('I am cool...');
         message.channel.send('My commands are: .banme,.install,.kick,.say,.vscodeisbad,.whatismyname,.whatismyavatar and there are more to be added');
         message.channel.send('At last, I am here to make you laugh...🤣😂');
    }
}