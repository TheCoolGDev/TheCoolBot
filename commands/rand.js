module.exports = {
  name: 'rand',
  description: "generates a random number",
  execute(message, args, Discord) {

    if (!args.length || !args[1]) {
      message.channel.send("You need to type in the min and max values like this \`.randnum 10 5\`")
    }

    else {

      let max = args[0]
      let min = args[1]

    let randNo = Math.round(Math.random() * max + min)

    const coolembed = new Discord.MessageEmbed()
    .setTitle("Your random number is: ")
    .setDescription(randNo)
    .setColor("YELLOW")
    .setFooter("Random Number Generator")
    .setTimestamp()

    message.reply(coolembed)

    }

  }
}
