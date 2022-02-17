import { SlashCommandBuilder } from "@discordjs/builders"

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('info about current user'),
    async execute(interaction: any) {
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`)
    },
}