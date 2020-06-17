---
layout: blog
title:  "Unityの構造によるの機能分け"
date:   2017-01-15
category: Unity
istop: true
background-image: https://forum.unity.com/attachments/20140724014803-jpg.168039/

---


## ゲームの作り役割

ゲームを最後の製品まで作り出すのが様々な人が様々な組み合わせでできたものと思います。

どうやって効率的に役割分散して、効率よく開発するのがエンジニアの役割と思います。

Unityではその役割が一番わかりやすく分けていました。

{% highlight ruby %}
*Assets
*Library
*ProjectSettings
*Temp
{% endhighlight %}

上記によって、スクリプトとゲームソースの作業場がAssetsになりますが、

Libraryが外部のライブラリーを管理することができると

ProjectSettingsによって、debug・alpha・test・releaseのパケージ作るのが便利になります。

---

## Assetsのフォルダー分け

デザインとスクリプトがAssetsの主役のため、

デザインの領域とスクリプトの領域を分けて仕事的に分離して、効率よくなるだろうかと思います。

Unityの設計がComponentを主役として活躍しているのため、できるため、こっちが合わせるためと思います。

Unityの画面が設計画面になるので、Viewとして認識しても問題ないです。

Unityの場合、依頼注入ないと思いまして、

Androidと比べるとbutterflyみたいなものあったね、

MVCの制限を考えると、仕様変わったら、作業は。。。。。。。。。。。

そこは、MVPに近いに考えてみようと思います、分離によって、

仕様によって変わってもスムーズに対応出来るように頑張ろう。

{% highlight ruby %}
---Android     //CustomのManifest
---iOS         //iOSプロジェクトソース
---Model       //モデルのソースフォルダー（基本的に3Dソース）
---Texture     //Textureのソースフォルダー（基本的に3Dソース）
---Plugin      //Pluginのフォルダー
---Shader      //Shaderのソースフォルダー
---Scene       //Unityのシーン(View)
---System      //ゲームシステムが必要なComponent(スクリプト)
------Common      //共通のComponentの存在
------Model       //ベシックのモデル        
------Net         //通信のパーツ
------Animation　 //アニメをコントロールするもの
------Render      //画像作成するときの処理
------Debug       //Debugのときツール
------Loop　　　　 //FrameがUpdateのときやるもの
------Input       //Touchと入力の処理
------Physics　　　//物理の演算
------Util        //共通のツールクラス
---Game        //ゲームの仕様によって
------Model             //ゲーム内部のモデル
------Manager           //あらよるものをコントロールする
------Widget            //ゲームの２Dバーツ(自作)
------ViewContract          //ViewにアクセスするAPI
------DataContract          //DataにアクセスするAPI
{% endhighlight %}

* systemが変わらないのものを実装するによって、仕様変わっても変わるところない
* Gameの部分がcontractによって、MVPのpresentの部分をイメージ
* 機能によって、展開しやすい

## 最後

Unityの経験はちょっと浅いだが、開発が進めやすいように、どんなエンジンでもフレームによって、方向性は違うので、

効率を考えて、プロジェクトによって、どんな開発手段を使うのがこれから鍛えるべき。
