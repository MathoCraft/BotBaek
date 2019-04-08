const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("🔱 Utilities")
.addField("`" + message.prefix +"Ascii`", "Generate ascii text.")
.addField("`" + message.prefix + "Avatar`", "Generate avatar of a member.")
.addField("`" + message.prefix +"Autonick`","Auto-complete a username.")
.addField("`" + message.prefix +"Autonick Off`", "Turn Off Autonick.")
.addField("`" + message.prefix +"Autonick On`", "Turn On Autonick.")
.addField("`" + message.prefix +"Autonick Previous`", "Show Autonick Previous")
.addField("`" + message.prefix + "Ping`", "Give latency and discord heartbeat.")
message.channel.send(embed).then(msg => {msg.delete(15000)});
}