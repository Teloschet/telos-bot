const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Você não tem permissão!");
    if(args.length === 0) return message.reply("utilize !ban <@usuário> <motivo>");
    let banMember = message
}