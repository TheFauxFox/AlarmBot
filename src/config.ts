import dotenv from 'dotenv';

dotenv.config();

const {DISCORD_TOKEN, DISCORD_APP_ID} = process.env;

if (!DISCORD_TOKEN ||!DISCORD_APP_ID) {
    throw new Error('Missing discord token or app id');
}

export const config = {
    DISCORD_TOKEN,
    DISCORD_APP_ID
}