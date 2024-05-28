import {
  CommandInteraction,
  SlashCommandBuilder,
  SlashCommandStringOption,
} from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("setalarm")
  .setDescription("Sets an alarm")
  .addStringOption((option) =>
    option
      .setName("in")
      .setDescription("The time from now to set the alarm - Format: 1w2d3h4m5s")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("note")
      .setDescription("Any information to be reminded of at time of alarm")
  );

export async function execute(interaction: CommandInteraction) {
  interaction.reply({
    embeds: [
      {
        title: `Alarm set for ${interaction.options.get("in")?.value}`,
      },
    ],
    ephemeral: true,
  });
  return interaction.user.send({
    embeds: [
      {
        title: `Alarm set for ${interaction.options.get("in")?.value}`,
      },
    ],
  });
}
