const messages = require("../utils/messages");
const {
	MessageEmbed,
	MessageActionRow,
	MessageButton
} = require('discord.js');

module.exports = {
  name: "bug-report",
  description: "Bug Report",
  run: async (client, interaction) => {

    let invite = new MessageEmbed()
      .setAuthor(`Join support server and go to report channel to report bug`)
      .setColor("RANDOM")
      .setFooter(`Ayame Version 2`);

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setEmoji('<:950587571585564722:960017625449111663>')
				.setLabel(`Support Server`)
				.setURL(`https://discord.gg/YbHwQ42AHk`)
				.setStyle('LINK'),
			);

    await interaction.reply({ embeds: [invite],components: [row], ephemeral: true });
  },
};
