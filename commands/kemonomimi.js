const messages = require("../utils/messages");
const {
	MessageEmbed,
	MessageActionRow,
	MessageButton,
  Discord
} = require('discord.js');
const fs = require('fs');
const axios = require('axios')
const nekoClient = require('nekos.life');
let neko = new nekoClient();

module.exports = {
  name: "kemonomimi",
  description: "Test NSFW",
  run: async (client, interaction) => {
    let img = (await neko.sfw.kemonomimi()).url;

    const embed = new MessageEmbed()
    .setColor('0x2F3136')
    .setImage(img)

    interaction.reply({ embeds: [embed] })
    
  },
};
