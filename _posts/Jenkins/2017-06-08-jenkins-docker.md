---
layout: blog
title:  "DockerでJenkins"
date:   2017-06-08
category: Jenkins
background-image: https://devopscube.com/wp-content/uploads/2017/04/jenkins-build-ecs-aws.png
istop: true
key: "Docker Jenkins"

---


## 背景

最近関わっているプロジェクトがJenkinsを使って管理をしています。
まだ、Dockerという仮想化環境システムに興味を持っていますので、Dockerの中にJenkinsを動かしてみようと思います。

---

## 実装

Dockerの環境構築は[ホームページ](https://docs.docker.com/)の説明が十分と思います。

まずJenkinsの仕入れフォルダーを作ってみます。
{% highlight ruby %}

mkdir jenkins/
cd jenkins/

{% endhighlight %}

Dockerfileで管理するのため、色々便利になります、設定ファイルみたいな存在。

Dockerfile:
{% highlight ruby %}

FROM jenkins/jenkins:lts
USER root
RUN apt-get update && apt-get install -y make
USER jenkins

{% endhighlight %}

さらに、{% highlight ruby %}docker-compose{% endhighlight %}が便利にサーバーを管理することができます。

docker-compose.ymlの中身

{% highlight ruby %}

version: '3'
services:
  jenkins:
    build: .
    volumes:
      - /jenkins_home:/var/jenkins_home(jenkinsのフォルダーになります)
    ports:
      - 8080:8080(左がアクセス、右がJenkins内部用です)
      - 50000:50000

{% endhighlight %}

最後は{% highlight ruby %}docker-compose up -d{% endhighlight %}でサービスを起動することができました。

---

## 結論

色々試して、下記のようなものが実感しました。

* Dockerが基本のLinuxの環境なので、インストールしていないライブラリーがたくさんあります、仮想化環境に自分必要なものを入れる必要がります。
* Mac環境がないですね、iOSアプリのビルドができません。Androidはなんとなくできます。
* GitかSVNが基本的に使うべき、仮想化環境にworkフォルダーにCheckoutした方がやりやすい。
* プラグインシステムをロードする時間がめちゃ長い（自分の設定の問題か、それとも、プラグインが多すぎるのかは未だに不明）、Jenkinsの設定ファイルに、プラグインを事前にインストールする方がいいと思います。

上記お主に参考したのは
[Jenkins公式Github](https://github.com/jenkinsci/docker#installing-more-tools)です。


追記：Dockerのホームページで、Jenkinsを管理することができます。
