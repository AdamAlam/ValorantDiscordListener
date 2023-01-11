const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require("axios").default;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("get-my-skins")
    .setDescription("Gets the current skins for the user"),
  async execute(interaction) {
    const skinData = await getSkin(interaction.user.id);
    if (Object.keys(skinData).length > 0) {
      const toSend = new EmbedBuilder()
        .setAuthor({ name: "Valorant For Skins" })
        .setDescription(
          `[${skinData["0"].name}](${skinData["0"].link}) | [${skinData["1"].name}](${skinData["1"].link}) | [${skinData["2"].name}](${skinData["2"].link}) | [${skinData["3"].name}](${skinData["3"].link})`
        );
      await interaction.reply({ embeds: [toSend] });
    } else {
      await interaction.reply(
        `Your valorant information has not been registered. Send a DM to <@317148630542843919> to use this bot.`
      );
    }
  },
};

const getSkin = async (discordId) => {
  const data = await axios.get(`http://localhost:8080/${discordId}`);
  return data.data;
};
