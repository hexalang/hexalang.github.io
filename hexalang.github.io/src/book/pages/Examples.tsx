export const Article = () => {
	return (
		<>
			<p>(draft)</p>

			<p>Syntax examples</p>

			<ul id="markdown-toc">
				<li><a href="#hello-world" id="markdown-toc-hello-world">Hello, World!</a></li>
				<li><a href="#comments" id="markdown-toc-comments">Comments</a></li>
				<li><a href="#common-variable-types" id="markdown-toc-common-variable-types">Common variable types</a></li>
				<li><a href="#deeper-overview" id="markdown-toc-deeper-overview">Deeper overview</a>    <ul>
					<li><a href="#literals" id="markdown-toc-literals">Literals</a></li>
					<li><a href="#lists" id="markdown-toc-lists">Lists</a></li>
				</ul>
				</li>
				<li><a href="#maps" id="markdown-toc-maps">Maps</a></li>
				<li><a href="#structures" id="markdown-toc-structures">Structures</a></li>
				<li><a href="#strings" id="markdown-toc-strings">Strings</a></li>
				<li><a href="#advanced-features" id="markdown-toc-advanced-features">Advanced features</a></li>
				<li><a href="#not-yet-implemented-features" id="markdown-toc-not-yet-implemented-features">Not yet implemented features</a></li>
			</ul>

			<h3 id="hello-world">Hello, World!</h3>

			<div className="language-js highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="nx">console</span><span className="p">.</span><span className="nx">log</span><span className="p">(</span><span className="dl">"</span><span className="s2">Hello, World!</span><span className="dl">"</span><span className="p">)</span>
			</code></pre></div></div>

			<ul>
				<li><a href="https://hexalang.github.io/book/Hello.html">Hello, Hexa!</a></li>
			</ul>

			<h3 id="comments">Comments</h3>

			<p>Comments are JavaScript-style. Multi-line comments are nestable.</p>

			<div className="language-swift highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="c1">// Single-line comment.</span>

				<span className="cm">/*
					Multi-line
					comment.
					*/</span>

				<span className="cm">/*
					Nested

					/* multi-line */

					comment.
					*/</span>
			</code></pre></div></div>

			<h2 id="common-variable-types">Common variable types</h2>

			<div className="language-swift highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="n">null</span> <span className="c1">// No value</span>
				<span className="mi">42</span> <span className="c1">// 32-bit signed integer</span>
				<span className="mf">123.456</span> <span className="c1">// 64-bit floating-point number</span>
				<span className="kc">true</span> <span className="kc">false</span> <span className="c1">// Boolean type</span>
				<span className="s">"string"</span> <span className="c1">// String or text type</span>
				<span className="p">[</span><span className="s">"red"</span><span className="p">,</span> <span className="s">"green"</span><span className="p">,</span> <span className="s">"blue"</span><span className="p">]</span> <span className="c1">// Array type or list</span>
			</code></pre></div></div>

			<ul>
				<li><a href="https://hexalang.github.io/book/Strings.html">Strings</a></li>
			</ul>

			<p>Variables in Hexa are statically typed:</p>

			<div className="language-swift highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="k">var</span> <span className="nv">a</span><span className="p">:</span> <span className="kt">Int</span> <span className="o">=</span> <span className="mi">123</span>
				<span className="k">let</span> <span className="nv">b</span><span className="p">:</span> <span className="kt">Bool</span> <span className="o">=</span> <span className="kc">true</span>
			</code></pre></div></div>

			<p>Types a [inferrable]:</p>

			<div className="language-swift highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="k">var</span> <span className="nv">a</span> <span className="o">=</span> <span className="mi">123</span>
				<span className="k">let</span> <span className="nv">b</span> <span className="o">=</span> <span className="kc">true</span>
			</code></pre></div></div>

			<h2 id="deeper-overview">Deeper overview</h2>

			<h3 id="literals">Literals</h3>

			<div className="language-swift highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="mh">0x10</span> <span className="c1">// Hexadecimal</span>
				<span className="err">`</span><span className="kt">C</span><span className="p">:\</span><span className="kt">Windows</span><span className="p">\</span><span className="kt">System32</span><span className="p">\</span><span className="err">`</span> <span className="c1">// Raw strings do *not* do pre-escaping, but generate to JavaScript with escapes</span>
			</code></pre></div></div>

			<h3 id="lists">Lists</h3>

			<div className="language-swift highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="p">[]</span> <span className="c1">// Empty structure</span>
				<span className="p">[</span><span className="mi">1</span><span className="p">,</span> <span className="mi">2</span><span className="p">,</span> <span className="mi">3</span><span className="p">]</span>
				<span className="p">[</span><span className="kc">true</span><span className="p">,</span> <span className="kc">false</span><span className="p">,</span> <span className="kc">true</span><span className="p">,</span> <span className="kc">true</span><span className="p">]</span> <span className="c1">// Elements of same type</span>
				<span className="p">[</span>
				<span className="p">[</span><span className="mi">1</span><span className="p">,</span> <span className="mi">0</span><span className="p">,</span> <span className="mi">0</span><span className="p">],</span>
				<span className="p">[</span><span className="mi">0</span><span className="p">,</span> <span className="mi">1</span><span className="p">,</span> <span className="mi">0</span><span className="p">],</span>
				<span className="p">[</span><span className="mi">0</span><span className="p">,</span> <span className="mi">0</span><span className="p">,</span> <span className="mi">1</span><span className="p">]</span> <span className="c1">// No trailing comma</span>
				<span className="p">]</span>
			</code></pre></div></div>

			<h2 id="maps">Maps</h2>

			<div className="language-swift highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="p">[:]</span> <span className="c1">// Empty map</span>
				<span className="p">[</span> <span className="s">"hello"</span><span className="p">:</span> <span className="s">"world!"</span> <span className="p">]</span>
				<span className="p">[</span> <span className="mi">1</span><span className="p">:</span> <span className="s">"one"</span><span className="p">,</span> <span className="mi">2</span><span className="p">:</span> <span className="s">"two"</span> <span className="p">]</span> <span className="c1">// Elements of same type</span>
			</code></pre></div></div>

			<h2 id="structures">Structures</h2>

			<div className="language-swift highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="p">&#123;:&#125;</span> <span className="c1">// Empty structure</span>
				<span className="p">&#123;</span> <span className="nv">hello</span><span className="p">:</span> <span className="s">"world!"</span> <span className="p">&#125;</span>
				<span className="p">&#123;</span> <span className="nv">name</span><span className="p">:</span> <span className="s">"Jane"</span><span className="p">,</span> <span className="nv">age</span><span className="p">:</span> <span className="mi">21</span> <span className="p">&#125;</span>
			</code></pre></div></div>

			<h2 id="strings">Strings</h2>

			<div className="language-swift highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="s">"Strings are
				multi
				line"</span>
				<span className="s">"</span><span className="se">\'</span><span className="s">Second</span><span className="se">\n</span><span className="s">line</span><span className="se">\'</span><span className="s">"</span> <span className="c1">// Character escapes</span>
			</code></pre></div></div>

			<h2 id="advanced-features">Advanced features</h2>

			<p>.</p>

			<h2 id="not-yet-implemented-features">Not yet implemented features</h2>

			<p>.</p>
		</>
	)
}
