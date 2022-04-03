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
  name: "slap",
  description: "Get a image of a slap",
  run: async (client, interaction) => {
    axios.get('https://nekos.life/api/v2/img/slap').then((res) => {
        const embed = new MessageEmbed()
        .setImage(res.data.url)
        .setColor('BLUE')
        .setTimestamp()
        .setFooter('Random Slap')
        interaction.reply({ embeds: [embed] })
    })
  },
};
