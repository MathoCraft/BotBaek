const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("NSFW")
.setDescription("There are currently 5 commands in this category.")
.addField("`" + message.prefix +"Hentai`", "Get random hentai image.")
.addField("`" + message.prefix +"Ecchi`", "Get random ecchi image.")
.addField("`" + message.prefix +"Neko`", "Get random neko image.")
.addField("`" + message.prefix +"Boobs`", "Get random boobs image.")
.addField("`" + message.prefix +"Ass`", "Get random ass image.")
message.channel.send(embed).then(msg => {msg.delete(15000)});
}