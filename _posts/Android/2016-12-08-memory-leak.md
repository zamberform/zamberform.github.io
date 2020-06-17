---
layout: blog
title:  "メモリリークの検索方法"
date:   2016-12-08
category: Android
background-image: https://markolazic.com/wp-content/uploads/2017/12/illustration-memory-leak.jpg
istop: true

---


## 紹介

Androidでは、メモリリークが発生する場合、どうやって、具体的な場所を特定するのかよくあることです。

何でリーク発生するだろうか、オブジェクトがリリースのタイミングでリリースしていないのは基本あり得るもの。

原因：

１、プログラム：プログラマ書いているものが、メモリのリリースのタイミングを逃してしまったなど

２、ライブラリー：完璧なライブラリーが存在していないだろうと思いまして、第３ライブラリーが時々あるかもしれない


---

## 方法

### AndroidStudioの内部のもの

Lint:Analyze -> Inspect Code

[Android Memory Monitor](https://developer.android.com/studio/profile/am-hprof.html)


### コードの導入

Square様くれた[LeakCanary](https://github.com/square/leakcanary/)

StrictMode(基本的にdebugモード)によって、ログからリークを見つけることができます。

### adb

{% highlight ruby %}
adb shell dumpsys meminfo [PackageName]
{% endhighlight %}

オブジェクト情報を見れる

---

## 結論

リークは開発終わった後にやるものなので

大量に発生の場合、ユーザーの体験を一番にして、改善とテストを繰り返す必要があります。
