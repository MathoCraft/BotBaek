const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
    .setTitle("👤 Moderation")
    .addField("`" + message.prefix + "Ban`", "Ban a member.")
    .addField("`" + message.prefix +"Clear`", "Clear messages")
    .addField("`" + message.prefix +"Kick`", "Kick a member.")
    .addField("`" + message.prefix +"Mute`", "Temporarily mute a member.")
    .addField("`" + message.prefix +"Purge`", "Clears a member's messages.")
    .addField("`" + message.prefix +"Warn`", "Warn a member.")
    .addField("`" + message.prefix +"Clear`", "Clear Message.")
    .addField("`" + message.prefix +"Say`", "Default Say.")
    .addField("`" + message.prefix +"Saybd`", "Say Embed.")
    .addField("`" + message.prefix +"DM`", "Dm a Member.")
    .addField("`" + message.prefix +"Autorole`", "Autorole Command.")
    .addField("`" + message.prefix +"Autorole off`", "Turn Off Autorole")
    .setFooter("Require mod-log channel.")
message.channel.send(embed).then(msg => {msg.delete(15000)});
}