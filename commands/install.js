module.exports = {
    name: 'install',
    description: "this is a install command!",
    execute(message, args){
         message.channel.send('Processing....');
         message.channel.send('This will take a few seconds....');
         message.channel.send('Checking requirements');
         message.channel.send('(At last)No🤣🤣...');
    }
}