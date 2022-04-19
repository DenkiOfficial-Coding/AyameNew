const { MessageEmbed } = require('discord.js')
const HuyAPI = require("huyapi");
const image = new HuyAPI("i4ZJKBLGeLOU"); 

module.exports = {
    name: 'dog',
    description: 'Random Dog',

    run: async (client, interaction) => {

        const data = await image.dog()
        
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(`${data.url}`)
        .setTimestamp()
        .setFooter(`Shared by ${data.author}`)

        interaction.reply({ embeds: [embed] })
    }
}