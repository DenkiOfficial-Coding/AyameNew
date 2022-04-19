const { MessageEmbed } = require('discord.js')
const HuyAPI = require("huyapi");
const image = new HuyAPI("i4ZJKBLGeLOU"); 

module.exports = {
    name: 'kiss',
    description: 'Random kiss',

    run: async (client, interaction) => {

        const data = await image.kiss()
        
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(`${data.url}`)
        .setTimestamp()
        .setFooter(`Shared by ${data.author}`)

        interaction.reply({ embeds: [embed] })
    }
}