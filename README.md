# try_discord_bot_create
以下のサイトを参考にして学んだ</br>
https://www.geeklibrary.jp/counter-attack/discord-js-bot/#%25e3%2582%25b9%25e3%2583%25a9%25e3%2583%2583%25e3%2582%25b7%25e3%2583%25a5%25e3%2582%25b3%25e3%2583%259e%25e3%2583%25b3%25e3%2583%2589%25e3%2581%25ae%25e4%25bd%259c%25e6%2588%2590

実行手順
1. config.jsonをプロジェクトディレクトリの下に作る
config.jsonの内容
```json
{
    "applicationId": "xxxxxxxxxxxxxxxxx",
    "guildId": "xxxxxxxxxxxxxxx",
    "token": "xxxxxxxxxxxxxxxxxxxxxxxxx"
}
```
2. サーバーへbotを追加する方法</br>
https://discord.com/api/oauth2/authorize?client_id=ここにCLIENT_IDを貼り付け&permissions=0&scope=bot%20applications.commands

> [!NOTE]
> Discord.devのOAuthに書いてある

3. applicationIdの取得方法
discord.devのGeneral Informationタブから取得する

4. guildId（サーバーID）の取得方法
Discordの開発者モードをONにし、サーバーICONを右クリックし

5. tokenの取得方法
botタブから取得
tokenは一回しか見れないため、もし忘れたら再生成


気になったこと</br>
javascriptの文法系</br>
・分割代入</br>
・テンプレートリテラルがバッククォート（`）であること
・厳密等価演算子(===)
> オペランド同士が、型を変換することなく(上に示した通り)厳密に等しいならば真を返す


IT用語</br>
・エンドポイントネットワークの文脈:
1. ネットワークの文脈</br>
エンドポイントは、ネットワーク上で情報を送受信する物理デバイス (例: PC、スマホ) を指します。これは物理的な観点での定義です。
2. API の文脈</br>
エンドポイントは、特定の機能やリソースにアクセスするための URL を指します。これは API を利用する際の論理的な観点での定義です。

・REST（Representational State Transfer の略）</br>
リソース (データ) にアクセスして操作するための一連の設計原則やアーキテクチャスタイルを指す</br>
RESTful な API では、HTTP メソッド (GET、POST、PUT、DELETE など) を使い、リソースを操作できる