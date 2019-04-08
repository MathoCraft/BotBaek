const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("😂 Fun")
    .setTimestamp()
    .addField("`" + message.prefix +"8ball`", "Ask the magical 8ball a question.")
    .addField("`" + message.prefix +"Avatar`", "Get a member's avatar.")
    .addField("`" + message.prefix +"Dog`", "Get a random dog image.")
    .addField("`" + message.prefix +"Cat`", "Get random cat image.")
    .addField("`" + message.prefix +"Meme`", "Get a random meme.")
    .addField("`" + message.prefix +"Pig`", "Get a random meme.")
    .addField("`" + message.prefix +"Chameleon`", "Get a random Chameleon Image.")
    .addField("`" + message.prefix +"Joke`", "Get a random Joke.")
    .addField("`" + message.prefix +"Gif`", "Get a random GIF.")
    .addField("`" + message.prefix +"Quiz`", "Get Question.")
    .addField("`" + message.prefix +"Anime`", "Get Anime Info")
    .addField("`" + message.prefix +"Get`", "Get a Achievment.")
    message.channel.send(embed).then(msg => {msg.delete(15000)});
}