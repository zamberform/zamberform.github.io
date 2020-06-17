---
layout: blog
title:  "Orientation in cocos2dx"
date:   2016-05-28
category: Cocos2dx
background-image: https://image.jimcdn.com/app/cms/image/transf/dimension=522x10000:format=png/path/s12979240c55f0984/image/i7a79fecae0c7c3f6/version/1465122674/image.png
istop: true

---


## 理由

「オズクロ」みたいなゲームがリリ－スされ、スマトフォンの縦と横によってUIが買われるようになるシステムがありました。

と興味あって、よく使うcocos2dxが実装できるだろうかと試しました。意外に簡単でした。

cocos2dxバージョンが３．１０になります。

## 実装

CCApplication.hでは

{% highlight bash %}
virtual void applicationScreenSizeChanged(int newWidth, int newHeight);
{% endhighlight %}

以上の関数が追加され、意味通りに、アプリの横と縦の変化によって、呼ぶ関数になります。

---

### AppDelegateに関数追加

具体的にな実装は：

{% highlight ruby %}

void AppDelegate::applicationScreenSizeChanged(int newWidth, int newHeight){
	auto director = Director::getInstance();
	auto glview = director->getOpenGLView();

	.....

	//新しいサイズをOpenGlのビューのサイズとして設定
	glview->setFrameSize((float)newWidth, (float)newHeight);
	// 横の場合
	if (newWidth > newHeight) {
	//UIのサイズを設定する
		glview->setDesignResolutionSize(designResolutionSize.height, designResolutionSize.width, ResolutionPolicy::NO_BORDER);

		......

	//サイズ調整
	}
	else{
	//縦の場合
		glview->setDesignResolutionSize(designResolutionSize.width, designResolutionSize.height, ResolutionPolicy::NO_BORDER);

	....
	//サイズ調整

	}

	//TODO:現在のシーンの全てのUI変更設定
}

{% endhighlight %}

* UIの変更はあくまでは座標とカメラのサイズ変更になるので、UIの設計ファイルを読み込みした方が管理しやすいと早いかと思います。
* LuaとJSバージョンで開発されるのも同じ関数になります。
