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
  name: "neko",
  description: "Get a image of a neko",
  run: async (client, interaction) => {
    axios.get('https://nekos.life/api/v2/img/neko').then((res) => {
        const embed = new MessageEmbed()
        .setImage(res.data.url)
        .setColor('BLUE')
        .setTimestamp()
        .setFooter('Random Neko')
        interaction.reply({ embeds: [embed] })
    })
  },
};
