---
layout: blog
title:  "Flutterビルドメモ"
date:   2019-11-11
category: Flutter
background-image: data:image/png;base64,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
istop: true
key: "Flutter"

---

# Flutter

[Flutter公式](https://flutter.dev/)から入門できます。

一言で「Dart言語で、ほぼすべでのプラットフォームやOSをサポートできるフレームワーク」です。

Flutterには独自の描画システムあります、こちらのUIとアニメーションの組み合わせで、サービスの全般開発できるようになります。（ゲームはやっぱりUnityですがw

まだ、Flutterの仕組み上、FlutterからAndroidのkotlinやiOSのSwiftに簡単に呼べることができます、その逆も。

Flutterだけでアプリを作れるし、iOSやAndroidのネイティブアプリでFlutterの画面を搭載することができます。

私の方が今年の9月からずっとFlutterを使ってサービスアプリを開発しています。
ちなみに、私は`AndroidStudio`派です〜

---

# 環境分け

開発の規模によって、`DEV環境`、`STG環境`、`PROD環境`分けることが多いですね。

お主に参考できたのは

iOSの方は:

monoさんの[Flutterで環境ごとにビルド設定を切り替える — iOS編](https://medium.com/flutter-jp/flavor-b952f2d05b5d)

と

skycat_meさんの[FlutterでFlavorを使って環境ごとに切り替えてビルドする(debug/stg/prod)](https://qiita.com/skycat_me/items/0a0f5e3982fbfca14444)

です。

Androidは簡単なので、ほぼすべでの技術文は軽く書いていて、私は参考になったのはこちら:

ko2icさんの[flutterで本番/ステージング/開発を切り替える](https://qiita.com/ko2ic/items/53f97bb7c28632268b5a)

です。

---

# ビルド

アプリ開発なので、最後はAndroidでは`.apk`バイナリー、iOSは`.ipa`バイナリーを作るのはゴールです。

flutterのビルドの流れは二つ分けています、ここはリリースモードだけにしたいと思います。（製品はこちらに関わりますから、重要です。

```
1,DartコードをDart-to-JavaScriptというコンパイラーで最適化します（結局JSかw）
							 ||
						     \/
2,ビルドしたものはネイティブ共通の.soのライブラリーとしてを作成（CrossPlatform）
						     ||
						     \/	
3,Android(bin)やiOS(.app)の実行可能なファイルになります（コードサインとか）
			    			 ||
						     \/	
4,バイナリーを圧縮し、各ストア指定のサイン済み	のファイルを作る（ファイルサインとか）
			    			 ||
						     \/	
5,リリース                    （完了）
```

上記を踏まえて、shellベースのローカルビルドできるようになります。

## Android(.apk)

同じくGoogle製のため、一発でビルド可能になりますね。

```
flutter build apk 
--release 
--flavor [flavor名前] 
-t [dartのメインファイルパス] 
--target-platform [android-arm,android-arm64の中を選択] 
```

- `split-per-abi`:android9か10から機能によってバイナリを分散してDLできるようになりますので、サポートしていないならば、つけないでください。

成功したら、産物は`android/build`の中にapk出来上がります。

## iOS(.ipa)

```
flutter build ios --release 
--flavor [flavor名前] 
-t [dartのメインファイルパス] 

cd ios # できた実行可能な.appファイルはここにいます
# この時点はflutterと関係なくなりました。

xcodebuild -workspace Runner.xcworkspace 
-scheme [Xcode設定のscheme名前] 
-sdk iphoneos # もちろん実機です、シュミレーターでやりたい場合、指定できます
archive -archivePath $PWD/build/Runner.xcarchive

xcodebuild -allowProvisioningUpdates -exportArchive -archivePath $PWD/build/Runner.xcarchive -exportOptionsPlist [exportOptions.plistファイルパス] -exportPath $PWD/build/Runner.ipa
```

成功したら、産物は`ios/build`の中にipa出来上がります。

---

# 経験まとめ

Flutterやり始め、全部一から手を動かしています、最後の成果物として明確し、ちゃんとゴールできるようになります。

こんな中に色なものを勉強になりました、Flutterを通して、システムとしてのアーキテクチャーとか、設計のパータンはとても重要なことと思いました。

今回みたいに、環境分けから、成果物に結ぶ流れは最初にやるべきことですね。
開発や管理は進みやすくなり、確認もスムーズにできます。

これからもFlutterちゃんと続きます。
---