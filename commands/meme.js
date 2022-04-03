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
  name: "meme",
  description: "Meme",
  run: async (client, interaction) => {
    await interaction.deferReply();
		const url = 'https://meme-api.herokuapp.com/gimme';
		const req = await axios.get(url);
		const data = req.data;
		const row = new MessageActionRow().addComponents(
			new MessageButton().setLabel('Meme Link').setStyle('LINK').setURL(data.postLink),
		);
		interaction.editReply({ files: [data.url], components: [row] });
  },
};
