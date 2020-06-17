---
layout: blog
title:  "暗号化ツール"
date:   2016-12-11
category: Cocos2dx
background-image: http://www.mbbsoftware.com/products/act-on-file/2012/App_Themes/Cryptor%20Icon%20Base.png
istop: true

---


## 暗号化範囲

このツールではDES、DES2、DES3、AESを暗号化することができます

cocos2dxバージョンが３．１０になります。

* cocos2dx内部の改造があります。

## 暗号化

pythonでcryptoしてみる場合

3DESの場合

{% highlight ruby %}
openssl enc -des3 -d -in cipher.bin -out plain_decoded.txt -pass pass:hogehogehogehoge
{% endhighlight %}

[AESの参考](http://qiita.com/albatross/items/685f751549423efc9fbc)

nodejsのcryptoしてみる場合

{% highlight ruby %}
openssl aes-256-cbc -e -in rawtext.txt -out encrypted.txt
{% endhighlight %}

---

## 解読化と実装

例として、cocos2dxのAES解読化してみます

具体的にな実装は：

{% highlight ruby %}

// init the file system with decrypt code
FileUtils::getInstance()->createCryptoSystem(暗号化のキー, 4);
// decrypto the encrypt file in sprite
auto sprite = Sprite::createCrypto(暗号化されたファイル);

{% endhighlight %}

によって、2dのspriteを描写できます

* 3Dパーツの部分が何もしていないです、原理は2Dと同じになります。
* LuaとJSバージョンでの呼ぶ方がテストしていないです。

## ソース内容

ソースを公開してみました、[github](https://github.com/zamberform/cocos2dx-crypto)
