const { MessageEmbed } = require('discord.js')
const nekoClient = require('nekos.life');
let neko = new nekoClient();

module.exports = {
    name: 'cat',
    description: 'Shows a random image of a cat!',

    run: async (client, interaction) => {

        let img = (await neko.sfw.meow()).url;

        const embed = new MessageEmbed()
        .setColor('0x2F3136')
        .setImage(img)

        interaction.reply({ embeds: [embed] })
    }
}