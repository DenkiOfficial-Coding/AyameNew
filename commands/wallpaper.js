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
  name: "wallpaper",
  description: "Get a image of a wallpaper",
  run: async (client, interaction) => {
    axios.get('https://nekos.life/api/v2/img/wallpaper').then((res) => {
        const embed = new MessageEmbed()
        .setImage(res.data.url)
        .setColor('BLUE')
        .setTimestamp()
        .setFooter('Random Wallpaper')
        interaction.reply({ embeds: [embed] })
    })
  },
};
