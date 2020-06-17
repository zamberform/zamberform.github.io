---
layout: blog
title:  "GradleビルドChannel分け"
date:   2016-11-08
category: Android
background-image: https://cdn-enterprise.discourse.org/gradle/uploads/default/optimized/2X/7/70aacf38dc4d9e07d0660ca5efd012d11becd668_1_690x253.PNG
istop: true

---


## 目的

Android Studioで一気にたくさんのapkファイルを作る。

適応パータン：

１、多言語のバージョン

２、テスト環境分けるバージョン

３、リリースのストアがたくさんある場合（中国みたい）

---

## ●方法その１

app/srcでフォルダを作る、フォルダの下にAndroidManifest.xmlがある

{% highlight bash %}
<manifest xmlns:android="http://schemas.android.com/apk/res/android"  
    package="your.package.name">  
    <application>  

          <meta-data android:name="STORE_CHANNEL" android:value="STORE_NAME"/>  

    </application>  
</manifest>
{% endhighlight %}


build.gradleでproductFlavorsを追加

{% highlight bash %}
android {  
    ...

    productFlavors{  
        alpha{  }  
        beta {  }  
        sandbox{  }  
    }  
    ...
}
{% endhighlight %}

---

## ●方法その２

Gradleの中にmanifestPlaceholdersという機能を使う

メインAndroidManifest.xmlに

{% highlight bash %}
<meta-data  
    android:name="STORE_CHANNEL"  
    android:value="${CHANNEL_NAME}" />  
{% endhighlight %}

build.gradleでproductFlavorsを追加

{% highlight bash %}
android {  
    ...

    productFlavors {  
        test {  
            manifestPlaceholders = [ CHANNEL_NAME:"TEST"]  
        }  
        sandbox {  
            manifestPlaceholders = [ CHANNEL_NAME:"SANDBOX" ]  
        }  
        release {  
            manifestPlaceholders = [ CHANNEL_NAME:"RELEASE" ]  
        }  

    }  
    ...
}
{% endhighlight %}

注意：defaultConfigではmanifestPlaceholdersのデフォルトを設定できます

---

## 手順

１、AndroidManifest.xmlを配置

２、各出力のapkを配置

３、改善処理
