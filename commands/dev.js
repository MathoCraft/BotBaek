const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
.setTitle("🙇 Developer")
.addField("`" + message.prefix +"Eval`", "Execute a JavaScript string.")
.addField("`" + message.prefix +"Restart`","Restart the bot")
.addField("`" + message.prefix +"Reload`","Reload all commands.")
message.channel.send(embed).then(msg => {msg.delete(15000)});
}
