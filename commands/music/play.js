const { Message, Client, MessageActionRow, MessageButton, MessageEmbed, MessageAttachment } = require("discord.js");
const DisTube = require('distube');

module.exports = {
    name: 'play',
    aliases : ['p'],
    usage: '[youtube video or playlist link | youtube video name]',
    description : "Play some music.",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(process.env.MUSIC === "false") return message.reply({ embeds: [
          new MessageEmbed()
            .setAuthor(`${client.user.username} will not be doing music anymore, please \`${client.prefix(message)}youtube\``)
            .setColor("BLUE")
        ]})
        if(!message.member.voice.channel) return message.channel.send({ embeds: [
          new MessageEmbed()
              .setDescription("Sorry, but you need to be in a voice channel to do that")
              .setColor("YELLOW")
        ]});
        let voiceChannel = message.guild.me.voice.channel
        if(voiceChannel) {
          if(voiceChannel.id && message.member.voice.channel.id !== voiceChannel.id) return message.channel.send({ embeds: [
            new MessageEmbed()
                .setDescription("You are not in my voice channel")
                .setColor("YELLOW")
          ]});
        }
        const text = args.join(" ");
        if(!text) return message.channel.send({ embeds: [
          new MessageEmbed()
              .setDescription(`Invalid usage, use **\`${await client.prefix(message)}help play\`** for more information`)
              .setColor("RED")
        ]});
        await client.player.play(message, text);
    },
};
