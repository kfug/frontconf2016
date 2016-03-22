# フロントエンドカンファレンス2016 本サイト制作

修正に関する希望等はissue または [Facebookページ](https://www.facebook.com/frontconf2016/) などでも承っております。


## 運用フロー

````
$ gulp
````

ejsのwatch コンパイル

````
$ gulp bsync
````

ブラウザシンクの起動

````
$ gulp image
````

画像の圧縮・リサイズ

````
$ make deploy
````

デプロイ

## 更新作業

頻繁に切り替わる情報はjsonにて管理

- speakers.js スピーカー情報

- sponsors.js スポンサー情報

- handson.js ハンズオン情報

- staffs.js スタッフ情報

- partyover.js 開催後記