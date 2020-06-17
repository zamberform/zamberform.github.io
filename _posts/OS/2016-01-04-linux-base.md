---
layout: blog
title:  "Linuxの基本コマンド"
date:   2016-01-04
category: OS
istop: true
background-image: https://cdn.neow.in/news/images/uploaded/2016/09/1473666099_linux-640x380_story.jpg

---


## Ubuntuを基本

CTR+ALT+F8はGUIに戻る

Ctr+ALT+F1はCommandモード

### lsメモー

{% highlight ruby %}

	ls:簡単なフォルダ構造
	ls -a:隠したフォルダとファイル
	ls -al:全てのフォルダ、..含む
	ls -l:ユーザーに関する情報のフォルダ

{% endhighlight %}

---

### manはヘルプ

コマンド忘れた時

man ls

---

他のコマンド

{% highlight ruby %}

	echo:ポインターをファイルに
	touch:ファイルが存在していないなら作る
	cat:ファイルの中身見るだけ
	cp:コピー
	mv:移動
	rm:削除
	* rm -r
	head:ファイルの頭部分
	head -数字
	tail:ファイルの後ろ部分、ログを見るとか
	tail -f
	sort:ファイルをソードする
	diff:比較
	diff -u

{% endhighlight %}

---

## ユーザー

追加：

{% highlight ruby %}

	useradd [options] username
	options：
   		1．-u ：UID
    	2．-g ：GID
    	3．-d ：ユーザーのフォルダー、デフォルト/home/username
    	4．-s ：ユーザーのshell環境
    	5．-G：ユーザーのグループ

{% endhighlight %}

例：

{% highlight ruby %}

	root@ubuntu:/home/xtwy# useradd -u 1988 -g 1000 john
	root@ubuntu:/home/xtwy# tail -1 /etc/passwd
	john:x:1988:1000::/home/john:/bin/sh
	パスワードを変わるため
	xtwy@ubuntu:~$ sudo passwd john
	[sudo] password for xtwy: 
	Enter new UNIX password: 
	Retype new UNIX password: 
	passwd: password updated successfully

{% endhighlight %}

分かる：

{% highlight ruby %}

	usermod  [options] username
	options：
    	1．-u ：UID
    	2．-g ：GID
    	3．-d ：ユーザーのフォルダー、デフォルト/home/username
            -m と-b 一緒に使う時がユーザーのフォルダーごと移動することになります
    	4．-s ：ユーザーのshell環境
    	5．-G：ユーザーのグループ

{% endhighlight %}

例：

{% highlight ruby %}

	//フォルダー/bin/shに/bin/bash
 	root@ubuntu:/home/john# usermod -s /bin/bash john

{% endhighlight %}

削除：

{% highlight ruby %}

	userdel   [options]username
 		options
 		1．-r ：ユーザーフォルダーまで一緒に削除

{% endhighlight %}

例：

{% highlight ruby %}

	root@ubuntu:/home/xtwy# userdel -r john
	root@ubuntu:/home/xtwy# cd ..
	root@ubuntu:/home# ls

{% endhighlight %}

* ユーザーがログインしていない時削除できません

---

### ユーザーのタイプ

/etc/shadowでは記録しています

{% highlight ruby %}

	root:$1$.TZS2yur$uQ3.5XLbdEhLkak9HKqZx/:16042:0:99999:7:空白:空白:空白
 	1           2                            3   4   5   6  7    8   9
 	|           |                            |   |   |   |  |    |   |--保留
 	|           |                            |   |   |   |  |    |--ユーザー無効になる時間（/天）、1970年的1月1日からの日数
 	|           |                            |   |   |   |  |--最大の日数を超えた場合、何日このユーザーを禁じること
 	|           |                            |   |   |   |--何日前でユーザーにこのユーザーがもうすぐ無効になるアラート
 	|           |                            |   |   |--次パスワードを変わるになる最大の日数
 	|           |                            |   |--前回パスワードを変わる時の時間
 	|           |                            |--前回パスワード変わる時の時間（/天），1970年01月01日からの日数
 	|           |--パスワード（/etc/passwdのパスワード）、"!!"つけている場合、ユーザーを禁止されている
 	|--ユーザー名（/etc/passwd記録したユーザー名）
　	4、5、6、7、8は空白の時、このアカウント永遠に使える

{% endhighlight %}

---
	
## グループ

追加：

{% highlight ruby %}

	groupadd [options] グループ名
	options：
 	1 -g GID:グループの認識ID（GID）。

{% endhighlight %}

例：

{% highlight ruby %}

	root@ubuntu:/home# tail /etc/group
	.....................
	xtwy:x:1000:
	sambashare:x:122:xtwy
	root@ubuntu:/home# groupadd john
	root@ubuntu:/home# tail /etc/group
	.................
	xtwy:x:1000:
	sambashare:x:122:xtwy
	john:x:1001:
	//gidを指定する
	root@ubuntu:/home# groupadd -g 1011 john1
	root@ubuntu:/home# tail /etc/group
	................
	john:x:1001:
	john1:x:1011:

{% endhighlight %}

変わる：

{% highlight ruby %}

	groupmod [options] グループ名
	options：
 	1 -g GID: 新しいGID
 	2 -n : 新しいグロープ名前

 {% endhighlight %}

例：

{% highlight ruby %}

	root@ubuntu:/home# groupmod -g 1002 -n john2 john1
	root@ubuntu:/home# tail /etc/group
	.....................
	john:x:1001:
	john2:x:1002:

{% endhighlight %}

削除：

{% highlight ruby %}

	groupdel グループ名

{% endhighlight %}

例：

{% highlight ruby %}

	root@ubuntu:/home# groupdel john2
	root@ubuntu:/home# tail /etc/group
	....................
	xtwy:x:1000:
	sambashare:x:122:xtwy
	john:x:1001:

{% endhighlight %}

---

### グループのタイプ

/etc/groupでは記録しています

{% highlight ruby %}

	root:x:0:root
 	|   | |  |--他のグループ（“,”で分けます）
 	|   | |--GID
 	|   |--グループのパスワード
 	|--グループ名前

 {% endhighlight %}

/etc/gshadow

{% highlight ruby %}

	root:空白:空白:root
 	|    |    |    |--他のメンバー（“,”で分けます）
 	|    |    |--管理員（“,”で分けます）
 	|    |--グループパスワード（難読化）
 	|--グループ名前

{% endhighlight %}

* chgrp:グロープを変わる

---


## 権限

![My helpful screenshot]({{ site.baseurl }}/assets/20150823140919718)

* chmod a+w hello1.txt
* chmod a-w hello1.txt
* chmod +w hello1.txt
* chmod 611 hello1.txt  r=4,w=2,x=1


---

## その他


### ASL
	
{% highlight ruby %}

	setfacl --modify（-m) ugo:name:permissions file-list

{% endhighlight %}

### 圧縮

{% highlight ruby %}

	bz2

	tar

	gzip

	tar.gz tar -zxvf

{% endhighlight %}

### 管理

{% highlight ruby %}

	whereis

	which

	locate

{% endhighlight %}
	



 
