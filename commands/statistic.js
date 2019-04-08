const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("🎍 Statistics")
.addField("`" + message.prefix +"Uptime`", "Provides bot's statistics.")
.addField("`" + message.prefix +"Profile`", "Provide user statistics")
.addField("`" + message.prefix +"Serverinfo`", "Provide server statistics.")
message.channel.send(embed).then(msg => {msg.delete(15000)});
}