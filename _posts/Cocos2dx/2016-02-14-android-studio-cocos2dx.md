---
layout: blog
title:  "android studioでcocos2dxを試す"
date:   2016-02-14
category: Cocos2dx
background-image: https://i.ytimg.com/vi/gdOkbXYsf04/maxresdefault.jpg
istop: true


---

## 方法１

cocos2dxがandroid studioのプロジェクトが作成できたため、いろいろ試した後に、下記の内容をbuild.gradleに追加すれば、ビルド成功できます。

C＋＋のdebugなどは無理かもしれないが、まだ探し中。

{% highlight ruby %}
task ndkLibsToJar(type: Zip, dependsOn: 'ndkBuild', description: 'Create a JAR of the native libs') {
  destinationDir new File(buildDir, 'libs')
  baseName 'ndk-libs'
  extension 'jar'
  from(new File(buildDir, 'libs')) { include '**/*.so' }
  into 'lib/'
}

task ndkBuild(type: Exec) {
  def ndkBuildPath = '「NDKのPATH情報」'
  if (Os.isFamily(Os.FAMILY_WINDOWS)) {
    ndkBuildPath += 'ndk-build.cmd'
  } else {
    ndkBuildPath += 'ndk-build'
  }
  commandLine ndkBuildPath, '「eclipse又はandroid-stuidoのプロジェクトの」/proj.android=build',
  'APP_BUILD_SCRIPT=「eclipse又はandroid-stuidoのプロジェクトの」/proj.android/jni/Android.mk'
}

tasks.withType(JavaCompile) {
  compileTask -> compileTask.dependsOn ndkLibsToJar
}

{% endhighlight %}

## 方法２

Application.mkの必要な部分(ABIなど)を編集して、cocosのコマンドでビルドと実行
