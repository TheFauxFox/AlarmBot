import { REST, Routes } from "discord.js";
import { config } from "../config";
import * as ping from "./ping";
import * as setalarm from "./setalarm";

export const commands = {
    ping,
    setalarm,
}


const commandsData = Object.values(commands).map((command) => command.data);

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

export async function deployCommands() {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationCommands(config.DISCORD_APP_ID),
      {
        body: commandsData,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}