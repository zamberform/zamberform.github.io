---
layout: blog
title:  "自作Plugin"
date:   2016-06-12
category: Android
background-image: https://developer.blackberry.com/android/files/documentation/images/ss_bb_idea_plugin_02.png
istop: true

---

## 背景

Android studio のprojectビューではプロジェクトのクラスのファイルを一覧できる、Structrueのビューでは、中のクラスの関数及び定義を一覧できますが、

特定の関数を編集したり、バグを探したりする時が、この二つのビューを切り替えるのは時間かかるので、効率良くないと思いましてこのプラグインを作ることになりました。


## 動作

Alt+Mのショットキーで、素早く関数のリストを出して、必要な関数のところに飛んで編集もしくはレビューすることができます

## 効果

関数一覧

![モデルビュー使用]({{ site.baseurl }}/assets/method_view_test.png)

操作結果

![モデルビュー結果]({{ site.baseurl }}/assets/method_view_test_result.png)


## 利用方法

Preferences/Settings->Plugins->Install plugin from disk

DLしていたjarをインストールして、android studioを再起動します。

再起動終わったら

ViewのところがMethodViewerが表す〜

* 開発していたのはJRE8くらいなので、JRE8の環境でご使用ください。


## オープンソース

ソースを公開しています、詳しくは[ここ]にお願いします。



[ここ]: https://github.com/zamberform/QuickMethoder
