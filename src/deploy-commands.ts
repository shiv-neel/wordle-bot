import { ApplicationId, BotToken, ClientId, GuildId, PublicKey } from '../config.json'
import { SlashCommandBuilder } from '@discordjs/builders'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import * as fs from 'fs'

const commands: any[] = []
const commandFiles = fs.readdirSync('C:/Users/shivn/Desktop/discord-bot/dist/src/commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`C:/Users/shivn/Desktop/discord-bot/dist/src/commands/${file}`)
    commands.push(command.data.toJSON())
}

const rest = new REST({ version: '9' }).setToken(BotToken)

rest.put(Routes.applicationGuildCommands(ClientId, GuildId), { body: commands })
    .then(() => console.log(`Registered the following commands`))
    .catch(console.error)