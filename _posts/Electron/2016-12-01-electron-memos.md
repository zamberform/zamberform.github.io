---
layout: blog
title:  "Electron+VsCodeの初心者"
date:   2016-12-01
category: Electron
background-image: https://blog.matsu.io/img/1/renderer_process_click.png
istop: true

---


## 開発ツール

Visual Studio Codeで構築した、現在npm startでやっています。

TODO:Debugできるように作りたい


---

## 開発環境

npm install 欲しいのmodule

npm startで効果を試し

---

## リリース

electron-packager . --overwrite --platform=win32 --arch=x64 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds

electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds

注意: macでwindowsのアプリを作る時が、wineというwindowsの仮想マーシン必要になります。

ソースを隠す場合

electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds --asar

これでソースの部分がasarのパケージになります。
