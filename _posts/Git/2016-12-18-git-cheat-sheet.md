---
layout: blog
title:  "Git メモシート"
date:   2016-12-18
category: Git
background-image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6UBC_28_i5Rjbi5x-3nr23MHqCQNB2qyNmIPVNl07TPpgGze
istop: true

---


|                        Gitコマンド                   |                                  動作                                 |        分類         |
|:---------------------------------------------------:|:---------------------------------------------------------------------|:-------------------:|
|                        git init                     |                             .gitファイル作成                           |         初期化       |
|   git config -global user.name "yourNameInGit"      |                             ユーザー名前設定                            |        初期化        |
|   git config -global user.email "yourEmailInGit"    |                             ユーザーメール設定                          |        初期化        |
|        git config -global color.ui "always"         |                             gitの色付機能                              |        初期化        |
|                 git clone \<url\>                     |                             urlのgitをクローンします                    |        REMOTE       |
|                 git clone \<url\>                     |                             urlのgitをクローンします                    |        REMOTE       |
|         git remote add <プロジェックト名> \<url\>       |                             他の関連gitプロジェクトで導入                |        REMOTE       |
|         git remote rm <プロジェックト名>              |                             他の関連gitプロジェクトで削除                |        REMOTE       |
|         git branch -r                               |                             リーモートブランチリスト                     |        REMOTE       |
|         git remote prune origin                     |                             すでに存在していないブランチを削除            |         REMOTE       |
|         git fetch \<remote\>                          |                           リーモートのソースをゲット、マージしない         |         REMOTE       |
|         git pull \<remote\>                           |                           リーモートのソースをゲット、マージする           |         REMOTE       |
|         git pull --rebase                           |                           リーモートのソースをリベースする                |         REMOTE       |
|         git pull origin master                      |                           ソースをリーモートにコミットする                |        REMOTE        |
|                 git commit -m "説明" -a              |                           全ファイルをコミット                          |       コミット管理    |
|                 git commit -m "説明" ファイル         |                           指定フィアルをコミット                         |       コミット管理    |
|                 git commit -m "説明" -a              |                           全ファイルをコミット                           |       コミット管理     |
|                 git commit -m "説明" ファイル         |                           指定フィアルをコミット                         |       コミット管理     |
|       git add filename.txt                          |                           指定フィアルを追加　              　   　       |        ファイル追加    |
|       git add *.txt                                 |                           指定した一類のファイルを追加                     |       ファイル追加     |
|       git add .                                     |                    指定したフォルダーのファイル、空フォルダを無視            |        ファイル追加    |
|       git add -u                                    |    　               ステータスを更新する、追加ステータスなし          　　   |       ファイル追加     |
|       git add -A                                    |    　                    すべてのファイルを追加する                 　　   |       ファイル追加     |
|       git tag \<name\>                                |    　                   最後にコミットした内容をタグを付ける         　　   |        タグ管理       |
|       git tag \<name\> \<branchname\>                   |    　                  指定しているブランチにタグを付ける            　　   |        タグ管理       |
|       git tag \<name\> \<commitid\>                     |    　                      コミットidにタグを付ける                　　   |         タグ管理      |
|       git tag                                       |    　                         全部のタグをリストする　             　　   |         タグ管理      |
|       git checkout \<tagname\>                        |    　                  指定しているタグをチェックアウト　            　　   |        タグ管理       |
|       git tag -d tagname                            |    　  　　　　               指定しているタグを削除        　　　　　　　   |        タグ管理      |
|       git tag b1.1 1.1                              |    　  　　             タグを付けてブランチを作る         　　　　　　　     |         タグ管理     |
|       git checkout -b b1.1 1.1                      |    　  　　              指定しいたタグをチェックアウトする　　　             |         タグ管理     |
|       git push origin \<tagname\>                     |    　  　　             リーモートにプッシュする    　　　                   |        タグ管理      |
|       git push origin -tags                         |    　  　　            全タグをリーモートにプッシュする 　　　                 |        タグ管理      |
|       git stash                                     |    　  　　            現在の状態を保存する            　　　                |      ステータス保存  |
|       git stash list                                |    　                  現在ブランチ保存のステータスリスト    　　　            |      ステータス保存  |
|       git stash apply                               |                       保存していた内容を復旧する、保存内容は削除しない         　|      ステータス保存  |
|       git stash drop                                |                       保存していた内容を削除する            　               |      ステータス保存  |
|       git stash pop                                 |                      保存していた内容を復旧する、保存内容は削除する　         　|      ステータス保存  |
|       git branch                                    |    　  　　            ブランチをリストする            　　　                 |     ブランチ管理     |
|       git branch -a                                 |    　  　            全部のブランチをリストする         　　　                |     ブランチ管理     |
|       git branch \<branchname\>                       |    　  　           ブランチを作る         　　　                           |     ブランチ管理     |
|       git checkout \<branchname\>                     |    　   　            指定ブランチをチェックアウト                      　　　|     ブランチ管理     |
|       git checkout -b \<branchname\>                  |                  現在ブランチをベースにして、指定ブランチをチェックアウト        |     ブランチ管理     |
|       git merge \<branchname\>                        |      現在ブランチを指定ブランチにマージする、コンフリクトないの場合、自動コミット　　|     ブランチ管理     |
|       git merge \<branchname\> --no-commit            |                 現在ブランチを指定ブランチにマージする、自動コミットしない       |     ブランチ管理     |
|       git merge --squash \<branchname\>               |                 現在ブランチを指定ブランチに合体する、自動コミット　　　　        |     ブランチ管理     |
|       git merge --squash --no-commit　\<branchname\>  |                 現在ブランチを指定ブランチに合体する、自動コミットしない　　       |     ブランチ管理     |
|       git cherry-pick \<commit id\>                   |                     コミットしていたものを他のブランチに移す                    |     ブランチ管理     |
|       git branch -d \<branchname\>                    |                 ブランチを削除、合体していたものだと、失敗する                   |     ブランチ管理     |
|       git branch -D \<branchname\>                    |                       ブランチを削除、どんな場合でも                           |     ブランチ管理     |
|       git branch -m \<currybranchname\>  \<newname\>    |              ブランチの名前を更新、存在した同じ名前ブランチを上書きしない       |     ブランチ管理   　　|
|       git branch -M \<currybranchname\>  \<newname\>    |               ブランチの名前を更新、存在した同じ名前ブランチを上書きする        |     ブランチ管理   　  |
|       .gitignore                                    |    　  　             無視するファイルなど、正規表現通用  　　　                 |      git ignore  　   |
|       git status                                    |    　  　            現在のファイルステータスをリストする 　　　                  |     　ステータス 　　 |
|       git diff                                      |    　     　           ファイルのステータス詳細を観れる 　　 　                  |     　 ステータス 　　 |
|       git branch -v                                 |    　 　    　         ブランチの最後のコミット　　　 　　 　                    |     　 ステータス 　 |
|       git cat-file -t                               |    　 　    　　　　    git対象のタイプ　　　　 　　 　                         |     　  ステータス 　 |
|       git cat-file -p                               |    　 　  　　  　　    git対象の内容　　　　　 　　 　                         |     　  ステータス 　 |
|       gitk                                          |    　 　  　　  　　    gitのGUI、エンコード指定できる　　　　　 　　 　          |     　  ステータス 　 |
|       git log                                       |    　 　  　　       gitのログを観れる、--graphでgitkに変換できる 　　 　        |     　  ステータス 　 |
|       git archive --format=zip head>nb.zip          |    　  　            リリース用にパケージを作る　　　        |     エクスポート     |
