const messages = require("../utils/messages");
const {
	MessageEmbed,
	MessageActionRow,
	MessageButton,
    Discord
} = require('discord.js');
const fs = require('fs');
const axios = require('axios');


module.exports = {
  name: "joke",
  description: "Joke",
  run: async (client, interaction) => {
    await interaction.deferReply();
    const url = 'https://some-random-api.ml/joke';
    const req = await axios.get(url);
    const data = req.data;
    interaction.editReply(data.joke);
  },
};
