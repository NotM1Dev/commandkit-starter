module.exports = {
  /** @type {import("commandkit").CommandData} */
  data: {
    name: "ping",
    description: "Replies by saying pong",
  },

  /** @param {import("commandkit").SlashCommandProps} param0 */
  run: async ({ client, interaction, handler }) => {
    await interaction.reply("Pong!");
  },
};
