---
layout: post
title: Welcome
---

Hexa is a language built around ideas of high performance, type safety and dense development times.


If you came here directly, try also these links!


- [Book about Hexa](https://hexalang.github.io/book/)
- [Telegram @hexalang](https://t.me/hexalang)
- Homepage <https://hexalang.github.io>
- Twitter <https://twitter.com/hexalang>
- GitHub <https://github.com/hexalang>
- Patreon <https://patreon.com/PeyTy>
- [Stickers for Telegram](https://t.me/addstickers/hexalang)


More posts are on the side bar.

<div class="further-reading">
<h3>Further Reading</h3>
<ul>
{% assign sortedPosts = site.blog | sort: 'date' | reverse %}
{% for page in sortedPosts limit: 10 %}
{% if page.title == 'Welcome' %}
{% else %}
<li>
<a href="{{ page.url | absolute_url }}">{{ page.title }}
<span class="date">{{ page.date | date: "%-d %B %Y" }}</span>
</a>
</li>
{% endif %}
{% endfor %}
</ul>
</div>
