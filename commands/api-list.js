const messages = require("../utils/messages");
const {
	MessageEmbed,
	MessageActionRow,
	MessageButton
} = require('discord.js');

module.exports = {
  name: "api-list",
  description: "API List",
  run: async (client, interaction) => {

    let invite = new MessageEmbed()
      .setAuthor(`API List for Ayame Bot`)
      .setColor("RANDOM")
      .addField(
          `API List`,
          `[HuyAPI](https://www.npmjs.com/package/huyapi)
          [WAIFU.PICS](https://waifu.pics/docs)`
          )
      .setFooter(`Ayame Version 2`);

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setEmoji('<:950587571585564722:960017625449111663>')
				.setLabel(`Invite link of ${client.user.username}`)
				.setURL(`https://discord.com/api/oauth2/authorize?client_id=958701287493496902&permissions=8&scope=bot%20applications.commands`)
				.setStyle('LINK'),
			);

    await interaction.reply({ embeds: [invite],components: [row], ephemeral: true });
  },
};
