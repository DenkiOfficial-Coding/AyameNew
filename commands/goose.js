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
  name: "goose",
  description: "Get a image of a goose",
  run: async (client, interaction) => {
    axios.get('https://nekos.life/api/v2/img/goose').then((res) => {
        const embed = new MessageEmbed()
        .setImage(res.data.url)
        .setColor('BLUE')
        .setTimestamp()
        .setFooter('Random Goose')
        interaction.reply({ embeds: [embed] })
    })
  },
};
