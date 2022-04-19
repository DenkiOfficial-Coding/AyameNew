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
  name: "megumin",
  description: "Random megumin",
  run: async (client, interaction) => {
    axios.get('hhttps://api.waifu.pics/sfw/megumin').then((res) => {
        const embed = new MessageEmbed()
        .setImage(res.data.url)
        .setColor('BLUE')
        .setTimestamp()
        .setFooter('Random megumin')
        interaction.reply({ embeds: [embed] })
      })
    
  },
};
