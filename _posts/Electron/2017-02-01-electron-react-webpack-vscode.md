---
layout: blog
title:  "electron-react-webpack-vscode環境構築"
date:   2017-02-01
category: Electron
background-image: https://d1eq8vvyuam4eq.cloudfront.net/tutorials/learn-electron/svg/electron_logo
istop: true

---


## 背景

Electronがツール系のアプリに活用できましたが、最近流行っているReactも加えて、何かすごいコードを書くことができるじゃないかと思っています。

ここで、色な組み合わせでアプリ開発の環境構築を作ってみました。

構築の手順、およびサンプルプロジェクトが[Github](https://github.com/zamberform/electron-react-webpack-vscode)に公開しています。


---

## 開発環境

定番のVSCodeでメインのIDEになります。

UnityでVSCodeを馴染み、VSCodeの凄さに感服しました。
VSCodeのプラグインシステムが開発作業にすごく役に立っています。

まだ、VSCodeのDebugシステムも便利すぎて、開発の定番IDEに間違いないですね。

### React

[wiki](https://en.wikipedia.org/wiki/React_(JavaScript_library))で紹介した通りに、Facebook様がオペンソースしていたライブラリーになります。

このすごさですが、[リアクティブプログラミング](https://en.wikipedia.org/wiki/Reactive_programming)できることです、自分が簡単に理解すると、UIの部分とデータの部分が完全分離できるので、まだUIの部分がReactに任せると、開発する時が書きやすい利点がある。

### WebPack2

ここで使っているのはWebPackの２バージョンになります。
まだElectronの場合、WebPack用にPluginライブラリーが存在しています。（package.jsonに書いています）

WebPackの役目がJSファイルを「モジュール」に変換して、使うツール
です。VSCodeでは、WebPackのタスクを作る必要があります。

### その他

最近TypeScriptかCoffeeScriptで開発しているのが主流になっているですが、自分には、この二つのScriptはなんなのかはわからないので、とりあえず、JSかJSXで進もうかと思います。

TypeScriptとCoffeeScriptは何かのコンパイラーで、最後JSファイルになるらしいです。

最近は便利なコーディングルールを定義して、従来の汎用的なファイルにコンパイルして利用するは効率的と思います。ただ、慣れるまでのコストが掛かると思います。

