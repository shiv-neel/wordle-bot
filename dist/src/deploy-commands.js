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
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
const fs = __importStar(require("fs"));
const commands = [];
const commandFiles = fs.readdirSync('C:/Users/shivn/Desktop/discord-bot/dist/src/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`C:/Users/shivn/Desktop/discord-bot/dist/src/commands/${file}`);
    commands.push(command.data.toJSON());
}
const rest = new rest_1.REST({ version: '9' }).setToken(config_json_1.BotToken);
rest.put(v9_1.Routes.applicationGuildCommands(config_json_1.ClientId, config_json_1.GuildId), { body: commands })
    .then(() => console.log(`Registered the following commands`))
    .catch(console.error);
//# sourceMappingURL=deploy-commands.js.map