const ms = require('ms');
const messages = require("../utils/messages");

module.exports = {
    description: 'Bắt đầu giveaway',
    options: [
        {
            name: 'duration',
            description: 'Thời gian diễn ra',
            type: 'STRING',
            required: true
        },
        {
            name: 'winners',
            description: 'Số người trúng giải',
            type: 'INTEGER',
            required: true
        },
        {
            name: 'prize',
            description: 'Giải thưởng',
            type: 'STRING',
            required: true
        },
        {
            name: 'channel',
            description: 'Kênh',
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
        const giveawayDuration = interaction.options.getString('duration');
        const giveawayWinnerCount = interaction.options.getInteger('winners');
        const giveawayPrize = interaction.options.getString('prize');
        
        if(!giveawayChannel.isText()) {
            return interaction.reply({
                content: '<a:X_:959372562498981898> Không tìm thấy kênh',
                ephemeral: true
            });
        }
    
        // Start the giveaway
        client.giveawaysManager.start(giveawayChannel, {
            // The giveaway duration
            duration: ms(giveawayDuration),
            // The giveaway prize
            prize: giveawayPrize,
            // The giveaway winner count
            winnerCount: giveawayWinnerCount,
            // Who hosts this giveaway
            hostedBy: client.config.hostedBy ? interaction.user : null,
            // Messages
            messages
        });
    
        //interaction.reply(`Giveaway started in ${giveawayChannel}!`);
    
    } 

};