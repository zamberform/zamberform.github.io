---
layout: blog
title:  "Strategyパターン"
date:   2020-06-25
category: Designパターン
background-image: data:image/png;base64,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
istop: true
key: "DesignPattern,Designパターン,Programing"

---

# 前提

デザインパターンはエンジニアとして必須なスキルです。

私から見ると、これは本当に必須です、でも、多くの人が必須というのは理解しただけで済んでしまいました。

これは試験に強いかも知れないですが、実際の作業で、結局自分のスタイルに戻って、デザインパターンなんか、すっかり忘れてしまいました。

どんな時、どんな場でどんなデザインパターンを使うこそはエンジニアとして必須の能力だと思います。


# Strategyパターン
	
[Wiki](https://ja.wikipedia.org/wiki/Strategy_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3)文から、本当になんでしょうかまじわからない。

Strategyというのは`戦略`、戦略ある設計を行うことです。

昔、戦の時、戦略は重要であることがよく聞かれています。
所謂、自分の戦力はどこに使うべきでしょうか、
自分の資源はどう使うべきでしょうか。

というのを考えて実行する。

下記の図：

戦力や資源はConcreteStrategyAとConcreteStrategyB二つあります、
では、Strategyには`判断をお任せ`、Contextに`提供すべきものを出す`の役目があります。

これは`if-else`じゃないw

![StrategyPattern](data:image/png;base64,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)


---

# クラス構成
自分なりにまとめます。

```
Strategy = Interfaceクラス + 条件クラス + 実装クラス
```
- `Interfaceクラス`:ロジックの入口と出口ですね。
- `条件クラス`:条件判断のクラス、どんな条件で、具体的の実現のクラスに当てはまるのかの役目
- `実装クラス`:実際の動き

例えば：

- `Interfaceクラス`:プロジェクトマネージャー
- `条件クラス`:サーバーリーダー
- `実装クラス`:プログラマー・エンジニア

の感じで分けれます。

----

# どこで使うべき？

Strategyは条件判断に強い設計ならば、開発時

全部のif-elseはリーファクトリーングできるじゃないですか。

と思ったことがある。

## if-else

現実にプロジェクトを開発するとき、`if-else`の嵐は珍しくないです、プロジェクト管理とサービスの運営に大きなコストを与えています。

良いStrategyを設計できたら、
if-elseの条件と結果を明確に分離できます、
さらに、プロジェクト管理や運営面に優しいです（一石二鳥効果）。

コーディングする際に、シンプルにしましょう。

```
if-elseを書きたくなる場合、Strategyをすべきだと思い出しましょう。
```

特に複雑のロジックを処理しないといけない場合、
自分だけ読めるif-elseより、
みんなが読めるStrategyの方が、素晴らしいエンジニアとして結び付きます。

## 本当に全部のif-else？

`Interfaceクラス` と `条件クラス` と `実装クラス`三つのクラスは一個の条件で作らないといけない。

if-elseの三倍ですね、コード量は確実に増えます。

if-elseを保留すればいいとか言わないです。

ここはmapや関数型インターフェイスで補充できます。

例えば：

pythonの場合、dictionaryで簡単に解決できます。

```
def checkme(queue):
  """ Consume Message """
  if queue == 'foo':
    username = 'foo'
    password = 'vlTTdhML'
  elif queue == 'bar':
    username = 'bar'
    password = 'xneoYb2c'
  elif queue == 'baz':
    username = 'baz'
    password = 'wnkyVsBI'
  ...
  dosomething(queue)

def main():
    checkme('foo')
    checkme('bar')
    checkme('baz')
```

変えると

```
passwords = {'foo':'vlTTdhML', 'bar':'xneoYb2c', 'baz':'wnkyVsBI'}
username, password = queue, passwords[queue]

def dosomething(queue):
	username, password = queue, passwords.get(queue, None)
```

わかりやすくて、コード量も減りました。

* passwords[queue]には関数も入れます。

---

# まとめ

Strategyは条件判断に強い設計パターンです。

複雑なロジックにはStrategyで具体的の実装を分けて実装した方が幸いなことです。

時にMapや関数型インタフェースで開発できるものは迷いなく使うべきです。

目的はただ一つ：
`コード量を減らして、管理しやすくなる`。


---