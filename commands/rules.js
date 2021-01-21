module.exports = {
    name: 'rules',
    description: "this is a rule command!",
    execute(message, args){
        const rule = parseInt(args[0], 10);
        
        if (!rule || rule < 1 || rule > 5) return message.reply('please provide a rule number between 1 and 5.');
        
        if (rule) {
          if (rule === 1) return message.channel.send('This is our rule no. 1.');
          
          
        }
    }
}
