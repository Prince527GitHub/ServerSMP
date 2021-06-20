const { MessageEmbed, Message, Client } = require('discord.js');
const db = require('../../models/reaconDB');

module.exports = {
    name: 'autorole',
    category : 'moderation',
    usage: '[@role]',
    description : "Set the autorole for when a user join's your server they get a role.",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You need manage roles permission to use this command!');
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
        if(!role) return message.channel.send('Role is not valid!')
        await db.set(`autorole-${message.guild.id}`, role.id);
        message.reply(`${role.name} is the autorole!`)
    }
}