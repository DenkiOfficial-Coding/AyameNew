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
  name: "hug",
  description: "Get a image of a hug",
  run: async (client, interaction) => {
    axios.get('https://nekos.life/api/v2/img/hug').then((res) => {
        const embed = new MessageEmbed()
        .setImage(res.data.url)
        .setColor('BLUE')
        .setTimestamp()
        .setFooter('Random Hug')
        interaction.reply({ embeds: [embed] })
    })
  },
};
