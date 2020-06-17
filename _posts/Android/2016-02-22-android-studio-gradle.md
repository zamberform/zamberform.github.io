---
layout: blog
title:  "android studio gradle"
date:   2016-02-22
category: Android
background-image: https://3.bp.blogspot.com/-_UipjQKIZko/VpNwDgjMdXI/AAAAAAAAAQ0/026hjxfPvFM/s1600/Settings_001.png
istop: true

---

* content
{:toc}


## Gradleのリンク
  
  [Gradleのサイト](http://services.gradle.org/)でGradleの配布又は更新を行っています。
　

## Gardleの基本コマンド

  基本的にAndroid Studioのタミナールで作業行うと済む感じ。
  
  Grandleコマンドの実行ルールとしては、Android Studioで作成したプロジェクトのGradle Scriptsの中に
  
  gradle-wrapper.properties最後の一行は環境変数として、Gradleの全てのコマンドを実行することになります。

* プロジェクトによってGradleのバージョンは変わることになりましたら、基本的にここは変更したら大丈夫です。
　

### Gradleのよく使うコマンド

{% highlight ruby %}

    gradlew -v
    
    gradlew clean
    
    gradlew build 
    
    gradlew assembleDebug
    
    gradlew installRelease
    
    gradlew uninstallRelease

{% endhighlight %}

* もしGradleがインストールされていない場合、自動的にインストールします。
* プロジェクトのbuildフォルダー削除になります
* debug/release両方出力になります、build->outputs->apk　　
* debugモード、build->outputs->apkではxx-debug.apkとxx-debug-unaligned.apk
* ReleaseAPKとインストール
* ReleaseAPKのアンインストール

### APKサイン

  方法１：Project StuctureでUIに従ってサイン情報を入力してビルドを実行
  
  方法２：build.gradleでファイルを変更、情報を入力

* android->signingConfigs->release(debug)->keyAlias+keyPassword+storeFile+storePasswordの配置になります。

## BuildConfigの紹介

Eclipseではgenのフォルダーになります。

Android stuidoではapp¥build¥generated¥source¥buildconfig¥dubug¥BuildConfig.java


### build.gradleの詳細

{% highlight ruby %}

  apply plugin: 'com.android.application'
  
{% endhighlight %}

  * アプリのモジュールを定義

{% highlight ruby %}

  packagingOptions{ exclude "" }

{% endhighlight %}

  * アプリのパケッジーグのオプション

{% highlight ruby %}

defaultConfig {
  applicationId "com.xx.xx.xx "
  minSdkVersion 16
  targetSdkVersion 23  // 基本は最新SDK
  versionCode 20160222
  versionName "1.01.14"
  multiDexEnabled true // dexもし65535を超える場合
}

{% endhighlight %}

  * アプリのデフォルトオプション

{% highlight ruby %}

buildTypes {
  release {
    buildConfigField "boolean", "LOG_DEBUG", "false"//ログを出せない
    minifyEnabled true   //コード暗号化フラグ、progudard-android.txtの利用
    zipAlignEnabled true // Zipalignを利用
    shrinkResources true // 使っていないresourceを削除
    proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard.cfg'
    signingConfig signingConfigs.release  // アプリをサイン
  }
}

{% endhighlight %}
  
  * ビルドのルール

## Gradleのthird Lib

  僕らは一人一人の力が小さいので、たくさんの人が集めれば、色な課題が解決できる。
  
  と思います。
  
  Gradleで他の人がつくった優秀な解決案を導入するのはthird Libになります。
  
  Gradleでは一行の配置で全てのthird libを利用することができます

{% highlight ruby %}

dependencies{
  compile 'com.google.code.gson:gson:2.6.*'
}

{% endhighlight %}
  
  のように追加すれば、このライブラリーが自動的に追加されます。
  
  一番機能しているところは下記の配置になります。
  
{% highlight ruby %}

buildscript {
  repositories {
    jcenter()
  }
  dependencies {
    classpath 'com.android.tools.build:gradle:2.1.0'
  }
}

{% endhighlight %}
  
  このjcenterはなんでしょうかと多分質問出ると思いますが。
  
  実は全てのthird libがこのjcenterで管理して、シャアをやっています。
  
  認識としては
  
 * jcenter=[jcenterの一覧サイト](http://bintray.com/bintray/jcenter)
  


