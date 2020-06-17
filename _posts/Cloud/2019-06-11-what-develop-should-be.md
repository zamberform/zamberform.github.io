---
layout: blog
title:  "主流になりすべき基盤フレーム"
date:   2019-06-11
category: Cloud
background-image: https://storage.googleapis.com/cdn.thenewstack.io/media/2018/06/5ccb7b6b-jani1.png
istop: true
key: "Cloud"

---


## 背景

Go言語をサーバーサイト開発で私が愛用している言語です。

Goの性能もあり、主役としてはAPI開発は一番よく使われています。

でも、サービスは基本的にWebページが必要とされています、少なくともCMS(コンテンツ管理)は必要になるだろう。

ここで、バックグラウンドとフロントエンドを完全に分離して、開発を行う方がチーム全体にバランス取れるし、運営もしやすくなることだろうと思います。

---

## 調査

### バックエンド

Goがいるから、なんでもGoにお任せすれば行けますという自信です。

Go1.11の `go mod` 使いやすいです。

### フロントエンド

近年のフロントエンド技術はすごく増えています。

主にNode.jsを使っている技術で、

よく耳に入っているのはVue.jsでしたので、Vue.jsについて調査しました。

#### SSRすべきのはWeb画面

SSR(サーバーレンタリング)で、Googleなどで検索しやすいと宣伝しやすいメリットがあります。

Vueの家族の中に、Nuxt.jsというフレームワークありました、これを使って、Web画面を構築するのがおすすめと思います。

#### CMS画面は単純のVue

上記の逆に、CMSは別に公開しなくても大丈夫ということもあり、普通のクライエントレンタリングを使えばいいかと思います。

Vueがこの役を果たします。

おすすめのCMSテンプレートは [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)です。

## Nginx

「バックグランドOK  ＋　フロントエンドOK 」のため、これらを繋げるのはNginx様である。

## Docker+k8s

また、開発や、本番などで　GCP・AWSで行うのが一番いいだろうと思います。


## 参考用の構成

```
- images(Dockerfileなどを格納)
- web(nuxt.jsで構築したWeb画面)
- cms(vue.jsで構築したCMS)
- backend(go言語で開発したapi)
- docker-compose.yml/docker-stack.yml(配布用のdocker-compose様)

```

以上の構成で、各自の役目はお分かりになり、開発メンバーや運営メンバーはすごく楽そうに見えます。
