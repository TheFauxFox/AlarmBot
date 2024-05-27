import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!")

export async function execute(interaction: CommandInteraction) {
    return interaction.reply({"content": `Pong! in: \`${(Date.now() - interaction.createdTimestamp)}ms\``, ephemeral: true});
}