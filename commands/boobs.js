const { MessageEmbed } = require('discord.js')
const nekoClient = require('nekos.life');
let neko = new nekoClient();



module.exports = {
  name: "boobs",
  description: "Test NSFW",
  run: async (client, interaction) => {
    if (!interaction.channel.nsfw) {
      return interaction.reply('This command only can be execute on nsfw channel!')
    }
    else {
      let img = (await neko.nsfw.boobs()).url;

        const embed = new MessageEmbed()
        .setColor('0x2F3136')
        .setImage(img)

        interaction.reply({ embeds: [embed] })
    }
  },
};
