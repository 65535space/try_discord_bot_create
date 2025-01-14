// SlashCommandBuilderという部品をdiscord.jsからインポートしています
// これにより、スラッシュコマンドを簡単に構築できる
const { SlashCommandBuilder } = require('discord.js');

// 以下の形式にすることで、他のファイルでインポートして使用できるようになる
module.exports = {
    data: new SlashCommandBuilder()
        .setName('hey') //1~32文字で、使える文字は「小文字、大文字、スペース、-(ハイフン)、_（アンダースコア）のみ」
        .setDescription('あいさつに反応してbotが返事します'),
    execute: async function(interaction) {
        await interaction.reply('Fuck.');
    }
}