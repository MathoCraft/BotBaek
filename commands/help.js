const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("Categories")
    .setAuthor("58 Commands", bot.user.displayAvatarURL)
    .addField("»Moderation 🔧", "`" + message.prefix + "Moderator`", true)
    .addField("»Comming Soon :no_entry_sign:", "`" + message.prefix + "CommingSoon`", true)
    .addField("»Music 🎧", "`" + message.prefix + "Music`", true)
    .addField("»NSFW 💎", "`" + message.prefix + "Nsfw`", true)
    .addField("»Core 📡", "`" + message.prefix + "Core`", true)
    .addField("»Utils 🔮", "`" + message.prefix + "Utils`", true)
    .addField("»Fun 💣", "`" + message.prefix + "Fun`", true)
    .addField("»Statistics 🔌", "`" + message.prefix + "Statistics`", true)
    .addField("»Developer 🔑", "`" + message.prefix + "Dev`", true)
  .setFooter("This bot was made by MathoCraft Development in 2019")
    message.channel.send(embed);
}