module.exports = {
    name: 'rules',
    description: "this is a rule command!",
    execute(message, args){
        const rule = parseInt(args[0], 10);
        
        if (!rule || rule < 1 || rule > 6) return message.reply('please provide a rule number between 1 and 6.');
        
        if (rule) {
          const adChannel = message.guilds.channels.find(ch => ch.name.includes('🎫┃advertise'));
            
          if (rule === 1) return message.channel.send('We DO NOT tolerate any form of harassment, offensive language, threats, spam, personal attacks, racism, sexual content or anything else that does not follow the Discord community guidelines or TOS.');
          
          if (rule === 2) return message.channel.send('The developers are extremely busy, so please don’t spam/ping them. If you need help, please ping the admins instead so that you can get help.');
            
          if (rule === 3) return message.channel.send(`Self promotion of content should be done in the ${adChannel}!`);

          if (rule === 4) return message.channel.send('Don’t jump channels and annoy people, and don’t use voice changers. Be yourself. Also remember to use a channel suited to your needs.');
            
          if (rule === 5) return message.channel.send('This server does not allow the distribution of illegal/pirated software or any information to this. If you post anything involving these, we will remove this ASAP and you will be dealt with the moderators');

          if (rule === 6) return message.channel.send('This is a game development based server so if you have any questions you can ask others who are online. You can ask the admins ,too(if they are online).');
            
                                                      
        }
    }
}
