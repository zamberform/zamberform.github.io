---
layout: blog
title:  "AndroidのFragmentに関して"
date:   2017-11-24
category: Android
background-image: http://www.netbooknews.com/wp-content/2011/09/android-fragments.jpg
istop: true
key: "Fragment"

---


# Fragmentシリーズ

Android 3.0（API 11）以降、システムのandroid.app.Fragmentからsupport-v4に利用するように進められている。

一般的に、
{% highlight ruby %}
compile 'com.android.support:support-v4:version'
{% endhighlight %}
になることです。

更新しているはsupport-v4のライブラリになり、システムのandroid.app.Fragmentはそのままになっています。開発中に言っているFragmentはsupport-v4になります。


---

## メリット

Fragmentが必ずActivityに存在しています、つまり、独立に存在しない物になります。まだ、たくさんのFragmentがActivityの中に自由に組み合わせすることができます。

それによって

* Fragmentによるモジュール化
* たくさんのレイアウトを管理
* データの分離


## ライフサイクル

順番が以下の通り

{% highlight ruby %}
onAttach()：Activityからの入り口、ActivityからのパラメタがgetArguments()で取得できます。
onCreate()
onCreateView()：レイアウト
onActivityCreated()：ActivityのonCreate()のとき。
onStart()：レイアウトをレンタリングするとき
onResume()
onPause()
onStop()
onDestroyView()：レンタリングしないとき
onDestroy()
onDetach()：Activityから関連を削除するとき
{% endhighlight %}


## マネージメント

たくさんのFragmentが管理できるのは、FragmentManagerのおかけです。

このFragmentManagerがスタックの原理を利用して、多重のFragmentを管理することができました。


## データの流れ

パータン１：

Activityからのデータの場合、ライフサイクルを活用することで、Listenerを実装することができます。


パータン２：

FragmentからActivityにデータを流し込むの場合、ちょっと複雑になるですが、[FABridge](https://github.com/hongyangAndroid/FABridge)という方法でなんとなく、関数とかをReflactionできると思います。

パータン３：

Fragmentの間はデータ通信しないほうがドキュメントに書いております。じゃ、どうやってデータを流し込むでしょうかというと。Activityをデータの運ぶ屋として、データを流し込むことができます。

---
