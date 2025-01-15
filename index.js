// hey.jsのmodule.exportsを呼び出す
import { data, execute } from './commands/hey.js';

// discord.jsライブラリの中から必要な設定を呼び出す。
import { Client, Events, GatewayIntentBits } from 'discord.js';

// 設定ファイルからトークン情報を呼び出し、変数に保存します
// JSONファイルの読み込みにはassertメソッドを使わないといけない
import config from './config.json' with { type: 'json' };
const { token } = config;

// クライアントインスタンスと呼ばれるオブジェクトを作成する
const client = new Client({ intents: [GatewayIntentBits.Guilds]});


// クライアントオブジェクトが準備OKとなったとき一度だけ実行される
client.once(Events.ClientReady, c => {
    console.log(`準備OKです! ${c.user.tag} がログインします`);
});


//スラッシュコマンドに応答するには、interactionCreateeのイベントリスナーを使う必要がある
client.on(Events.InteractionCreate, async interaction => {

    // スラッシュ以外のコマンドの場合は対象外なので早期リターンさせて終了する
    // コマンドにスラッシュが使われているかどうかはisChatInputCommand()で判断している
    if (!interaction.isChatInputCommand()) return;

    // heyコマンドに対する処理
    if (interaction.commandName === data.name){
        try {
            await execute(interaction);
        } catch (error){
            console.error(error);
            if(interaction.replied || interaction.deferred){
                await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true});
            } else {
                await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true});
            }
        }
    } else {
        console.error(`${interaction.commandName}というコマンドには対応していません。`);
    }
});

// ログインする
client.login(token);