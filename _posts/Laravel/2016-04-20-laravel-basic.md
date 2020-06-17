---
layout: blog
title:  "Laravelのちょっとだけ"
date:   2015-12-01
category: Laravel
istop: true
background-image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/LaravelLogo.png/1200px-LaravelLogo.png

---


## Artisan

{% highlight ruby %}

php artisan list
php artisan help migrate
php artisan migrate --env=local
php artisan --version
php artisan down(503ページ)
php artisan up
	
php artisan controller::make [controller名]

{% endhighlight %}

## Blade

ページみたいな存在、phpの言語サポート

## Migration

関わる：app/config/database.php

作り：
	
{% highlight ruby %}

php artisan migrate:make [table_name]
	
{% endhighlight %}

産物：

app/database/migrations:*.php

データベースに反映：

{% highlight ruby %}

php artisan migrate

{% endhighlight %}

* migrate:rollback が安全

## Eloquent=Model

画面(Blade)とコミュリティとる

## LifeCycle

１、入り口：public/index.php

２、bootstrap/start.php。.envの設定を導入

３、framework/start.php。configを導入

４、app/start:global.php local.php artisan.phpの初期化

５、app/routes.php

６、Requestの処理になります

## Events

before,after,finish,shutdown

## Route

{% highlight ruby %}

	Route::get
	Route::post
	Route::any
	Route::filter
	Route::when
	Route::group
	Route::model
	Route::bind
	Route::controller

{% endhighlight %}

## Logging

{% highlight ruby %}

	Log::info
	Log::warning
	Log::error
	Log::listen

{% endhighlight %}
