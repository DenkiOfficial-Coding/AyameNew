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
  name: "classic",
  description: "Test NSFW",
  run: async (client, interaction) => {
    if (!interaction.channel.nsfw) {
      return interaction.reply('This command only can be execute on nsfw channel!')
    }
    else {
      axios.get('https://nekos.life/api/v2/img/classic').then((res) => {
        const embed = new MessageEmbed()
        .setImage(res.data.url)
        .setColor('BLUE')
        .setTimestamp()
        .setFooter('Random Classic')
        interaction.reply({ embeds: [embed] })
      })
    }
  },
};
