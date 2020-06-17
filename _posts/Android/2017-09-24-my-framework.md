---
layout: blog
title:  "私の標準フレームワーク"
date:   2017-09-24
category: Android
background-image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Android_open_source_project.png/220px-Android_open_source_project.png
istop: true
key: "Android Framework"

---


## 背景

AndroidStudioで開発がもう慣れましたので、ちょっと自分が今まで使ってすごくよかったと感じるライブラリー構成をメモしてみましょう。

---

## MVVM

やっぱりUIとデータのコミュリティがMVVMが好きです。
[Android MVVM構造](http://zamberform.github.io/blog//android/android-mvvm.html)が知らない人たちが前のブログに載ってますので、ご参考してください。

[databinding](https://developer.android.com/topic/libraries/data-binding/index.html?hl=ja)が必要になる。
ちょっと突っ込みたいことがありまして。

* android studioがビルドする時がエラーの出し方が変です。とりあえず、エラー出ました。具体的な場所がxmlではなく、javaでした。（最初の時が探すのが時間かかりました）
* databindingが1ページで完結できましたとは、すごいというか、探しにくいというか

---

## DI(Dependency injection)

データ依存性の注入する意味でDependency injectionです。
AndroidではDIとして有名なのはSquareのDagger2です、構成としては
DIで、retrofit2/ローカルデータベースのデータをActivityやモジュールに注入してもらう。

入れるのは

{% highlight ruby %}

    compile 'com.google.dagger:dagger:+'
    annotationProcessor "com.google.dagger:dagger-compiler:+"

{% endhighlight %}

---

## ローカルデータベース

今一番好きなローカルデータ管理のライブラリーがgreendaoです。
Daoのデータ構造なので、必要なデータを簡単に取れます。具体例が[ホームページ](http://greenrobot.org/greendao/documentation/)記載されています。

その実装手順が以下になります。

{% highlight ruby %}
	 //topのgradleでは
	 classpath 'org.greenrobot:greendao-gradle-plugin:+'
	 ....
	 //app内gradleでは
    apply plugin: 'org.greenrobot.greendao'
    ...
    ...
    //DBのバージョン管理
    greendao {
    	schemaVersion 1000
	 }
	 ...
	 ...
    compile 'org.greenrobot:greendao:+'

{% endhighlight %}

## その他

UIでは画像を処理するライブラリ[glide](https://bumptech.github.io/glide/)も愛用しています。





---
