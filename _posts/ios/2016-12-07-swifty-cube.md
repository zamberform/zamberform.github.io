---
layout: blog
title:  "SwiftyCubeController"
date:   2016-12-06
category: iOS
background-image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Necker_cube.svg/1200px-Necker_cube.svg.png
istop: true

---


## 効果

UIViewControllerとしてViewの表見をコントロールする、Viewは変わる時がキューブみたいな立体感があります。

![キュープコントロール]({{ site.baseurl }}/assets/cubesample.gif)

---

## 使い方

### SwiftCubeControll初期化

{% highlight ruby %}

let cubeController = SwiftyCubeController()
cubeController.dataSource = self
cubeController.wrapEnabled = true//１から３、３から１まで戻れるのかのフラグ

{% endhighlight %}

### SwiftyCubeControllerDataSourceのprotocol関数

関数numberOfViewControllersInCubeControllerはViewの数を設定することができます

関数cubeControllerはViewのインデックスによって、具体的な動作と画面の表現を実現する

nibの場合：

{% highlight ruby %}

ViewController(nibName: "nibファイルの名前", bundle: nil)

{% endhighlight %}

stroyboardの場合：

{% highlight ruby %}

storyboard.instantiateViewControllerWithIdentifier("VC1")

{% endhighlight %}

### SwiftyCubeControllerDelegateはcallback

cubeControllerDidScroll:スクロールするときのcallback

cubeControllerCurrentViewControllerIndexDidChange:Viewが切り替えた時

cubeControllerWillBeginDragging:スクロール始まる瞬間

cubeControllerDidEndDragging:スクロール終わる瞬間

cubeControllerWillBeginDecelerating:減速が始まった。動かしている最中に指先が離れた際

cubeControllerDidEndDecelerating:スクロールが急停止した際

cubeControllerDidEndScrollingAnimation:指定したスクロールが終わった場合

---

## ソース

詳しい参考は[SwiftyCubeProject](https://github.com/zamberform/SwiftyCubeController)にお願いします
