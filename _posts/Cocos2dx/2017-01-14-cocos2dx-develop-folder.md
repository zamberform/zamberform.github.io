---
layout: blog
title:  "Cocos2dxのデザインパターン思考"
date:   2016-01-14
category: Cocos2dx
background-image: https://i2.wp.com/codingsec.net/wp-content/uploads/2016/07/timthumb.php_.png?ssl=1
istop: true

---


## MVVMからの考え

先日はAndroidのMVVMの構造から色々考えました、今まで一番やったゲームエンジンCocos2dxでは、

この効率的な開発フローを導入してもいいじゃないかと思います。

現状のCocos2dxを分析してみる、

* CocoStudioを使う時、.ccbもしくは.ccbiはViewなので

* よく使うものが、.plistもビューになるだろう

* 自作のPS・Flashなどからの変換ファイル

実際にMVCに扱う事が多くなります。

---

## Binding

ViewModelを対応する事がData Bindingになると思います。

最初はJSbindingを考えたけど、主流はC＋＋みたいな安定派はCocos2dxを使うと思います。

C＋＋より動作は良くないのため、プラトフォムを追加、もしくはサポートツールを作ることが役たつじゃないではないかと思います。

DataBindingは自作するしかないじゃないですかと思います。

機能定義はViewの解析と対応しているModel対応（ListenerとDataの流れ）。

### DIはどうします

Dependency Injectionはどうしたらいいだろうかと思います。

実はCocos2dxがたくさんのところが、Dependency Injectionを利用しています。

Directorを例として、Directorは誰も依存していないので、直接Scene、Layerなどに注入することができます。

実装としては：

１、Instanceを作る

２、モデルのデータ処理

３、モジュールを作成

４、外にAPIを公開

５、new Modelを返せるようになる。

上記手順で通信、もしくはゲームロジック処理部分を分離することができるだろう


### アニメション、エフェクトどう

Cocos2dxゲーム開発とアプリ開発は違うので、膨大なアニメションとエフェクトがあるこそがゲームでしょう。

Viewのファイルにすでに入りましたら、問題なく実装することができると思いますが、

今後追加する場合、色々考えなくちゃいけないので、運営に便利性を考えるべきが出てくると思います。

ここで、ViewModelを分離することによって、Viewを自分なりの処理を行うことができる。

Dataの処理をDIに任せ、Viewで演出を考えることが分離することができました、DataとViewの連結はViewModelになりました。

処理実装としては：

１、Viewのコントロールをさらに分離

２、アニメのコントロール

３、エフェクトのコントロール

４、View専用のListener・Event


* ボイスの処理も同じく、対象になれる

---

## 結論

Cocos2dxと長い付き合いなので、開発ツールとしては、Cocos2dxが勉強できる部分は多いと思います、

今回はMVVMの思考がCocos2dxに行かせようとやりました、

前が開発していたゲームのMVC構造と分析、比較した後、一つの成長になれる。

---

## 自分考えたプロジェクト機能分けフォルダー

{% highlight ruby %}
--Classes
--AppDelegate
------Util//ツール
------View
---------Animation
---------Effect
---------Scene
---------Layer
---------Widget//必要なゲームUIパーツ
------ViewModel
------Model
------Sound
------Protocol
------Component
------Module
------ThirdLib//第３ライブラリーのコントロール
{% endhighlight %}

Grandleビルド設定が初心者向けではないのため、

フォルダーに対してのAndroidのJNIコツ：
{% highlight ruby %}
LOCAL_PATH := $(call my-dir)
include $(CLEAR_VARS)
LOCAL_MODULE    := mylibrary
LOCAL_SRC_FILES := $(wildcard $(LOCAL_PATH)/*.cpp)
include $(BUILD_STATIC_LIBRARY)
{% endhighlight %}



