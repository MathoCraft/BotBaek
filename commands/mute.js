const Discord = require("discord.js");
const client = new Discord.Client({
  fetchAllMembers: true,
disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
disableEveryone: true 
});
const moment = require("moment");
require("moment-duration-format");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you don't have permission to use this!") 
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.");
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!tomute) return message.reply("Couldn't find user.");
        if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("The user you are trying to mute is either the same, or higher role than you.");
        let muterole = message.guild.roles.find(`name`, "Muted");
        if (!muterole) {
            try {
                muterole = await message.guild.createRole({
                    name: "Muted",
                    color: "#000000",
                    permissions: []
                })
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
                });
            } catch (e) {
                console.log(e.stack);
            }
        }
    
        let mutetime = args[1];
        if (!mutetime) return message.reply("You didn't specify a time!");
        await (tomute.addRole(muterole.id));
        message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
        setTimeout(function() {
            tomute.removeRole(muterole.id);
            message.channel.send(`<@${tomute.id}> has been unmuted!`);
        }, ms(mutetime));
  message.delete().catch(O_o=>{}); 
}