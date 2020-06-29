---
layout: blog
title:  "Jekyllの開発メモ"
istop: true
background-image: https://jekyllrb-ja.github.io/img/octojekyll.png
date:   2015-12-02
category: Github

---

## 準備

まずGithub PagesとJekyllを知るべき

### GitHub Pages

認識できるのは`ユーザー名.github.io`
だけになります。

プロジェクトによって分けたいので

repositoryを作るときが自由だが
branchとして認識するのはgh-pagesだけになります。

便利にコミットなどの作業をしたいので。
[Github Desktop](https://desktop.github.com/)ススメです。

Gitをメモするために、以下に記録します。
	
{% highlight ruby %}
git clone https://github.com/username/username.github.io/project
cd project
echo "Hello World" > index.html
git add --all
git commit -m "Initial commit"
git push -u origin gh-pages
{% endhighlight %}

### Jekyll

プロジェクト分けているので、重要なのは`baseUrl`
の設定。

ロカールで確認したいときが。`jekyll serve --watch --baseurl ""`
で動的に見えます。
だたconfigファイルが変わりましたら、再起動しなくちゃいけない。

コマンド：

{% highlight ruby %}
	gem install jekyll
{% endhighlight %}

実装いたします。

* `sudo !!` 前のコマンドをスパーユーザーで実行する

---

## 実装
	
Jekyllがたくさんのテーマがあります。

[Jekyll Theme](http://jekyllthemes.org/)からコピーして、ライセンスを書いていて、基本的に使える。

---
	
## 運営

基本的にPostを書き込む。

### Postルール

* `年-月-日-タイトル.md or 年-月-日-タイトル.markdown`のルールで記事を書きます。
* カテゴリーでメモを管理します、フォルタ分けて管理した方がいいと思います。
* 各テーマによって、書き方によって表示が違うようになる

* markdownの書き方が多いので、重要なのを覚えましょう

	##が父親タイトルになります
	
	###が子供タイトルになります
	
	＊がリスト系よく使う文章になります
	
	など

### CNAME

自分のdomainと一緒につけたい

名前.com　の場合

DNSレコードで以下のものを追加すれば

{% highlight ruby %}
ホスト名　　　　TYPE　  TTL　  VALUE
自分のホスト　　CNAME   300   ユーザー名.github.io
{% endhighlight %}

有効にすれば大丈夫です。

* `baseurl` の設定を削除してください。


 