---
layout: blog
title:  "Flutterのwebview"
date:   2020-02-19
category: Flutter
background-image: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABwlBMVEX///8AAADKy8tUxfhnOrcptvYBV5sLVL/IyclNK4n7+/tkNLbf39+KcMBhYmLOz89YMZ36/Pj08/c5AH9ZWlpEwfjY2Njz8/PZ3/EARbvr6+u0tLRLTEwnoMnj9f5WgrN5eXm9v75wcHBBQUELDAyam5szNDQZGhorYsOoqKjl5eUJR5+Cg4QAT5d8Wr+MjY0LlMiVlZVAS5VuQHSCOmSbNFN5PWugM04kJCQuLi6S2PozufYLSIEAPXwkU6tNSI2SN1qp3/s5TZpbRIKKOF5gQn2tL0SkwMRny/mlsrsARJNfQ36XNlZrQHeKbMWWfcpcJrPFuOC0o9iLt8KD0/pvr8LM7P265fzr295Adat+PGeoETCvL0O0DSiYJjWPfrEgAG8yACJNAABOACmBbqlsVZigkb5CGINuIDRfABKBRWTHv9ddQJSon8BCADXMt7lrME5kS5avoLOlh41NHpddG1TEnaKZY4C/kph7EUZ1LWSLHTh2UL2lkdGHACa+sdxOsNIRe6oGL12Dm6oAXJQOSnMEJ1CrwNYUP5s6OIdOMnhgLGt4JVk8UHxGYp57iadzmcIZEgAACy1daZABEB5RVWmiUSLlAAASkElEQVR4nO2dj4PcRnXHR8LYsqxoqCOPgqQU/d5Klk/ehCS7xElzJJDGCXe+c90CgZi2sQ24KdCkFMe+2qQhBAhJgfb/7fzUj5X27nZP69Xe7de+u9FIK2k++96bNyNpF4C1FqDzR5FpmufPL7sFj0vnb9558gj60T/980/+5Ud33n1q2e14HLp769a7N2//4uycunMXqD/+yU/P3jx/e9ktWbzuPnn39u3bN9+dF9bZfwXv/dvPvJ+/B558b9ltWbTUO2fP3rp16+bcrM6e/cWdV//9/ffff+/sk8c9cu188JUOdOc/3v/ZT+98cNwd8Ylzp7rQVz785S//84MHy27NgrXRDSxM61e/uvfBsluzYFFYVWDnsIriTLTu37+37NYsWATWua2Cysa5rY3tbVx57sGDc1tb57hOib8H0Fp2axYswmV79wFv8LWntnZ2N+4+2D21u72zcXdvaw+z23pi69z29hN4YW9jf1r/tezWLFgE1s7DXU5h4y4uX3v4cBfz2n64vbN3d29nb2d359rOxsPdnb3t3QNsa9mtWbCIG17bu8Zae2771N7e9rW9jd2th9sb27u7ezun9h6Qxd29vd29ra3t/aPYtWW3ZsGqB3ganESAIrqGq67tlTX7sjoZsA7QoTvF4w+rQx13WHtPdKitZbdmwfqrTrXs1qy11spKxarXaBaAIDU127ZsDyRpaiIVesBKzdSEuAhVVH8B3mpSJlFZrtSqjW3JSTRWVHdQbGKy+sM3rmthJnZaq/GHwAcJVDMIszSHUaJkmmOrQx/4kaYrnptrte0V1ZQn9yphjWgpoUWK1yRFt+0kbLxiWKvRybbV45BlCYAx/m3N3MiupCV2Umu8GgTABTYCkYl8zQepnRmpp6uOA1wd5AZInfoeUjuZMDUADNY0zgqLmAMihaTtJAisqFajSHV+Ggcd8H0tRyhJ6rA8JUFO7vmebWp6lOqRlyap68JE8ZQIaC5Q84ldqGrDDzMByOewFLJnUWioCYtaUlwuRvy1y4W1GFGDIvbmcFiJqEzbNm+BRf2wdLiYm6oeBOPjBot6EbG3AYdFrDEnhdYA3wLLrvmsRZb0RZ7xEpVKvPmcFW0occmwdfMWWLQ3MMQSNUp7gSe8TKk8HtMmhzz8BJXmW3amG37Ogx2BNdYNIj3nvYUjwh6RIYzSNQyHV6YJ2cWQB0GxQgnw4UYuqRriqnrHfaQmdararke4cQ63MJfHG/InY+00hMUxT7Olqtg2ifBkwNnTTjgQkQwFxfZ0I2K2kB+QvVE0zi0vzZhBhMYAAEgbw22kYKNU0fhgEhbzyFSsBLwfpS8VvWEyuf2Q+WlRD9jxltH2mZWxM6UUaHTWWJAmVsDf/cBh0V9pwGK9wLhsLE1AqJFwWJBt5/DONmW7yHknwl5IQkA89QT7JJ4mkPRoDBglyJixaBTQUGORBMFgLc00hGXHhRERW5HY2EAq2s1hkTCo0+Cmkb1lLOPVy7wOo+U1KyCFtZQYmMP9z+M2k5buxRpf7w0DsZom/DR+wcI3OSyPmRFTSEFyOyLujxz6rtQ26rWoq9k0tXRpCzOWhANmdJ5pUZkZbXwVFqTGSCRiD/Np1q8xWKTLQBbfhVGNUMR3TZ86dyStTLYh0fc1oBSYszErA7SlNdVhlXGZbkh8jTgdG5ZzWM7kLoo1ZFN6JJu+HD7+hs+jAfWmAT3tjDaWWRkfyOwDKxSwxGBak0qHYkjGLbB8SpYuRHR3hOhKZA4seAT03CGL9jTtifiaQ1mWiOtDqbQRBmswuQvAtvJI5BrznrGA3n+xeQeJvrseLZOTJ5kDMQHdLeWrNVjkNQNW5IPpSg7BYdFOoLILF/BOgoRKh5qkD6TuM4c4HAwGhi0rR1Jzv9SaqCOprDejZRKlc6nIzIWqsMgLeY9PISe1OUMGi1CcnL4gnaeLKCby27Ck7jOHsRSGg9HAhvIR1AJLJk10mJXQdDRgHscR1KcLK7AYIFamoxyDZqziCAwWTd8m4hFlSvwzY8cbSN1nDmO81zCM46OwaoMlBmmkA1SrsYWnBLHPlXNYtMIIJcGUyKm/sIBFaUiB2EVS7pZRF8WuM4eRnjuOOwiio5hW2/SnOGGSYIa8HNA19cFN0KgpDaIY6RX+xDP4vLa9W6zihMSKrjMHHD3Hg1EYuF3DEp1eUim7Ewy45bXgY7JEVRHjxEC6RovtNuNLqLTI1pnGI8EKsaRY7xqWapQ2YbJyINzLGpYTLA3Lyio74ViL0VF5dSfNymSLrU7LBVR7b7qH5RyBVSsscvppEYRVDaL63LlFB84IkV7NRKUmrMFiWwiRFzV2wY9iJXkWMc8zcXHYvJx5VAlYwQJgHTtNtSyoKDXPVDylnRSEJwbWiLl3ExYOCUaFFtSlpDWsKYl9YmA5cYA1moQF6YSKV6lwR+2JqycF8KTA8nWioAFLl/xAyggeMpyBtABZUaEOSoc5MpRtKTgxljUNViglLrYZ6o44FbOJG1JrC8g8kS5Dmg0M7IRc6RoefJxjoXZYECc42GaIH0qhrjvSAMOycynARfxrLPnIj+N4LDn2SBqMo4OPcyw0BZYvOYo3kIZQlmIEUSB5PoE1RGgsydCTYghxggMxREVy0Ml2Q0g7yZD0h5gL8TkGK4cwlnC8wgSjwWAQYlgkwHtdjyt6qlZYsBh/KAyWU8IilkVgYfcbDASs43ZjyxQJWIFXhYVjO8I9oCRFcAosGXsfQiGB5Zyc1MEwWmDFNGvA3qdDadwKCw6k0WhELatxB8yxled5TVheGNo0Mw3HcOBUYtYQwiDEMSsM0HCAYY3GeN0gPCmw8JBPNyZhsSSU4IK8CEn+KbMiq8c/RPTvSXFDrw3WrFrDWsNqSMBypkzALA3W5pem6BsLONghVcA6AqtFwNq80I7qwhJZ9RVWL1lNhQW5WLm24jHA6icrAWs8CYvdQ5BFOMlK3LwEZLtZk1bXsHrKisPCabws7IjZjxgcxgrM6LwWr49w0r5oWH1lxWH5zpBeVKrCGsRxHJJbNyPDrcIaLRpWb1lxWM5YR5OW5eMaJZYkhdQrJLNQIIFFxopsm+JXp7D6y2pagCewyPgmlyQvlwLELpeHCYWlsJv3xokM7aDr6+Tf6C8rAWswHRYeP+uI30gQElhI3D8dKl7nNxX0mZUI8GacWvRyDfmnIUUmdyngRQIrkxDybKwEL+AAj0JJwUtklStJuecl3cHqNSsBS3VSS1NTC5owVVRTU20MSzNVpDmm6UJkmrZpWlpum3amphnQlFQdRlYaBjiieZ3B6jcrAQtA1QIepgUszEFTvTTQQZqmSRIB11Isy1ZSyRxZGjQ9zXOx0Wmp6SHVILNdncHqOavCskappUKA8D+oWKkKzRGBZRFYSapYmu5agRlbSMmS1HMB7gCRSmDFHcLqOyuROiQB0pCJFMxFkSH2RlfSU4g83fcBCiIU2bKFzDhK0qGvZU6SwhRGrgJjMtPcEazesxK94Yj0hopM4zstSOLWRhdkkoMCKSRT7iTAj5AusScuJUUhl8zCsBNY/WdVTv41UgeWHfiyTIY7EYeXkN7Q47fe4FGi11metQKsioG0SbJ0xZRZ/qAoXkKlQgV3krYpA5hoKUxUXK+ZCl3nkUQM2jisdQBrFVhxWHFmWsgykaVZ5ENUcAn3iqqmmTjcAwVpaQoQLpgaDlx4Q6Sm0DQ17K2e7XleB7CmstrsopFdCccnDGuMMoDju6XibAEnXKllmRBoQJVVCIGM0y5oKhiWhpmlQLNUkoqlKe4Kgm4y+NVgBXDPL/IsDkuz8B9iWwgzIpYFMR2kYliQG5yFIXJYOrkXLjYOPs6+WhFWDJaRD2NkpZiKhsg/y9KIw+FkwsLrTeyXEA+GLOx4xA01XK/Jpolh8QnVxgf3zKZVYcUtK8apAw3sfH6Kh3k+M8NGjDIfOrJfyFTLCZ2jTdGsDCsOKxgExaWwElhjkq824VdZfSRYq8OKw3Jwh8cMR8aeRjjgoXOqEhPSZE2pGF07uCOcwAqxEgFeHQOYWngMoykaSjEvzVKgqkHc/1lsTboPrSPAWiVWRW+IcCeH+0E2jEamogGcMJiIfIQdzrxMvGIhlrVSrAQsc6BaKTJTCsuEKrMsCkvGsDRNJb74utCEU84Na7VYAS+hsKzUkk2V5KUKTrRwooALOK0iuDT8Q+oV+frTXF3BWjFWwLaL3pCnCCLQyzxPYD94sWTVkRv+/YqxwrDkQ93rULUreTLWzwdr5VgdGtZ+rOaDtXqsRFK6P6x6vGpZP8eBV5DVfrAqw5l94tWcsFaRlUgdDAOS6/fkERPyh91kC1kZV73+9KOnHxHJTR+cC9ZKshLDHd0lzxvLBA2Whigs9gQy/vP6Iw7LK28dKT8uZA5Yq8lKuOHYkaek6Eq9HxSGJT63L9Kz2R/7XVFWBwf4KfFKkdiDrXAOWIdj9dfT1GXzZ9PBvWHByqvNyki2LGDN+NDA4Vj93YUp+sdO2z+TDoDVblckUlVgOTM9yXpIVu0bfenCP3Tb/pl0kGVVWSk3uK7LBBaN7hgWCmb5NKEVZgVwcsBgFZlCIcLq9apd3eDlR2S4yC66GmhWWFNu7FsFVmCY546hxxL5zLG6JDr/fr0c41RZVWPWbLDaaa0EK2AEjkFhSQ0pZcwiOYNgdYNdxZgbVhutetTuKyugOwaDNTAMesXUoXdEjjE9fmXnOmP16HLFro4Eq0mrxkrtLStAP1icWlYS5V4ydPMkiaIs4bCobZG5vkeXL18u7aqeOhj+wcepaYLWqrAij/0aOoUVGZGX2Xo2cu0sGpaw6BXDpy9fprQeKZOwjAzOfk9pjdaK+CAgsMgD5TG5yaqmUMCiZBiry5cflePozKNlGCX4Z+Z7HSq06nY1JbHoBSv+9H3cDO9SFdYNxurXV97gFZaqWBClSoqgNdcUTUGrzurFL7/YX1biowoGI31SRgWWfIOxuiJoQciemWYPTs8z+cdpTbL6ciutfrAqP9cBNlQb9WBav/7oSkmrprmmlSmtJqs2Wj1hNe1Tjho45OuMVSut+S5YYFptrJq0+sKqhLX/p0niQeB/v3SF04LdXN3BtFpZTdLqDSsR4IODP3qzQqsbywKgOjVVYVWn1R9WHNYgaHk+dZIIpsX1htzR5ftSNVZVWj1ixWCN4uAwn0QN3xDqyLJKTbAqafWJVU/UYCVorVk11MKK0bqwxAn3nqqVFaG1tquG1FZURGu7amqzHdWLH39t2WfWR7XSevHjS5fWtFrURuvjS6dPr2m1qUnr4yunT69ptWuSFmO1ptWuzVZWfadl65VvkeBfS4L8XF30dwVWaf3mowJWv2m5WpIkmZq7VqLBIPVRkgE7sRNH9T3Vz61sUd+Dt1llVcI6fel7CzpgB8oNx3a9XFcyXU4cOXJ0CGzHgYaLDB8aid/6jexdSND6zSdkImglaLkIpEYUOUkUJInj24FhAtuNcif3nNx2PLv9u6C70CZn9VHFC/tNi3zli2KrgQ08O/UsG0IVWLYHPJBoZh6aCTp4H/Nqk7L6pI6q17So1NbIZEVHfGj1IG3WYvvK0FqSfnu1BdWa1hT1mdZTM0oj+i7+X1OXZ9RjWme+up/OnPlU6HdEvyf6A9aHH3742Wef3bt377n79+9/++1Ov5ahv7T+5sx+epnqm1jPPPO3WK+++ua3vvOdZ5999vnnv//1r7/22itvvfXcCy+80C2s/tLaF1aV1TOUFYclWL3y1nMYVseW1V9ah4YlDOtbTcPqHFZfaTVgXb3yx88vTsISrNoNq3tYPaU1AeuSrjtjJ//icIb1CjOsBcDCtC5NobXE7/ipwzqd++S+trGefC5YvdwWsZ6vGdYiYIHffm2K/qf7Yx1WNVgvR3549cyZi5/8KRh+8emhDesHPzwh3+hUhfXV3P3TVRa4pNiPLu1vWK8xwzqpsL5wnZd48eKfR070l0/rhvVqw7CoF/7gJMK6NPT/XCx8JIVBFn2ztSvEsCgr4YUnENbnkRteLJboYxZG9JeLhzCsEwgrceOXioUz/0tvhnfy4TPNiPV9FrEKwzp5sL7I9U+quSl7iCDWkz9ONSzB6u0fLrsVj0Hk2fqXL3K5unT1YqGrVy9R25IGQf5/1KzefJOyevbnTK/9GOs+0TvvvPM2RAguuzUL1rjtuYq5tezWLFjBGtbhtYY1g4zJ9hpZCwQ3HzQr8+Fwomaw7NYsWNEkliRvYomTSG/WRlHjxctuzYJlTiLQW2BJ2XB0GFjasluzaCUtbObUjI9Jr6ImA8/ccpfdksch1Ajy8yg4Kd8zqmpH1gn5fvK11lprrbXWOs76f2hzgRpVugKYAAAAAElFTkSuQmCC
istop: true
key: "Flutter"

