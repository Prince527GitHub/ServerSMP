const { MessageEmbed, Message, Client } = require('discord.js');

module.exports = {
    name: '', // name EX: command-toggle
    category : '', // category (folder name) EX: extra
    usage: '', // how to use it EX: [true|false]
    aliases : [], // aliases EX: ['ct','c-t']
    description : "", // description EX: toggle comannds
    userPermission: [], // the required user perms EX: ["MANANAGE_ROLES"]
    botPermission: [], // the required bot perms EX: ["MANANAGE_ROLES"]
    userPremium: , // is the command user premium EX: false
    guildPremium: , // is the command guild premium EX: false
    cooldown: , // cooldown for command (remove if not used) EX: 0
    owner: , // if command can only be used by owner EX: false

    /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
    */
    run: async(client, message, args) => {

    }
  }
