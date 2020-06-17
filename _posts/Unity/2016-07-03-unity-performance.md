---
layout: blog
title:  "Unity復習のメモ"
date:   2016-07-03
category: Unity
istop: true
background-image: https://forum.unity.com/attachments/unity5_1_profiler-png.153651/

---


久々にunityをやっていないので、復習として、メモします。

プログラマーとして一番気になるのはスムーズに動くこと。

## レンダーから

１、FPSの数値が小さいほど、やばいと思う

２、Draw Calls:Meshの数をチェック

３、Tris:絵がる時の三角形の数

４、Used Textures、Render Textures：メモリーがどれくらい使ったのか

５、VRAM usage：GPSがどれくらい使ったのか、機種によって違ってくる


---

## コードから

１、FPSのupdateで処理するのはよくない

*　どうしても必要の時が、間隔を設定して処理する

２、InvokeRepeatingを活用

３、Update、FixedUpdate、LateUpdateのロジックを改善する

４、ゴミ回収は期間的にやる。System.GC.Collect()、手動的;

５、ロジックを改善する。あと、intとかfloatとかのメモリー消費激しいの物を考えるべき

６、Edit->Project Settings->Timeで時間を0.04-0.067くらい設定。

７、GetComponentの使用頻度を減らす、一番わかりやすいのは下記。

{% highlight ruby %}

function Update () {
  transform.Translate(0, 1, 0);//度々Getしなくちゃいけない
}

{% endhighlight %}

変化

{% highlight ruby %}

var myTransform : Transform; //先にあるものを後で使う

function Awake () {
  myTransform = transform;
}

function Update () {
  myTransform.Translate(0, 1, 0);
}

{% endhighlight %}

８、処理する時で、できれば、同じリストのメモリーの上に、ロジックを完結する。new Classを減らす

９、iOS:Slow and Safe – Monoでデバッグ

１０、iOS:Profilerが活用

---

## モデルから

１、モデルの表示に影響はない場合、Mesh Compressionします（Off, Low, Medium, High）。

２、Unity内部のMeshツールでモデルを作る時、ポリゴンの数が半端ないので、できるだけ避ける。
