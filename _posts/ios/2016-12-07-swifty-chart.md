---
layout: blog
title:  "自作Chartコレクション"
date:   2016-12-07
category: iOS
background-image: https://www.mathsisfun.com/data/images/pie-chart-movies.svg
istop: true

---


## 効果

図表はよく使われているUIパーツになります。

簡単な図表をSwiftで表現してみた

Circleの図表

![Circle]({{ site.baseurl }}/assets/chart/circle.gif)

PieChart

![PieChart]({{ site.baseurl }}/assets/chart/pie.gif)

乱数の図表

![Scatter]({{ site.baseurl }}/assets/chart/scatter.gif)

レイダース図表

![radar]({{ site.baseurl }}/assets/chart/radar.gif)

---

## 使い方

Circleの図表

{% highlight ruby %}

SWCircleChart(frame:サイズ, total: 総数, current: 現在数, clockWise:時計順, shadowFlag:影効果のフラグ,shadowColor:影の色,displayCountingLabel: カウントのテキストを表示フラグ,overrideLineWidth:線の太さを自分で調整する)

{% endhighlight %}

PieChart

{% highlight ruby %}

SWPieChart(frame: サイズ, items: SWPieDataのリスト)

SWPieData(value: 数値もしくは何%, color: 表示色, description: 表示のラベル)

{% endhighlight %}

乱数の図表

{% highlight ruby %}

SWScatterChart.init(frame: サイズ)
setAxisXWithMinimumValue:Xで最小から最大まで、何分割
setAxisYWithMinimumValue:Yで最小から最大まで、何分割
setAxisXLabel:Xの表示
setAxisYLabel:Yの表示

SWScatterData:XとYの数値リスト

{% endhighlight %}

レイダース図表

{% highlight ruby %}

SWRadarChart(frame: サイズ, items: SWRadarDataのリスト, unitFloat: 割分)

SWRadarData.init(value: 数値もしくは何%, textDescription: 表示内容)

{% endhighlight %}

## ソース

[デモプロジェクト](https://github.com/zamberform/ChartCollection)を公開しています、マークお願いします