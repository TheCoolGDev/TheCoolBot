const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once("ready", () =>{
    console.log('CoolBot is online!');
    client.user.setActivity('TheCoolDevServer', { type: "WATCHING" }).catch(console.error);
})


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    

    if(command === 'kick'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'install'){
        client.commands.get('install').execute(message, args);    
    } else if (command === 'banme'){
        client.commands.get('banme').execute(message, args);
    } else if (command === 'yourinfo'){
        client.commands.get('commands').execute(message, args);
    } else if (command === 'say'){
        client.commands.get('say').execute(message, args);
    } else if (command === 'vscodeisbad'){
        client.commands.get('vscode').execute(message, args);
    } else if (command === 'whatismyname'){
        client.commands.get('name').execute(message, args);
    } else if (command === 'whatismyavatar'){
        client.commands.get('avatar').execute(message, args);
    } else if (command === 'servers'){
        let serverlist = ''
        client.guilds.cache.forEach((guild) => {
            serverlist = serverlist.concat(" - " + guild.name)
        })
    
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Servers that have TheCoolBot™", '')
        .setDescription(serverlist)
        message.channel.send({embed});

     
    } else if (command === 'ping'){
        client.commands.get('pinged').execute(message, args);
    } else if (command === 'rule'){
        client.commands.get('rules').execute(message, args);
    } else if (command === 'discord'){
        const attachment = new MessageAttachment('https://i.imgur.com/ZOKp8LH.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
    }    

    
  }
})

client.login(process.env.token)

