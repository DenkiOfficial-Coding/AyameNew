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
  name: "foxgirl",
  description: "Get a image of a foxgirl",
  run: async (client, interaction) => {
    axios.get('https://nekos.life/api/v2/img/foxgirl').then((res) => {
        const embed = new MessageEmbed()
        .setImage(res.data.url)
        .setColor('BLUE')
        .setTimestamp()
        .setFooter('Random Foxgirl')
        interaction.reply({ embeds: [embed] })
    })
  },
};