---

# 背景

去年の秋からFlutterでアプリ(iOS&Android)を開発し始めた。

UIはFlutterのUIパーツでほぼできますが、どうしてもWebのページあって、あそこの部分はWebページを表現したいたりしますね。

ウェブビューの役割果たすために

- Htmlのレンダリング
- JSのサポート面
- ローディングやリソースの読み込みのコールバックイベント
- JSとDartの橋役

上記を満たせば、残りは効率的問題、
具体的にdebug機能も求めることが望ましいですが、
今のほぼハイスペックスマホ時代は、特に問題ないでしょうと思うけどね。

---

# 選別

Flutterのライブラリーは充実していて、頼りできるし、効率すごく上がるメリットあります。

[FlutterのライブラリーWebView](https://pub.dev/flutter/packages?q=webview)から検索して、`webview_flutter`と`flutter_webview_plugin`で私がプロジェクトのwebview表示として使用しようと思います。

## webview_flutter

マークは`flutter.dev`です。

つまり、Googleの公式サポートです。

もちろん、これを選ぶべきと思います。

Htmlのレンタリングはもちろん、
JSの切り替えは`javascriptMode `で一発解決します。

* コールバックイベント豊富です。

```
　onWebViewCreated
　navigationDelegate
　onPageStarted
　onPageFinished
```
　関数名から見ると、従来のAndroidのWebView感大きいですね。
* JSとDartの橋

```
　javascriptChannels
```

効率的にはさすがGoogle製、かなりチューリングしました、Flutterとの相性は抜群です。


## flutter_webview_plugin

マークは`fluttercommunity.dev `です。

Googleは政府機関に例えすると、こちらは民間機関の製品として認識した方がいいかと思います。

なので、使い勝手ですね。

`webview_flutter `にはないものは全部揃えたです、

例えば、Zoom機能とか、ローカル保存とか、何より、JSに対してのサポートは神レベルです。

実作業の時、`webview_flutter `はJSのアンカー（指定したclassやidにスクロールする機能）サポートしていなく、こちらはスムーズに動いた。

まだ、そのほか、webページでよく使われたjsのライブラリーはほぼこちらのライブラリーで動けるので、心配なく長く使えそうですね。

でも、`Scaffold`なので、Scaffold上のシェダーは加えて表示したい場合、Flutterのレンタリングで工夫する必要があります。


---

# セキュリティ

従来JS周りで、しつこいセキュリティ論はありますね。

* `webview_flutter`:`javascriptMode `でコントロールできる、まだ、`javascriptChannels `で発火イベントを捉えるので、セキュリティー面は極めて低いと思います。
* `flutter_webview_plugin `:同じく`withJavascript`でコントロールできますが、やはりjsのサポート面は大きいので、セキュリティ面は`webview_flutter `より低いです。ハイリスクと言えるほどではないです、どんどん使いましょう。


---

# 結論

両方のplugin（ライブラリー）同時にプロジェクトで利用すべきです。

両方は正式バージョン(1.x.x)は出していないので、どんどん完璧になると思います。
開発は必要に報じて、両方のパーツを使い回せば幾つの仕様に合わせます。


補足：
関数などの衝突あるかと心配するかもしれないですが、こちらの検証として、両方のライブラリーは特に衝突なし利用できます。

元々、dartはimportでパッケージを管理しているので、一緒にimportしても、名前つけると、ビルド時は名前は差し替えるので、特に心配しなくで大丈夫です。

---