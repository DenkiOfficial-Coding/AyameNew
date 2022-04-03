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
  name: "waifu",
  description: "Get a image of a waifu",
  run: async (client, interaction) => {
    axios.get('https://nekos.life/api/v2/img/waifu').then((res) => {
        const embed = new MessageEmbed()
        .setImage(res.data.url)
        .setColor('BLUE')
        .setTimestamp()
        .setFooter('Random Waifu')
        interaction.reply({ embeds: [embed] })
    })
  },
};
