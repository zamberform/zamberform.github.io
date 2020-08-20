---
layout: blog
title:  "SwiftUIの画面切り替え"
date:   2020-08-20
category: iOS
background-image: https://developer.apple.com/news/images/og/swiftui-og.png
istop: true

---


# SwiftUI

去年から、ずっとFlutterを積極的に追いました。

だって、クロスプラットフォームですから、コード一つでプラットフォーム係らず、全部作れるからね。w

Flutterの開発落ち着いたところで、原生iOSのことならば、色々開発しやすいでしょうかとiOSの最近を追いつけようと思いました。

```
2019年で新しくSwiftUIができましたね。
SwiftUIでUIを構築することになりました。
```

今までiOSの開発では、コードで自分で構築する、Storyboard（クソ）を半分半分使っていました。

SwiftUIはコード優先なので、すごくやりやすい感じがしました。

---

## UIパーツ

もちろん、新しいUIKitなので、UIパーツから学ぶ人がたくさんいるでしょう

自分はここのパーツは特に気にしたことないです（Viewですので、今まで通りじゃん）

[Swift UIパーツたち](https://github.com/Jinxiansen/SwiftUI)ご参考になればいいかと思います。

## 画面構築

気になるのがせっかく理解していたUIパーツを組み合わせる時はどうするのが、どうの風に管理するのが気になります。

Viewに関係によって、以下のルールに従えば、コントロールしやすいだろうと思います。

```
・画面遷移あり：NavigationViewとNavigationLinkはお勧めします。
・同一画面に複数表示：ScrollViewで構築でお勧めします。
・ポップアップ出す：sheet、alertとZStackでお勧めします。
・その他の表現：ZStackですね。

```

ZStackの使用頻度は高いですね。

SwiftUIの中に、全部ZStackとNavigationViewもありですね。

