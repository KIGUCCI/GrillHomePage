// .envファイルの読み込み
require('dotenv').config();

// 環境変数からアプリケーションIDを取得
const applicationId = process.env.APPLICATION_ID;

// 環境変数を使ってリクエストを送信する関数
async function fetchConfig() {
  try {
    const response = await fetch('/config');  // サーバー上の/configエンドポイントにリクエストを送信
    const config = await response.json();     // レスポンスをJSON形式に変換
    console.log('Application ID:', config.applicationId);
  } catch (error) {
    console.error('エラー:', error);
  }
}

// fetchConfig関数を実行
fetchConfig();

// サーバーの起動
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
