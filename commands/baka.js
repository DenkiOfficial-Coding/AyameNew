const { MessageEmbed } = require('discord.js')
const nekoClient = require('nekos.life');
let neko = new nekoClient();

module.exports = {
    name: 'baka',
    description: 'Shows a random image of baka!',

    run: async (client, interaction) => {

        let img = (await neko.sfw.baka()).url;

        const embed = new MessageEmbed()
        .setColor('0x2F3136')
        .setImage(img)

        interaction.reply({ embeds: [embed] })
    }
}