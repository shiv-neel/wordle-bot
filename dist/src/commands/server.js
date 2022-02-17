"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
module.exports = {
    data: new builders_1.SlashCommandBuilder()
        .setName('server')
        .setDescription('info about server'),
    async execute(interaction) {
        var _a, _b;
        await interaction.reply(`Server name: ${(_a = interaction.guild) === null || _a === void 0 ? void 0 : _a.name}\nTotal members: ${(_b = interaction.guild) === null || _b === void 0 ? void 0 : _b.memberCount}`);
    },
};
//# sourceMappingURL=server.js.map