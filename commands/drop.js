const messages = require("../utils/messages");

module.exports = {
    description: 'Create Fast Giveaway',
    options: [
        {
            name: 'winners',
            description: 'Giveaway Winner',
            type: 'INTEGER',
            required: true
        },
        {
            name: 'prize',
            description: 'Giveaway Prize',
            type: 'STRING',
            required: true
        },
        {
            name: 'channel',
            description: 'Giveaway Channel',
            type: 'CHANNEL',
            required: true
        }
    ],

    run: async (client, interaction) => {
        // If the member doesn't have enough permissions
        if(!interaction.member.permissions.has('MANAGE_MESSAGES') && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")){
            return interaction.reply({
                content: '<a:X_:959372562498981898> Bạn cần có perm quản lý tin nhắn để tạo giveaway',
                ephemeral: true
            });
        }
        const giveawayChannel = interaction.options.getChannel('channel');
        const giveawayWinnerCount = interaction.options.getInteger('winners');
        const giveawayPrize = interaction.options.getString('prize');
    
        if(!giveawayChannel.isText()) {
            return interaction.reply({
                content: '<a:X_:959372562498981898> Không tìm thấy kênh',
                ephemeral: true
            });
        }

        client.giveawaysManager.start(giveawayChannel, {
            winnerCount: giveawayWinnerCount,
            prize: giveawayPrize,
            hostedBy: client.config.hostedBy ? interaction.user : null,
            isDrop: true,
            messages
        });
    
        //interaction.reply(`Giveaway started in ${giveawayChannel}!`);

    }
};