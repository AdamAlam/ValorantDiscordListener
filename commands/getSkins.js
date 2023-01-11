const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("get-skins")
    .setDescription("Gets the current skins for the user"),
  async execute(interaction) {
    await interaction.reply(hello());
  },
};

const hello = () => {
  return "hello";
};
