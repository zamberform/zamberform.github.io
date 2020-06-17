---
layout: blog
title:  "android studioで.mkをロード"
date:   2015-12-01
category: Android
background-image: http://1.bp.blogspot.com/-OjHpm8o0LJ4/UAYH02TQ2kI/AAAAAAAABFw/jxU3LYFOS3w/s1600/android-mk.png
istop: true

---


android studioで自作のmkファイルをビルドする

{% highlight ruby %}

task ndkLibsToJar(type: Zip, dependsOn: 'ndkBuild', description: 'Create a JAR of the native libs') {
    destinationDir new File(buildDir, 'libs')
    baseName 'ndk-libs'
    extension 'jar'
    from(new File(buildDir, 'libs')) { include '**/*.so' }
    into 'lib/'
}

// コマンドでndk-buoldを呼ぶのと同じ感じ
task ndkBuild(type: Exec) {
    def ndkBuildPath = android.ndkDirectory.getAbsolutePath() + '/'
    if (Os.isFamily(Os.FAMILY_WINDOWS)) {
        ndkBuildPath += 'ndk-build.cmd'
    } else {
        ndkBuildPath += 'ndk-build'
    }

    commandLine ndkBuildPath, getAndroidMkInfo(), getApplicationMkInfo()
}

tasks.withType(JavaCompile) {
    compileTask -> compileTask.dependsOn ndkLibsToJar
}

def getAndroidMkInfo() {
    def androidMkPath = 'APP_BUILD_SCRIPT=' + rootDir.absolutePath + '/app/jni/Android.mk'
    return androidMkPath
}

def getApplicationMkInfo() {
    def applicationMkPath = 'NDK_APPLICATION_MK=' + rootDir.absolutePath + '/app/jni/Application.mk'
    return applicationMkPath
}

{% endhighlight %}
