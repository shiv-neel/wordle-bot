"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = require("../config.json");
const discord_js_1 = require("discord.js");
const fs = __importStar(require("fs"));
require('dotenv').config();
const client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES, discord_js_1.Intents.FLAGS.GUILD_MEMBERS] });
client.commands = new discord_js_1.Collection();
const commandFiles = fs.readdirSync('C:/Users/shivn/Desktop/discord-bot/dist/src/commands').filter(file => file.endsWith('.js'));
console.log(commandFiles);
for (const file of commandFiles) {
    const command = require(`C:/Users/shivn/Desktop/discord-bot/dist/src/commands/${file}`);
    client.commands.set(command.data.name, command);
}
client.once('ready', () => {
    console.log('Ready!');
});
console.log(client.commands);
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand())
        return;
    const command = client.commands.get(interaction.commandName);
    console.log(command);
    if (!command)
        return;
    try {
        await command.execute(interaction);
    }
    catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});
console.log('updated!');
client.login(config_json_1.BotToken);
//# sourceMappingURL=index.js.map