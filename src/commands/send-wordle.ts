import { SlashCommandBuilder } from "@discordjs/builders"

module.exports = {
    data: new SlashCommandBuilder()
        .setName('send-wordle')
        .setDescription('sends server a link to todays wordle'),
    async execute(interaction: any) {
        await interaction.reply(`Compete in today's server wordle competition!\n**How to play:**\n1. Click the following link: https://www.nytimes.com/games/wordle/index.html\n2. Once you're done, click share\n3. Paste your result here\n4. Server-wide scoreboard will be announced at the end of the day!`)
    },
}