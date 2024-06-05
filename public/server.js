'use strict';

import('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

// 静的ファイルの提供（public フォルダを参照せず、ファイルの実際の場所を指定）
app.use(express.static(path.join(__dirname, 'public')));

// ルートの定義
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // index.htmlを返す
});

// サーバーの起動
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


