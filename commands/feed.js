const messages = require("../utils/messages");
const {
	MessageEmbed,
	MessageActionRow,
	MessageButton,
  Discord
} = require('discord.js');
const fs = require('fs');
const axios = require('axios')


module.exports = {
  name: "feed",
  description: "Get a image of a feed",
  run: async (client, interaction) => {
    axios.get('https://nekos.life/api/v2/img/feed').then((res) => {
        const embed = new MessageEmbed()
        .setImage(res.data.url)
        .setColor('BLUE')
        .setTimestamp()
        .setFooter('Random Feed')
        interaction.reply({ embeds: [embed] })
    })
  },
};
