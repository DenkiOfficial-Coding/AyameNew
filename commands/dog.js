const { MessageEmbed, CommandInteraction, Client } = require('discord.js')
const axios = require('axios');

module.exports = {
    name: 'dog',
    description: 'Sends a dog fact and an image!',

    run: async (client, interaction) => {
        const url = "https://some-random-api.ml/img/dog";
        const facts = "https://some-random-api.ml/facts/dog"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return interaction.editReply({ content: `An error occured, please try again!` })
        }

        const embed = new MessageEmbed()
        .setTitle(`Random Dog, Image, and Fact`)
        .setColor(`0x2F3136`)
        .setDescription(fact.fact)
        .setImage(image.link)

        interaction.reply({ 
            embeds: [embed]
        });
    }
}