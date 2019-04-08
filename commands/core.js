const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Core")
    .setDescription("There are currently 6 commands in this category.")
    .addField("`" + message.prefix +"Help`", "Provides a list of available commands.")
    .addField("`" + message.prefix +"Info`", "Provide information about the bot.")
    .addField("`" + message.prefix +"Bugreport`", "Report a bug.")
    .addField("`" + message.prefix +"Prefix`", "Change bot prefix.`[Default Prefix -]`")
    .addField("`" + message.prefix +"Botinfo`", "Info Bot Same Like Info")
    .addField("`" + message.prefix +"Invite`", "Invite Bot To Your Server")
    message.channel.send(embed).then(msg => {msg.delete(15000)});
}