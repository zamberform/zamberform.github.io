---
layout: blog
title:  "SoftKeyboard Android Control"
date:   2015-11-12
category: Android
background-image: http://www.shiva3dstore.com/image/cache/sellers/4/jpvirtualkeyboard_256-500x500.png
istop: true

---

## Android SoftKeyboard

実はAndroidのソフトキーボードがただのDailogに過ぎないのを認識しましょう。

InputMethodServiceでこのDialogをコントロールし、呼び出している

このInputMethodServiceについて色な使い方があります。

### adjustPan

このモードでは、ソフトキーボードが出た後に、スクロールが出来ないのを認識しましょう、デフォルトはこれです。

### adjustResize

スクロールしながら入力したい場合、これです。

### 自動呼ぶコード

{% highlight ruby %}

InputMethodManager inputMethodManager=(InputMethodManager) getSystemService(Context.INPUT_METHOD_SERVICE);
inputMethodManager.toggleSoftInput(0, InputMethodManager.HIDE_NOT_ALWAYS);

{% endhighlight %}

---

{% highlight ruby %}

InputMethodManager inputManager = (InputMethodManager) context.getSystemService(Context.INPUT_METHOD_SERVICE);
inputManager.showSoftInput(etInput, 0);

{% endhighlight %}

### 隠す

{% highlight ruby %}

windowSoftInputMode=adjustUnspecified|stateHidden

{% endhighlight %}

---

{% highlight ruby %}

editText.clearFocus();

{% endhighlight %}

---

{% highlight ruby %}

InputMethodManager imm = (InputMethodManager)getSystemService(Context.INPUT_METHOD_SERVICE);
imm.hideSoftInputFromWindow(editText.getWindowToken(),0);

{% endhighlight %}

---

{% highlight ruby %}

editText.setInputType(InputType.TYPE_NULL);

{% endhighlight %}

---


## EditText配置

{% highlight ruby %}

<EditText  
  android:id="@+id/text1"  
  android:layout_width="150dip"  
  android:layout_height="wrap_content"
  android:imeOptions="flagNoExtractUi" //フルスクリーンじゃない
  android:imeOptions="actionNone"  //提示がない
  android:imeOptions="actionGo"    //入力終わったら、GO
  android:imeOptions="actionSearch"  //入力終わったら、Search
  android:imeOptions="actionSend"    //入力終わったら、Send
  android:imeOptions="actionNext"   //入力終わったら、次へ
  android:imeOptions="actionDone"  //入力終わったら、完了
/>

{% endhighlight %}

基本的にimeOptionsの配置でキーボードの右下のボタンを変わることができます。

* imeOptions="actionSearch"とsingleLine="true"がペアです。
* Android5.0以後はLayoutで　android:fitsSystemWindows="true"　を設定する必要があります。
