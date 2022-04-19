const messages = require("../utils/messages");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  description: "API Ping",
  run: async (client, interaction) => {
    // If the member doesn't have enough permissions
    if (!interaction.member.permissions.has("SEND_MESSAGES")) {
      return interaction.reply({
        content:
          "<a:X_:959372562498981898> Bạn cần có perm quản lý tin nhắn để tạo giveaway",
        ephemeral: true,
      });
    }

    let circles = {
      green: "<:pnv_logoonline:959377428365594695>",
      yellow: "<:idle:903711513490112512> ",
      red: "<:dnd:903711513066487851>",
    };

    let botping = new MessageEmbed()
      .setTitle(`${client.user.username} Ping`)
      .setColor("2f3136")
      .addFields({
        name: "<a:Yping:959377722633773066> Bot Ping:",
        value: `${
          client.ws?.ping <= 200
            ? circles.green
            : client.ws?.ping <= 400
            ? circles.yellow
            : circles.red
        } ${client.ws?.ping}ms`,
      })
      .setTimestamp();
    await interaction.reply({ embeds: [botping] });
  },
};
