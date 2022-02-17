import { SlashCommandBuilder } from "@discordjs/builders"

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('info about server'),
    async execute(interaction: any) {
        await interaction.reply(`Server name: ${interaction.guild?.name}\nTotal members: ${interaction.guild?.memberCount}`)
    },
}