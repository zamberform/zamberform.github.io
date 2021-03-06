---
layout: blog
title:  "GCPのお試し"
date:   2018-05-28
category: GCP
background-image: https://redislabs.com/wp-content/images/partners/gcp.png
istop: true
key: "GCP"

---

# GCP紹介

GCPとはGoogle Cloud Platformの略称です。一言だと、GCPが、たくさんのインフラサービスを提供しています。

# GAE

GCPの中にとあるサービスがGoogle App Engineと呼ぶ。自分で開発したサービスを乗せてくれるクラウドです、結構安定的なインフラとして認識した方がいいかと思います。

アクセス数が一定数に超えないと、課金しませんという宣言した見たいなので、色々試せることができます。

まだ、特定な方法だと、課金を有効に設定しないといけない仕様もあるので、確認する必要があります。

## サポート言語

私は今までサーバーがJavaでメインでやったので、GAEのドキュメントとチュートリアルでやって、現状は自分判断でJavaに優しい環境かなぁと思います。

Javaの場合、Mavenでビルドをコントロールしているため、Intellijで最初からMavenでやる方がいいのか、Gladeで変換するのも一つの方法かと思います。

まだ、Pythonが2のバージョンで無料に使えますが、python3ならば、インスタンス数を設定しないといけないので、課金を有効しないといけません。一応、[Herokuでpython3で開発したものをリリースしました](https://super-tools.herokuapp.com/)が、やっぱり利用人数が少なくなると、サーバーを停止状態になっていますね、宣伝しないといけないかもしれない。

Python2なので、靜的なHTMLか、簡単なFlaskを配信することができるじゃないかと思います。

ドキュメントから見るとWWWのフォルダを作る手順があり、それが、apacheやngnixなど設定していると同じように感じがします。

まぁ、これと組み合わせして、自作アプリのホームページなど無料でできますから、ありがたいなぁ、googleさま。

[自作のアプリホームページ1](https://tasksdeadline.appspot.com/)
[自作のアプリホームページ2](https://rssfeedmaster.appspot.com/)
[自作のアプリホームページ3](https://multibankfx-30a0f.appspot.com/)

## ストレージ

保存はサービスの中心と思います、ユーザーの情報を保存しないと、サービスが長く続けないだろうと。

そんなGCPが色なストレージの方法を提供しているようです。

Cloud DatastoreはGAEで一押しですが、まだRedis、Memcacheもある。

下記紹介したGKEで自作のRedisも作れるですが、経済的になるのはGKEじゃないかと思います。

# GKE

GCPの中にとあるサービスがGoogle Kubernetes Engineと呼ぶ。いわゆる、インフラになります。

Kubernetesはコンテナを使ったシステムのライフサイクルを管理するオープンソースです。

私はDocker好きですので、Kubernetesがコンテナとの組み合わせ絶妙なので、Docker最高という気持ちいが溢れてくる。

すごく参考になった記事がありますので、[一緒に参考しましょう。](https://qiita.com/ntoreg/items/74aa6de2f8f29b4a3b79)

コンテナ管理が便利で、自分の頑張る目標を置こうと思います。

## GKEやる順番

Projectを作成(プロジェクトないと、管理できない)

↓

コンピューティング ゾーン(サーバーがどこで置く、サービスの場所と関係ある)

↓

GKEクラスタ作成(仮想マシンを作る)

↓


開発済みのImageなどをContainerとしてデプロイ

(yamlファイルで定義したもの、最小単位PODになる)

*一番手間かかるところ、サービスのコア部分なので、テストなどもしっかりやらないといけません、限定公開も一つの方法かと進めます。

↓

公開

* GKEの中に、PODという存在を定義されていて、Dockerでコンテナを管理すると同じと思います。コンテナを一覧したり、コントロールすることができます。


# 結論

インフラが奥深いの世の中、GCPが簡単に誰でもサービス配信できるクラウドを作り上がった、結構便利さを実感します。

GCP上のバージョン管理がGitかSVNかはわからないけど、バージョンについて、ドキュメントをちゃんと読まないといけないと思います。

無料トライアルで３００ドルを配布なので、自分のやる気が満々です。
サーバーに対しては中途半端な私でもうまく開発と運営できる自信があるようにできました、今後はGCPの色々をいじりたいと考えています。

