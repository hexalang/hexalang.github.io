---
layout: post
title: Blogging Like a Hacker
---

## This is really just a markup test

Should be available at [home page](https://hexalang.github.io/blog/Test.html)

![Image](https://camo.githubusercontent.com/d2859c86098704b6fd302cb72b805992ada729b1/68747470733a2f2f686578616c616e672e6769746875622e696f2f66617669636f6e2f66617669636f6e2d39367839362e706e67)

I give this emoji two :+1:!

Short `code sample`.

```
Long
	Code
 Sample
```

```js
var a = Long
	function Code
 Sample
```

{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}

## Further Reading

{% for p in site.pages %}
     * [{{ p.title }}]({{ p.url | absolute_url }})
        <small>{{ p.excerpt }}</small>
{% endfor %}

<ul>
  {% for page in site.pages %}
	{% if page.url contains 'blog/' %}
  <li>
    <a href="{{ page.url | absolute_url }}">{{ page.title }}</a>
  </li>
	{% endif %}
	{% if page.url contains 'blog' %}
  <li>
    <a href="{{ page.url | absolute_url }}">{{ page.title }}</a>
  </li>
	{% endif %}
  {% endfor %}
</ul>
