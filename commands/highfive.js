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
  name: "highfive",
  description: "Random highfive",
  run: async (client, interaction) => {
    axios.get('hhttps://api.waifu.pics/sfw/highfive').then((res) => {
        const embed = new MessageEmbed()
        .setImage(res.data.url)
        .setColor('BLUE')
        .setTimestamp()
        .setFooter('Random highfive')
        interaction.reply({ embeds: [embed] })
      })
    
  },
};
