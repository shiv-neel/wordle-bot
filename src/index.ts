import { ApplicationId, BotToken, ClientId, GuildId, PublicKey } from '../config.json'
import { SlashCommandBuilder } from '@discordjs/builders'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { Client, Collection, Intents } from 'discord.js'
import * as fs from 'fs'
require('dotenv').config()

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] })
client.commands = new Collection()
const commandFiles = fs.readdirSync('C:/Users/shivn/Desktop/discord-bot/dist/src/commands').filter(file => file.endsWith('.js'))
console.log(commandFiles)
for (const file of commandFiles) {
    const command = require(`C:/Users/shivn/Desktop/discord-bot/dist/src/commands/${file}`)
    client.commands.set(command.data.name, command)
}


client.once('ready', () => {
    console.log('Ready!')
})
console.log(client.commands)

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return
    const command = client.commands.get(interaction.commandName)
    console.log(command)
    if (!command) return

    try {
        await command.execute(interaction)
    } catch (error) {
        console.error(error)
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
    }
})

console.log('updated!')
client.login(BotToken)