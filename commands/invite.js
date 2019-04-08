const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
.setTitle('want to invite this bot to your server? :robot:')
.addField('Link','[Click Here](https://discordapp.com/api/oauth2/authorize?client_id=556115275070701568&permissions=8&scope=bot)', true)
.setColor("#ec0000")
.setFooter('©Release | By: MathoCraft | 2019')
message.channel.send({embed})
}