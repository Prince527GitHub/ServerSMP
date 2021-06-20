const Client = require('../index');
const { antijoin } = require('../collection/index');

Client.on("guildMemberAdd", async(member) => {
    const getCollection = antijoin.get(member.guild.id);
    if(!getCollection) return;
    if(!getCollection.includes(member.user)) {
        getCollection.push(member.user);
    }
    member.kick({ reason: "Antijoin was enabled" });
});