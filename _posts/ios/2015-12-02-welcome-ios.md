---
layout: blog
title:  "URLログ出力"
date:   2015-12-01
category: iOS
background-image: https://shankertiwari3.files.wordpress.com/2015/06/console-log.jpg
istop: true

---

URL

{% highlight ruby %}
	NSURL *url = [NSURL URLWithString:@"http://user:password@www.example.com:8080/hoge/fuga/index.html?a=1&b=2#test"];
	NSLog(@"absoluteString : %@", [url absoluteString]);
	NSLog(@"absoluteURL : %@", [url absoluteURL]);
	NSLog(@"baseURL : %@", [url baseURL]);
	NSLog(@"fragment : %@", [url fragment]);
	NSLog(@"host : %@", [url host]);
	NSLog(@"lastPathComponent : %@", [url lastPathComponent]);
	NSLog(@"parameterString : %@", [url parameterString]);
	NSLog(@"password : %@", [url password]);
	NSLog(@"path : %@", [url path]);
	NSLog(@"pathComponents : %@", [url pathComponents]);
	NSLog(@"pathExtension : %@", [url pathExtension]);
	NSLog(@"port : %@", [url port]);
	NSLog(@"query : %@", [url query]);
	NSLog(@"relativePath : %@", [url relativePath]);
	NSLog(@"relativeString : %@", [url relativeString]);
	NSLog(@"resourceSpecifier : %@", [url resourceSpecifier]);
	NSLog(@"scheme : %@", [url scheme]);
	NSLog(@"standardizedURL : %@", [url standardizedURL]);
	NSLog(@"user : %@", [url user]);
{% endhighlight %}

---

結果

{% highlight ruby %}
	absoluteString : http://user:password@www.example.com:8080/hoge/fuga/index.html?a=1&b=2#test
	absoluteURL : http://user:password@www.example.com:8080/hoge/fuga/index.html?a=1&b=2#test
	baseURL : (null)
	fragment : test
	host : www.example.com
	lastPathComponent : index.html
	parameterString : (null)
	password : password
	path : /hoge/fuga/index.html
	pathComponents : (
	    "/",
	    hoge,
	    fuga,
	    "index.html"
	)
	pathExtension : html
	port : 8080
	query : a=1&b=2
	relativePath : /hoge/fuga/index.html
	relativeString : http://user:password@www.example.com:8080/hoge/fuga/index.html?a=1&b=2#test
	resourceSpecifier : //user:password@www.example.com:8080/hoge/fuga/index.html?a=1&b=2#test
	scheme : http
	standardizedURL : http://user:password@www.example.com:8080/hoge/fuga/index.html?a=1&b=2#test
	user : user
{% endhighlight %}

[参考](http://d.hatena.ne.jp/nakamura001/20110421/1303404341)
