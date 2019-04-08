const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
    .setTitle("Music")
    .setDescription("There are currently 8 commands in this category.\n`The default prefix will remain.`")
    .addField("`" + message.prefix +"Play`", "Play url or search a video on youtube.")
    .addField("`" + message.prefix +"Np`", "Shows what is playing right now.")
    .addField("`" + message.prefix +"Stop`", "Stop the currently playing song.")
    .addField("`" + message.prefix +"Queue`", "Shows the queue.")
    .addField("`" + message.prefix +"Skip`", "Skips the currently playing song.")
    .addField("`" + message.prefix +"Volume`", "Set the volume of the song.")
    .addField("`" + message.prefix +"Resume`", "Resume the paused song.")
message.channel.send(embed).then(msg => {msg.delete(15000)});
}
