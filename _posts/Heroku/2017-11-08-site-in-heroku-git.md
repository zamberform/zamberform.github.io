---
layout: blog
title:  "Herokuでサイトを公開"
date:   2017-11-08
category: Heroku
istop: true
key: "Heroku"

---


## 紹介

クライドサービスがものすごいスピードで成長しています、ゲーム業界も多く使われています。

一番言えるのは誰でも知っているAWS、GCSなど、Herokuがその後かな？
HerokuがFlaskなど、Pythonで作ったものに適用性が高いと思います、何より、最初の一本が無料です！やるしかない。

---

## 手順

### 先ずはCLIツール

{% highlight ruby %}

	brew install heroku

{% endhighlight %}

### Herokuログイン

{% highlight ruby %}

	heroku login
	
{% endhighlight %}

### デプロイ

{% highlight ruby %}

	mkdir [heroku-app]
	cd [heroku-app]
	echo .python-version >> .gitignore
	git init
	
{% endhighlight %}

requirements.txtに 依存ライブラリを記述

{% highlight ruby %}

	pip install gunicorn # web app. server
	pip freeze > requirements.txt
	
{% endhighlight %}

runtime.txtに pythonのバージョンを指定

{% highlight ruby %}

	echo python-3.6.* > runtime.txt
		
{% endhighlight %}

Procfileファイルを作って、 webアプリの起動方法を指定

{% highlight ruby %}

	echo web: gunicorn app:app --log-file=- > Procfile
		
{% endhighlight %}

* このProcfileファイルはHerokuのほかのAdd-Onにも関連あります。

以上は準備完了、デプロイ

{% highlight ruby %}

	heroku create <app-name>
	//もしbuildpack のエラーで怒られたら
	heroku buildpacks:set heroku/python

	//ここからgit管理なので
	git add -A
	git commit -m "deploy heroku"
	git push heroku master
	//ここまでのgit
	
	//起動コマンドなので、どこでも実行できます、Gitの前でも、自動的に反映します。
	//ちなみに、このscaleはdyno数です、１まで無料みたい
	heroku ps:scale web=1
	heroku open
		
{% endhighlight %}

最後のサイトはhttps://[app-name].herokuapp.com

### Tips

Herokuを開発する際、すでに公開していますので。もしローカルで更新ある場合、できるだけ、

{% highlight ruby %}

	heroku local
	
	....
	
	heroku open		
{% endhighlight %}

の形でまずローカルでテストを行って、確認終わったら、Gitでpushするのは安全かと思います。

ログを見たい時が
{% highlight ruby %}
	heroku logs --tail		
{% endhighlight %}

HerokuのAdd-onを使いたい場合

{% highlight ruby %}
	heroku addons:create [add-on name]
	...
	//確認
	heroku addons
	...
	heroku addons:open [add-on name]	
{% endhighlight %}

HerokuのコンソールでPythonコマンド打ちたい場合

{% highlight ruby %}
	heroku run python manage.py shell
{% endhighlight %}


## 自作サイト

[開発ツール群](https://super-tools.herokuapp.com/)を公開しました、ブログで宣伝しようと思います、よろしくお願いします。

