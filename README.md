# フロントエンドカンファレンス2016 本サイト制作

http://kfug.github.io/frontconf2016 のソースコードです。

## インストール

必要なことは [nodejs](https://nodejs.org/en/) です。インストールした後はターミナルで`npm i`を読んでください。

## 運用フロー

````
$ npm run build
````

でサイトのダイナミックのコンテンツをコンパイルできます。
長い間の開発のために

````
$ npm start
````

ブラウザシンクの起動

````
$ npm run image
````

画像の圧縮・リサイズ

````
$ npm run deploy
````

デプロイ

## 更新作業

頻繁に切り替わる情報はjsonにて管理

speakers.js スピーカー情報

sponsors.js スポンサー情報

staffs.js スタッフ情報
