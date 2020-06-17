---
layout: blog
title:  "GitでのUnityソース管理"
date:   2018-01-15
category: Unity
istop: true
background-image: http://4.bp.blogspot.com/-Mtc2YFmvsXY/VlWTU5YEr3I/AAAAAAAAAE0/iQDERs9dUH4/s1600/git-logo.jpg

---


## Unityのソース

Unityがとっても強力なゲームエンジンです。毎度2Dか3Dのプロジェクトを作る時が、裏で自動的にゲームに必要なファイルを作成しています。例えば、Metaファイルとか、.bin、.dllファイルなど。

最近のゲーム開発は、まあ、一人で作るのはもう無理な状態。チームワークで素晴らしいゲームを作れることができます。その管理が必要になるのはGitは主流になっています。

私が去年からずっとunityをやっていましたが、チームの中に、確かにGitで管理していますが、色々注意事項があるので、ちょっと記録していきたいと思います。

## Git

### GLF

Git Large File Storageの略称はGLFになります。Gitで扱うファイルの最大サイズが5M超えた場合の対策になります。

基本的にゲーム開発しながら、5M超えるファイルは必ず存在しています、これらもGitでうまくコントロールしたい場合、GLFを入れなくちゃいけない。

### GitFlow

[Git Flow](http://nvie.com/posts/a-successful-git-branching-model/)の概念を使って、ソースを管理するのはすごく優れた考えと思います。チームの中にも、これを使っていました。

原因は、
masterはリリースのために存在しているのため、全ての作業はdevelopのブランチに集中しなくちゃいけないです。

[Git Flow](http://nvie.com/posts/a-successful-git-branching-model/)は、developのブランチをmasterにマージするに、この目的だけの存在。

まだ、developの下にもう一個のブランチで、すべてのブランチ（各機能）のソースを統一化してもらう。

という流れで私が理解していました。

### GitIgnore

絶対突っ込みたいところですが、チーム開発の最初の時、これを無視していまして、毎回コンフリクト発生したり、ファイルは無断に増えたり、一ファイル変更しただけなのに、なんで１０個以上のファイルをコミット状態になっているんだ。

って、今後は自分はどんな時でも、必ず、.gitignoreを追加しないといけないと思いました。

[Unity専用 .gitignore](https://github.com/github/gitignore/blob/master/Unity.gitignore)

プロジェクトの必要によって、追加します。

## Unity設定

最後にUnityの設定をしっかりしないといけないです。

バージョン４.３以上の場合：

{% highlight ruby %}

	Unity → Preferences → Packages → Repository.

	Edit → Project Settings → Editor
	
		Version Control Mode を Visible Meta Filesに変更
		
		Asset Serialization Mode を Force Textに変更
		
	[Save]

{% endhighlight %}


以上によって、Unityのバージョン管理はmetaファイルで管理し、さらに、全ての情報はテキストの形でmetaファイルに記録することになりました。Gitにはもちろんmetaファイル存在しているので、metaファイルから、直接、Unityのソースバージョンを管理することができました。

