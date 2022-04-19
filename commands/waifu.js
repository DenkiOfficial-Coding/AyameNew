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
  description: "Random Waifu",
  run: async (client, interaction) => {
    axios.get('hhttps://api.waifu.pics/sfw/waifu').then((res) => {
        const embed = new MessageEmbed()
        .setImage(res.data.url)
        .setColor('BLUE')
        .setTimestamp()
        .setFooter('Random Waifu')
        interaction.reply({ embeds: [embed] })
      })
    
  },
};
