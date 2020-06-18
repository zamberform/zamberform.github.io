---
layout: blog
title:  "開発用docker-compose"
date:   2020-06-06
category: [Cloud, Tool]
background-image: https://i1.wp.com/www.docker.com/blog/wp-content/uploads/2020/02/Compose.png?ssl=1
istop: true
key: "Cloud"

---


## 背景

一般的にサービスを開発する時が、幾つのものは欠かせないです。

- `RDB(MysqlやPostgres)`: 書き込みや読み込み時の速度はあんまり期待しないですが、関係性DBのため、データの保存や処理は優れています。
- `NoSql(RedisやMongo)` : Mongoは変な道に歩みましたが、今まで、RedisはKVSの機能として、書き込みや読み込み早いものです、キャッシュとして大活躍しています。
- `Proxy(HAProxyやNGinx)`: リクエスト来た時が処理はどうすべきかの重要な入り口です。

サービスを構築する時が必ず考えない行けないものですね。

さらに、Cloudサービス発達している今は、Dockerを使って、上記を含めて考える時代です。

でも、最初のdemoやローカル開発する時が、これら揃っていない、もしくは、自分テストのため、自分のものに接続したいとかあるでしょう。

ここで、個別に上記のものを作って、CLIやGUIで調整やDebugしやすいようにできるようになったら、便利ですよね。

[starの方お願いします](https://github.com/zamberform/dev-tools-with-docker)

---

## 紹介

### Mysql

こちらは `phpmyadmin `と一緒に作るによって、

`127.0.0.1:8080` で直接mysqlのデータ弄ることができた。

### Postgres

Mysqlと同様、`Postgres `には`Postgres GUI`と一緒にやると、なかなか楽にデータを弄れますね。

MysqlとPostgresどっちかを選ぶため、同じく `127.0.0.1:8080` にしています。

### Redis

Redisには `RedisCommander ` で調節しています。

多くはRDBと一緒に共同作業のため、`127.0.0.1:8081`にしています。 

### MongoDB

`MongoDB`は関係性みたいなデータを保存することができますが、速度や効率落ちるため、自分はあんまに使いたく無いので、`127.0.0.1:8081`にして、`Mongo-Express`で管理します。

### Minio

AWSのS3ローカル版として、幅広く使っていました。

pythonではboto3で直接使えるため、すごく便利かと思います。

こちらは、`minio`とCLIツールの`minio-support`一緒に使っています。

`minio`だけでもいいかと思って、S3みたいに、コマンドでアップロードするバッチとかあり得るため、CLI付けていました。

### Proxy

入れようと思ったけど、ネットワークの構成やDNSの具合によって、設定は結構バラバラになるかと思います。

こちらはおすすめになれるのは`HAProxy`です。

LBとして、素晴らしいです。

まだ、`NGINX`とかいうけど、LBとしての機能やロジックは`HAProxy`の方が選択肢多いですね。
`NGINX`はお主に、WEBの入り口として扱う方がいいかと思います。

原因は、NGINXは膨大化を避けるためです、dockerを使う前提として、役割をちゃんとわかるようになったら、ビジネスPRや構築の時、メリット大きいです。

---

## 最後

ローカルのdemoといい、サービスの初期開発やdebugといい、こちらのdocker-composeツールを使ったら、自分のdebug環境は好き放題やれます。

一つコツあります。

```
docker-compose up (-d)
```

上記のコマンドを使う人が多いと思いますが、

```
docker-compose -f [自分のdocker-compose yml ファイル] up (-d)
```

で起動できます。

もし良ければ、こちらにこちらの設定を打ち込んでもいいかとお勧めしたいです。

---