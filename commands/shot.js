const { MessageEmbed } = require('discord.js')
const HuyAPI = require("huyapi");
const image = new HuyAPI("i4ZJKBLGeLOU"); 

module.exports = {
    name: 'shot',
    description: 'Random Shot',

    run: async (client, interaction) => {

        const data = await image.shot()
        
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(`${data.url}`)
        .setTimestamp()
        .setFooter(`Shared by ${data.author}`)

        interaction.reply({ embeds: [embed] })
    }
}