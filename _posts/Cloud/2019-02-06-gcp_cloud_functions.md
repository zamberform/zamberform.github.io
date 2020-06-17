---
layout: blog
title:  "GCPのCloud Functionsお試し"
date:   2019-02-06
category: Cloud
background-image: https://cloud.google.com/images/functions/functions-video-thumbnail.png?hl=ja
istop: true
key: "Cloud"

---

# 前言

最近会社業務でCloud Functionsにお世話になりました。

Googleで調べたら、なんか半数以上はCloud Functions For Firebaseが出てきた。

GCPのCloud Functionsが少ないと感じます。

一言いうと、同じみたいです。

`現在は全部ベーター版です。`


# Cloud Functions

大枠以下のために使ってもいいよというサービスです。

- Http:Single Page Service(SPA)などかなぁ
- Pub/Sub:バッチ処理
- Cloud Storage:保存処理
- Cloud Firestore:Firebase向け
- Firebase向けなどなど

使い目的によって、活用できるじゃないかと思います。

## サポート言語

- Node.js 6
- Node.js 8
- Python3.7
- Go1.11

## Deploy

GCPのGUIから更新可能(`個人的に好みかと思います`)

GCPのコマンドからもできるです

```
Httpの場合:
gcloud beta functions deploy [関数名] --trigger-http

Pub/Subの場合:
gcloud beta functions deploy [トピック] --trigger-resource [関数名] --trigger-event providers/cloud.pubsub/eventTypes/topic.publish

Cloud Storageの場合:
gcloud beta functions deploy [関数名] --trigger-resource [Bucket名] --trigger-event providers/cloud.storage/eventTypes/object.change
```

## エディタ以外の場合

以下の三種類を選択できます

- Zip
- StorageのZip
- Cloud Source Repoに保存しているソース

## ルール(公式に書いていないみたい)

ルールとしては簡単です

Python3.7の場合:

```
main.py ＋　実行関数
```

をあればいいです。

Pythonの場合、pipenvで管理しているらしいので、pipenvをインスとるしてください。

Node.jsの場合:

```
package.json
```

で管理する。

Goの場合:

```
package.json
```
みたいです（保証しませんw)

## 追記

`Cloud Pub/Sub`と`Cloud Scheduler`がペア組んでいるみたいです。

一つの関数を実行する時間は１分間から９分間です、９分超えた時点でもう`タイムアウト`です。

時間のコントロールや分散処理を気を付け。。。