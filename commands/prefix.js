const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("🚫 **| You don't have `MANAGE_GUILD` perms.**");
  if(!args[0]) return message.channel.send("Please specify something!")

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Customization")
  .setThumbnail(client.user.displayAvatarURL)
  .setColor("RANDOM")
  .addField(`Set to`, `\`${args[0]}\``);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}