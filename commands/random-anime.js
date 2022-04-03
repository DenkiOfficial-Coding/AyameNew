const messages = require("../utils/messages");
const {
	MessageEmbed,
	MessageActionRow,
	MessageButton,
  Discord
} = require('discord.js');
const fs = require('fs');
const axios = require('axios');
const anime = require('random-anime')


module.exports = {
  name: "random-anime",
  description: "Get a image of a anime",
  run: async (client, interaction) => {
    if (!interaction.channel.nsfw) {
        return interaction.reply('This command only can be execute on nsfw channel!')
    } else {
        const embed = new MessageEmbed()
            .setImage(anime.nsfw())
            .setColor('BLUE')
            .setTimestamp()
            .setFooter('Random NSFW')

        interaction.reply({ embeds: [embed] })
    }
  },
};
