module.exports = {
    name: 'rules',
    description: "this is a rule command!",
    execute(message, args){
        const rule = parseInt(args[0], 10);
        
        if (!rule || rule < 1 || rule > 5) return message.reply('please provide a rule number between 1 and 5.');
        
        if (rule) {
          if (rule === 1) return message.channel.send('We DO NOT tolerate any form of harassment, offensive language, threats, spam, personal attacks, racism, sexual content or anything else that does not follow the Discord community guidelines or TOS.');
          
          
        }
    }
}
