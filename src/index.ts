import { Client } from "discord.js";
import { commands, deployCommands } from "./commands";
import { config } from "./config";

const client = new Client({ intents: ["Guilds", "GuildMessages", "DirectMessageReactions", "DirectMessages"] });

client.once("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);
    deployCommands();
});

client.on("interactionCreate", async (interaction) => {
    console.log(interaction);
    if (!interaction.isChatInputCommand()) {
        return;
    }

    const { commandName } = interaction;
    const command = commands[commandName as keyof typeof commands];

    if (command) {
        command.execute(interaction);
    }
});

client.login(config.DISCORD_TOKEN);