const { MessageEmbed, Message, Client } = require('discord.js');
const canvacord = require("canvacord");
const Levels = require('discord-xp');

module.exports = {
    name: 'leaderboard',
    aliases: ['lb'],
    category : 'XP',
    description : "Show who has the most xp/level on you're server.",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        //const offxp = await Client.dashboard.getVal(message.guild.id, "offxp");
        //if(offxp === "false") return message.reply("XP is disabled on this server!");
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
        if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");
        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard); 
        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);
        message.channel.send(`${lb.join("\n\n")}`);
    }
}