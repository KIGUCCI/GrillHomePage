'use strict';

require('dotenv').config();  // .envファイルの読み込み
const express = require('express');
const path = require('path');
const app = express();

// 静的ファイルの提供（publicフォルダを参照）
app.use(express.static(path.join(__dirname, 'public')));

// 環境変数をクライアントに提供するエンドポイントの定義
app.get('/config', (req, res) => {
  res.json({
    applicationId: process.env.APPLICATION_ID
  });
});

// ルートの定義
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // index.htmlを返す
});

// サーバーの起動
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
