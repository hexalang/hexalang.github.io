export const Article = () => {
	return (
		<>
			<p>Let’s write your very first program in Hexa!</p>

			<p>If you’re already familiar with programming,
				take a look at a <a href="https://hexalang.github.io/book/Comparison.html">programming language comparison list</a>.</p>

			<ul id="markdown-toc">
				<li>
					<a href="#quickstart" id="markdown-toc-quickstart">Quickstart</a>    <ul>
						<li><a href="#running-code-online" id="markdown-toc-running-code-online">Running code online</a></li>
						<li><a href="#long-story" id="markdown-toc-long-story">Long story</a></li>
						<li><a href="#mastering-error-messages" id="markdown-toc-mastering-error-messages">Mastering error messages</a></li>
					</ul>
				</li>
			</ul>

			<h2 id="quickstart">Quickstart</h2>

			<p>Download <a href="https://github.com/hexalang/hexa#stable">Hexa compiler</a> and <a href="https://github.com/hexalang/hexa#tools--ide">syntax highlighting for your code editor</a>.
				Create new file <code className="language-plaintext highlighter-rouge">hello.hexa</code> and place anywhere you wish.</p>

			<p>Drag it into code editor then add some pretty lines into:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="c1">// My first program in Hexa!</span>

				<span className="c1">/// Show greetings</span>
				<span className="kd">function</span> <span className="nx">hello</span><span className="p">()</span> <span className="p">&#123;</span>
				<span className="nx">console</span><span className="p">.</span><span className="nx">log</span><span className="p">(</span><span className="dl">"</span><span className="s2">Hello, Hexa!</span><span className="dl">"</span><span className="p">)</span>
				<span className="p">&#125;</span>

				<span className="nx">hello</span><span className="p">()</span>
			</code></pre></div></div>

			<blockquote>
				<p>Note: Hexa uses tabs for indentation</p>
				<blockquote>
					<p>This is <em>not</em> enforced <img className="emoji" title=":relaxed:" alt=":relaxed:" src="https://github.githubassets.com/images/icons/emoji/unicode/263a.png" height="20" width="20" /></p>
				</blockquote>
			</blockquote>

			<p>Your file may be evaluated directly without compilation:</p>

			<div className="language-sh highlighter-rouge"><div className="highlight"><pre className="highlight"><code>hexa hello.hexa
				<span className="c"># This is called "console command"</span>
				<span className="c"># if you're familiar with terminal</span>
			</code></pre></div></div>

			<p>Same within code editor:</p>

			<ul>
				<li>Sublime Text — …</li>
			</ul>

			<p>Expected output:</p>

			<div className="language-plaintext highlighter-rouge"><div className="highlight"><pre className="highlight"><code>Hello, Hexa!
			</code></pre></div></div>

			<h3 id="running-code-online">Running code online</h3>

			<p>If you don’t want to setup Hexa right now, try compiler by not leaving a browser:</p>

			<p><a href="https://hexalang.github.io/try/">https://hexalang.github.io/try/</a></p>

			<p>Some features are not supported in the online compiler (like file system access).</p>

			<h3 id="long-story">Long story</h3>

			<p>Let’s investigate our program step-by-step:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="c1">// My first program in Hexa!</span>
			</code></pre></div></div>

			<p>Those gray notes are called <em>comments</em> and they don’t affect program flow.
				Feel free to note anything you find useful for yourself and other programmers.
				You may comment out any code to disable it, so it won’t be compiled:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="c1">// hello() this will do nothing</span>
			</code></pre></div></div>

			<p>Or multiple lines altogether:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="cm">/*
				nothing
				here
				will be compiled
				*/</span>
			</code></pre></div></div>

			<p>There is also are documentational comments. They start with triple slash <code className="language-plaintext highlighter-rouge">///</code> and attached semantically to the next code block after them:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="c1">/// Show greetings</span>
				<span className="kd">function</span> <span className="nx">hello</span><span className="p">()</span> <span className="p">&#123;</span>
			</code></pre></div></div>

			<p>So we know what exactly that function does without reading whole code <img className="emoji" title=":thinking:" alt=":thinking:" src="https://github.githubassets.com/images/icons/emoji/unicode/1f914.png" height="20" width="20" />. This is a really good and common practice to document your code, make it your habit.</p>

			<p>Next we see a function and it’s body:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">function</span> <span className="nx">hello</span><span className="p">()</span> <span className="p">&#123;</span> <span className="c1">// "hello" is a function name</span>
				<span className="c1">// function body</span>
				<span className="p">&#125;</span>
			</code></pre></div></div>

			<p>Function is a reusable code block, you may run it as many times you wish, and even send different parameters (arguments) into it:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">function</span> <span className="nx">hello</span><span className="p">(</span><span className="nx">name</span><span className="p">)</span> <span className="p">&#123;</span> <span className="c1">// "name" is a function argument</span>
				<span className="nx">console</span><span className="p">.</span><span className="nx">log</span><span className="p">(</span><span className="dl">"</span><span className="s2">Hello, </span><span className="dl">"</span> <span className="o">+</span> <span className="nx">name</span><span className="p">)</span> <span className="c1">// "+" here joins text strings together</span>
				<span className="p">&#125;</span>

				<span className="nx">hello</span><span className="p">(</span><span className="dl">"</span><span className="s2">World</span><span className="dl">"</span><span className="p">)</span> <span className="c1">// -&gt; prints "Hello, World"</span>
				<span className="nx">hello</span><span className="p">(</span><span className="dl">"</span><span className="s2">people of the Earth</span><span className="dl">"</span><span className="p">)</span> <span className="c1">// -&gt; prints "Hello, people of the Earth"</span>
			</code></pre></div></div>

			<p>Some functions may be attached to modules and objects, you call them with a <code className="language-plaintext highlighter-rouge">.dot()</code> syntax, like <code className="language-plaintext highlighter-rouge">console</code> in this example:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="nx">console</span><span className="p">.</span><span className="nx">log</span><span className="p">(</span><span className="dl">"</span><span className="s2">Hello, Hexa!</span><span className="dl">"</span><span className="p">)</span>
			</code></pre></div></div>

			<h3 id="mastering-error-messages">Mastering error messages</h3>

			<p>Hexa is strictly typed and compiled, meaning it keeps track of code structure also at development time, not only at running resulting app. Thus it helps you to quickly find errors, way faster than, say, JavaScript. So let’s go crazy and break some code!</p>

			<p>Changle this line:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="nx">hello</span><span className="p">()</span>
			</code></pre></div></div>

			<p>To this one:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="nx">hello</span><span className="p">(</span><span className="nx">something</span><span className="p">)</span>
			</code></pre></div></div>

			<p>When you will try to run it, you’ll see a message like this, and program will not start:</p>

			<div className="language-sh highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="o">[</span>hello.hexa:8:7] <span className="c">#17 Can't find anything with name `something`</span>
			</code></pre></div></div>

			<p>All error messages have common structure:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="p">[</span><span className="nx">filename</span><span className="p">.</span><span className="nx">hexa</span><span className="p">:</span><span className="nx">line</span><span className="p">:</span><span className="nx">column</span><span className="p">]</span> <span className="err">#</span><span className="nx">errorCode</span> <span className="nx">description</span>
			</code></pre></div></div>

			<p>It is really hard to get lost.
				Error <code className="language-plaintext highlighter-rouge">#</code> codes help you to discuss errors with team mates who have different error messages translation than yours.</p>

			<p>Line numbers start from 1, so do columns:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="cm">/*1*/</span> <span className="c1">// My first program in Hexa!</span>
				<span className="cm">/*2*/</span>
				<span className="cm">/*3*/</span> <span className="c1">/// Show greetings</span>
				<span className="cm">/*4*/</span> <span className="kd">function</span> <span className="nx">hello</span><span className="p">()</span> <span className="p">&#123;</span>
				<span className="cm">/*5*/</span>     <span className="nx">console</span><span className="p">.</span><span className="nx">log</span><span className="p">(</span><span className="dl">"</span><span className="s2">Hello, Hexa!</span><span className="dl">"</span><span className="p">)</span>
				<span className="cm">/*6*/</span> <span className="p">&#125;</span>
				<span className="cm">/*7*/</span>
				<span className="cm">/*8*/</span> <span className="nx">hello</span><span className="p">(</span><span className="nx">something</span><span className="p">)</span>
				<span className="o">^</span> <span className="p">[</span><span className="nx">hello</span><span className="p">.</span><span className="nx">hexa</span><span className="p">:</span><span className="mi">8</span><span className="p">:</span><span className="mi">7</span><span className="p">]</span>
				<span className="mi">123456789</span>
			</code></pre></div></div>

			<p>TODO## Level 2 - file system, useful stuff level 3, read repl from keyboard coz classic</p>
		</>
	)
}
