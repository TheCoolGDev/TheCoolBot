module.exports = {
    name: 'avatar',
    description: "this is an avatar command!",
    execute(message, args){
        message.reply(message.author.displayAvatarURL());
    }
}