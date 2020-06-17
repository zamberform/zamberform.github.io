---
layout: blog
title:  "Android MVVM構造"
date:   2017-01-08
category: Android
background-image: https://i-msdn.sec.s-msft.com/dynimg/IC564167.png
istop: true

---

## 比較

MVC:

Androidの場合、Viewがxmlになるので、activityのロジックがものすごく量になると思います。

Modelもこんなに軽くないので、

モジュールを分けてテストすると、もしくは追加機能はちょっと難しいそうに見えます。


MVVM:

Dataを間接的にxmlに注入するイメージなので、ViewとControlの完全分離できました、

ViewModelでModelとのコミュリティを上手くできるようになれる。

ロジックをModelに入れるので、モジュール分けてテストするのも可能になります。


---

## MVVM環境

MVVMが良い設計と認識された場合、環境を作るのが必要になるので、Googleの[databinding](https://developer.android.com/topic/libraries/data-binding/index.html?hl=ja)がコア技術になります。

でも、これだけじゃダメです。

### Butter Knifeを組み合わせ

場合によって、Databindingが必要ないビューをButter Knifeでbindするのが便利です。

### Dependency Injection

Google様の[dagger2](https://google.github.io/dagger/)が大変便利です。

Modelにデータを注入するイメージがいいでしょ。

モジュール分け、機能分けにはすごく便利な存在になります。

テストと機能追加には役立ちます。


### RxJava技術

Dataの流れをコントロールするために、昔の処理方法では非同期が少ないのため、RxJava,RxAndroidの導入によって、改善されます。

Dataは自分なりの処理を処理しながら、ユーザーのアプリ体験には全く影響を与えないのは素晴らしいのことです。


### 通信

今まで使っている通信モジュールはHttpURLConnectionになるですが、

現在まで、OKHttpを使う人が多くなりました。

さらに、square様が公開したretrofitシリーズがものすごく便利な通信ライブラリーになります。

JSONからXMLまで簡単にデータを解析できます。

* XMLを使う時が注意すべき

{% highlight ruby %}
compile('com.squareup.retrofit2:converter-simplexml:[バージョン情報]]') {
        exclude module: 'stax'
        exclude module: 'stax-api'
        exclude module: 'xpp3'

    }
{% endhighlight %}


---

## 結論

成果を出すのがチームの組み合わせ、

いくつの技術の組み合わせ、

全体的に開発の生産性は向上することができますと思います。

パターンによって、開発に必要な技術を導入することが肝心だと思います。

[自分が参考したMVVMの参考プロジェクト](https://github.com/hitherejoe/MVVM_Hacker_News)






