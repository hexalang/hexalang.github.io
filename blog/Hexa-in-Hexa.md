---
layout: post
title: Hexa compiles itself
date: 2018-07-25
---

Hello! If you didn't follow, Hexa is a static typed programming language with a touch of style, magic and beauty... oh, I mean, it compiles to JavaScript, soon ![Haxe](https://haxe.org/favicon.ico)[haXe](https://haxe.org) and native. Has safety features, looks nice and simple. Coding in Hexa is really calmful and productive :cake:

As I wrote before in [Bootstrap the compiler](Bootstrap-the-compiler.html), large achievement for any language is to "dogfood" a compiler with itself. Same was a goal for Hexa too (intentionaly, to help with future metaprogramming features).

And 100 commits behind... bootstrapping is done! :tada:

![Image](such_a_many_commits.png)

From now on, Hexa uses pre-built version of itself to make latest versions usable.

<p align="center">
	<img src="bootstrap.png"/>
<p/>

<p>There's some quirks, for example, old JavaScript generator dropped entirely from codebase in favor of new normalizer+generator tandem. New generator sometimes breaks compilation, but no worries, it's a quick fix, I just wanted to share my joy as earlier as possible!<p/>

<p>It is now really easy to add new <a href="https://github.com/hexalang/hexa/tree/master/source/targets">targets</a> with introduced adaptive code <a href="https://github.com/hexalang/hexa/blob/master/source/compiler/normalizer.hexa">normalizer</a>. It receives platform-specific keywords and rules directly, and does all renaming stuff and heavy lifting by itself.<p/>

<p>It's time to backport some features from early prototypes and go public!<p/>
