const Discord = require("discord.js");
const client = new Discord.Client({
  fetchAllMembers: true,
disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
disableEveryone: true 
});
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {
const deleteCount = parseInt(args[0], 10);
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you don't have permission to use this!") 
if(!deleteCount || deleteCount < 2 || deleteCount > 100)
 return message.reply("Please provide a number between 2 and 100 for the number of messages to be deleted");
const fetched = await message.channel.fetchMessages({limit: deleteCount});
message.channel.bulkDelete(fetched)
.catch(error => message.reply(`Tidak dapat menghapus pesan karena: ${error}`));
}