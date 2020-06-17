---
layout: blog
title:  "SwiftのMVVM分析"
date:   2016-01-08
category: iOS
background-image: https://image.slidesharecdn.com/mvvminswift-160518164655/95/mvvm-swift-ios-28-638.jpg?cb=1463590185
istop: true

---


## 紹介

AndroidのMVVMに感服しました、iOSのSwiftが、MVVMのような考えもあります。

AndroidとiOSの比べると

|              iOS               |        Android      |
|:-------------------------------|:-------------------:|
|       UIViewController         |        Activity     |
|       Protocol                 |        Interface    |

Viewがstoryboard、xidとUIViewの組み合わせでできると思います。

iOSの場合、簡単にMVCをできると思いまして、MVVMの方向に進めるには、自作のMVVMパーツを作る必要があると思います。

---

## 環境

iOSのMVVMらしい構造

View:storyboard・xid・UIView

ViewModel:protocol+PublishSubject+Driver

ViewController:protocol+injection

Data:Dependency Injection

![構造図](https://image.slidesharecdn.com/mvvminswift-160518164655/95/mvvm-swift-ios-28-638.jpg?cb=1463590185)

### injection

データをインジェクトするにはsingtonを作る必要があります。

使えそうのツール：

RxSwift

RxCocoa

## 結論

iOSの開発がいろいろ便利なところがありますので、MVVMが簡単に合わせることができると思います、MVVMの設計が活躍できそうになります。

[参考プロジェクトWithRx](https://github.com/devxoul/RxTodo)

[参考プロジェクトNoRx](https://github.com/jalehman/todolist-mvvm)

---
