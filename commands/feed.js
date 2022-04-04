const messages = require("../utils/messages");
const {
	MessageEmbed,
	MessageActionRow,
	MessageButton,
  Discord
} = require('discord.js');
const fs = require('fs');
const nekoClient = require('nekos.life');
let neko = new nekoClient();
const axios = require('axios')


module.exports = {
  name: "feed",
  description: "Get a image of a feed",
  run: async (client, interaction) => {
    let img = (await neko.sfw.feed()).url;

        const embed = new MessageEmbed()
        .setColor('0x2F3136')
        .setImage(img)

        interaction.reply({ embeds: [embed] })
  },
};
