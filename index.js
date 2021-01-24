const Discord = require("discord.js");

const client = new Discord.Client();

const { Client, MessageAttachment } = require('discord.js');

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


client.on('message', async message =>{
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
        message.channel.send(`${message.author},`, attachment);
    } else if (command === 'bye'){
        const attachment = new MessageAttachment('https://i.imgur.com/wy3tilR.gif');
    // Send the attachment in the message channel
        message.channel.send(`${message.author},`, attachment);
    }  else if (command === 'no'){
        const attachment = new MessageAttachment('https://i.imgur.com/ODaI41V.gif');
    // Send the attachment in the message channel
        message.channel.send(`${message.author},`, attachment);
    }  else if (command === 'yes'){
        const attachment = new MessageAttachment('https://i.imgur.com/wD2FzDh.gif');
    // Send the attachment in the message channel
        message.channel.send(`${message.author},`, attachment);
    }  else if (command === 'Hello'){
        client.commands.get('hello').execute(message, args);
    }  else if (command === 'Hello'){
        client.commands.get('hello').execute(message, args);
    }  else if (command === 'poll'){
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('😲 New Poll! 😲')
        .setDescription(pollDescription)
        .setColor('YELLOW')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    }  else if (command === 'ask'){
        client.commands.get('qa').execute(message, args);
    } 
})

client.login(process.env.token)
//cool
