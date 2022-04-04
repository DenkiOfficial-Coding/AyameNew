const messages = require("../utils/messages");
const {
	MessageEmbed,
	MessageActionRow,
	MessageButton
} = require('discord.js');

module.exports = {
  name: "help",
  description: "Commands List",
  run: async (client, interaction) => {

    let helpembed = new MessageEmbed()
    helpembed.setColor("RANDOM")
      helpembed.setAuthor({ name: `Commands of ${client.user.username}`, iconURL: client.user.avatarURL() })
      helpembed.setColor("#2f3136")
      helpembed.setThumbnail("https://cdn.discordapp.com/attachments/956850904311664673/960016245208514560/ayame.gif")
      helpembed.addField(
        `<a:cmc_bonk:949563152398426132> <a:cmc_muiten:949219236004388884> **COMMANDS LIST** <a:SU_muiten2:960076330865680414> <a:cmc_bonk:949563152398426132>`,
        `${client.commands.map(c => `${c.name}`).join("\n")}`,
      );
      helpembed.setFooter({text: `Ayame Version 2`});

      const row = new MessageActionRow().addComponents(
				new MessageButton()
				.setEmoji('<:950587571585564722:960017625449111663>')
				.setLabel(`Mời ${client.user.username}`)
				.setURL(`https://discord.com/api/oauth2/authorize?client_id=958701287493496902&permissions=8&scope=bot%20applications.commands`)
				.setStyle('LINK'),
			);

      

    await interaction.reply({ embeds: [helpembed],components: [row], ephemeral: true });
  },
};
