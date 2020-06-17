---
layout: blog
title:  "AndroidのHotfix技術"
date:   2016-10-09
category: Android
background-image: https://i.stack.imgur.com/Nw7fMl.png
istop: true

---


今週末は面白いHotFixの技術にはまっていて、いろいろ勉強しました。

## Hotfix

[Wiki](https://ja.wikipedia.org/wiki/%E3%83%9B%E3%83%83%E3%83%88%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%82%B9)から言うと、

ソフトウェア製品において製造元がバグを修正した際に、ユーザへ修正版を提供する形態のひとつ。特に迅速性を重視した形態である。

どこが迅速性というと、ユーザが直接bug修正のスクリプトをダウロードして、アプリが自動的にインストールした後、バグが直接修正することができます。

すなわち、いつでも申請なしアプリの機能を更新することができます、いつでもアプリのバグ修正ができます。

Androidの場合、この技術が発展しています。

というより、もう安定していますね。

## HotFix原理

流れ：
{% highlight ruby %}
patch.jar(修復したクラス)ダウンロード
　　　　　　　｜｜
            ｜｜
DexClassLoaderでpatch.jarを読み込み(patch.dex)
　　　　　　　｜｜
            ｜｜
ClassLoaderでpatch.jarのクラス内容追加(dexの形)
　　　　　　　｜｜
            ｜｜
　　　同じAクラスを呼ぶ場合
　　　　　　　｜｜
            ｜｜
patch.jarで追加していたクラスの方が呼びます。

{% endhighlight %}

### Dex層

まず何を修正するだろうか、AndroidはJava環境なので、もちろん、Javaビルドできたdexファイルですね。

Androidの場合、関係あるクラスがありました、ClassLoaderシステム。

PathClassLoader:ロカールのクラスファイルをロードすることができます、ただ、ロカールに限るので、つまり、インストール済みのapkファイルは対象になります。

DexClassLoader:.jarと.apkファイルのクラスですが、classes.dexでアクセスできるようになれる。

DexClassLoaderとPathClassLoaderが主役になります。

目的として、ClassLoaderで修復した追加ファイルの修復したクラスを切り替えることです。

### 基準(Dex層)
{% highlight ruby %}
CLASS_ISPREVERIFIED
{% endhighlight %}
が一番ありえる。

Javaマーシンを起動する時から、classes.dexを.odexに変換して実行するように実装しています。

patch.jarで追加していたクラスが、変換する時が、クラスもチェックするので、

ビルドの順番がコンストラクタの後が関数をチェックします。

コンストラクで
{% highlight ruby %}
CLASS_ISPREVERIFIED
{% endhighlight %}
を立ってば、dexの中に同じ関数がある場合、コンフリクトが発生せずに、patchの内容を優先的に修正した関数として追加することができます。

* 性能はテストする必要があります、起動時間など
* [multi dex](https://developer.android.com/studio/build/multidex.html)をサポートする必要がある。

## Jni層

Jni層なので、もちろん.soファイルになりますが、patchファイルがjarと言っても、apkか、.soファイルと言っても、.soと関連して、修正対象になります。

代表的なのは[AndFix](https://github.com/alibaba/AndFix)になります。

C言語とC++の安定性と性能はたまらないと思います。

ものすごく性能的、安定しているHotFixの仕組みになります。

JniのCなので、もちろん、ポインターが働きます。

追加していたpatchの関数もしくはクラスは.soに関連していまして、

Javaリフレクションでpublicとprivateの関数ポインターを見付けて、

ポインターを更新していたpublicかprivateの関数に切り替えることがJni方法の技術コアーと思います。

## 結論

進めは、Jniが実装すべきと思います、
機能追加とかは向いていないかもしれないですが、性能と安定性に考えると、Cの処理は致命的なバグ修正はすごくいいと思います。

Dexの実装はクラスの追加と変更はいいかと思います、ただし、dexがあんまり多くなると、性能は落ちる可能性があります。

参考プロジェクト：

[AndFix](https://github.com/alibaba/AndFix)

[dexposed](https://github.com/alibaba/dexposed)

[Nuwa](https://github.com/jasonross/Nuwa)

[Tinker](https://github.com/Tencent/tinker)(dexを合体して一気にfixしています)

---






