module.exports = {
    
    name: "reroll",
    description: 'Reroll giveaway',

    options: [
        {
            name: 'giveaway',
            description: 'Reroll giveaway',
            type: 'STRING',
            required: true
        }
    ],
    
    run: async (client, interaction) => {

        // If the member doesn't have enough permissions
        if(!interaction.member.permissions.has('MANAGE_MESSAGES') && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")){
            return interaction.reply({
                content: '<a:X_:959372562498981898> You need manage message to manage giveaway',
                ephemeral: true
            });
        }

        const query = interaction.options.getString('giveaway');

        // try to found the giveaway with prize then with ID
        const giveaway = 
            // Search with giveaway prize
            client.giveawaysManager.giveaways.find((g) => g.prize === query && g.guildId === interaction.guild.id) ||
            // Search with giveaway ID
            client.giveawaysManager.giveaways.find((g) => g.messageId === query && g.guildId === interaction.guild.id);

        // If no giveaway was found
        if (!giveaway) {
            return interaction.reply({
                content: 'Didnt find giveaway of `'+ query +'`.',
                ephemeral: true
            });
        }

        if (!giveaway.ended) {
            return interaction.reply({
                content: 'Giveaway is not end',
                ephemeral: true
            });
        }

        // Reroll the giveaway
        client.giveawaysManager.reroll(giveaway.messageId)
        .then(() => {
            // Success message
            interaction.reply('Giveaway rerolled!');
        })
        .catch((e) => {
            interaction.reply({
                content: e,
                ephemeral: true
            });
        });

    }
};