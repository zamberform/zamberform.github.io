---
layout: blog
title:  "Flutterのwebview"
date:   2020-02-19
category: Redis
background-image: 
istop: true
key: "Flutter"

---

# 背景

去年の秋からFlutterでアプリを開発し始めた。

UIはFlutterのUIパーツでほぼできますが、どうしてもWebのページあって、あそこの部分はWebページを表現したいたりしますね。

ウェブビューの役割果たすために

- Htmlのレンダリング
- JSのサポート面
- ローディングやリソースの読み込みのコールバックイベント
- JSとDartの橋役

上記を満たせば、残りは効率的問題、
具体的にdebug機能も求めることが望ましいですが、
今のほぼハイスペックスマホ時代は、特に問題ないでしょうと思うけどね。

---

# 選別

Flutterのライブラリーは充実していて、頼りできるし、効率すごく上がるメリットあります。

[FlutterのライブラリーWebView](https://pub.dev/flutter/packages?q=webview)から検索して、`webview_flutter`と`flutter_webview_plugin`で私がプロジェクトのwebview表示として使用しようと思います。

## webview_flutter

マークは`flutter.dev`です。

つまり、Googleの公式サポートです。

もちろん、これを選ぶべきと思います。

Htmlのレンタリングはもちろん、
JSの切り替えは`javascriptMode `で一発解決します。

* コールバックイベント豊富です。
```
　onWebViewCreated
　navigationDelegate
　onPageStarted
　onPageFinished
```
　関数名から見ると、従来のAndroidのWebView感大きいですね。
* JSとDartの橋

```
　javascriptChannels
```

効率的にはさすがGoogle製、かなりチューリングしました、Flutterとの相性は抜群です。


## flutter_webview_plugin

マークは`fluttercommunity.dev `です。

Googleは政府機関に例えすると、こちらは民間機関の製品として認識した方がいいかと思います。

なので、使い勝手ですね。

`webview_flutter `にはないものは全部揃えたです、

例えば、Zoom機能とか、ローカル保存とか、何より、JSに対してのサポートは神レベルです。

実作業の時、`webview_flutter `はJSのアンカー（指定したclassやidにスクロールする機能）サポートしていなく、こちらはスムーズに動いた。

まだ、そのほか、webページでよく使われたjsのライブラリーはほぼこちらのライブラリーで動けるので、心配なく長く使えそうですね。

でも、`Scaffold`なので、Scaffold上のシェダーは加えて表示したい場合、Flutterのレンタリングで工夫する必要があります。


---

# セキュリティ

従来JS周りで、しつこいセキュリティ論はありますね。

* `webview_flutter`:`javascriptMode `でコントロールできる、まだ、`javascriptChannels `で発火イベントを捉えるので、セキュリティー面は極めて低いと思います。
* `flutter_webview_plugin `:同じく`withJavascript`でコントロールできますが、やはりjsのサポート面は大きいので、セキュリティ面は`webview_flutter `より低いです。ハイリスクと言えるほどではないです。


---

# 結論

両方のplugin（ライブラリー）同時にプロジェクトで利用すべきです。

必要に報じて、両方のパーツを使い回せば幾つの仕様に合わせます。

補足：
関数などの衝突あるかと心配するかもしれないですが、こちらの検証として、両方のライブラリーは特に衝突なし利用できます。

元々、dartはimportでパッケージを管理しているので、一緒にimportしても、名前つけると、ビルド時は名前は差し替えるので、特に心配しなくで大丈夫です。
