const { Client, ChatInputCommandInteraction, PermissionsBitField, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "lock",
  description: "Lock The Channel",
  UserPerms: ["ManageChannels"],
  BotPerms: ["ManageChannels"],
  category: "Moderation",

  /**
   * @param {Client} client
   * @param {ChatInputCommandInteraction} interaction
   */
  run: async (client, interaction) => {

    const { user, channel } = interaction;

    if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) return interaction.editReply(`${user} you don't have permissions to use this command`)

    const everyone = interaction.guild.roles.cache.find(r => r.name === "@everyone")
    channel.permissionOverwrites.edit(everyone, { [PermissionsBitField.Flags.SendMessages]: false })
    interaction.reply(`Successfully locked the channel!`)

  },
};