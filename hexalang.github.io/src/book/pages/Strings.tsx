export const Article = () => {
	return (
		<>
			<p>Text block, or word, or sentence, or character, in Hexa are all called a “string”.
				String is an independent piece of human-readable something in computer memory. Strings do not contain any special meaning (compared to objects),
				and represented as type <code className="language-plaintext highlighter-rouge">String</code>.</p>

			<h3 id="syntax-of-strings">Syntax of strings</h3>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">let</span> <span className="nx">s</span><span className="p">:</span> <span className="nb">String</span> <span className="o">=</span> <span className="dl">"</span><span className="s2">hello</span><span className="dl">"</span>
				<span className="kd">let</span> <span className="nx">s</span> <span className="o">=</span> <span className="dl">"</span><span className="s2">hello</span><span className="dl">"</span>
				<span className="c1">// Compiler knows what qoutes mean </span>
				<span className="c1">// and sets 's' type to 'String' for you</span>
			</code></pre></div></div>

			<p>Double- and single quoted strings have absolutely same meaning and features</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="dl">"</span><span className="s2">hello</span><span className="dl">"</span>
				<span className="dl">'</span><span className="s1">hello</span><span className="dl">'</span> <span className="c1">// No difference, nothing to worry about</span>
			</code></pre></div></div>

			<p>Strings support two basic operations: taking character at position and joining strings together.
				And they have only one property — length, or size.</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">let</span> <span className="nx">s</span> <span className="o">=</span> <span className="dl">"</span><span className="s2">hello</span><span className="dl">"</span> <span className="o">+</span> <span className="dl">"</span><span className="s2">!</span><span className="dl">"</span> <span className="c1">// Same as "hello!"</span>
				<span className="kd">let</span> <span className="nx">s</span> <span className="o">=</span> <span className="dl">"</span><span className="s2">hello</span><span className="dl">"</span> <span className="o">+</span> <span className="dl">'</span><span className="s1">!</span><span className="dl">'</span> <span className="c1">// Mixing double- and single quoted strings is fine</span>

				<span className="kd">let</span> <span className="nx">h</span> <span className="o">=</span> <span className="dl">"</span><span className="s2">hello</span><span className="dl">"</span><span className="p">[</span><span className="mi">0</span><span className="p">]</span> <span className="c1">// Starts from zero</span>
				<span className="kd">let</span> <span className="nx">s</span> <span className="o">=</span> <span className="dl">"</span><span className="s2">hello</span><span className="dl">"</span>
				<span className="kd">let</span> <span className="nx">h</span> <span className="o">=</span> <span className="nx">s</span><span className="p">[</span><span className="mi">0</span><span className="p">]</span> <span className="c1">// "h"</span>
				<span className="kd">let</span> <span className="nx">h</span> <span className="o">=</span> <span className="nx">s</span><span className="p">.</span><span className="nx">charAt</span><span className="p">(</span><span className="mi">0</span><span className="p">)</span> <span className="c1">// Same effect</span>

				<span className="nx">s</span><span className="p">.</span><span className="nx">length</span> <span className="c1">// -&gt; 6 characters, h-e-l-l-o-!</span>
				<span className="dl">"</span><span className="s2">hello!</span><span className="dl">"</span><span className="p">.</span><span className="nx">length</span> <span className="c1">// -&gt; 6</span>
				<span className="p">(</span><span className="dl">"</span><span className="s2">hello</span><span className="dl">"</span> <span className="o">+</span> <span className="dl">"</span><span className="s2">!</span><span className="dl">"</span><span className="p">).</span><span className="nx">length</span> <span className="c1">// -&gt; 6</span>
			</code></pre></div></div>

			<p>You cannot change characters of already created string, but you may change a string variable:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">var</span> <span className="nx">s</span> <span className="o">=</span> <span className="dl">"</span><span className="s2">world</span><span className="dl">"</span> <span className="c1">// Note using 'var' instead of 'let'</span>
				<span className="nx">s</span> <span className="o">=</span> <span className="nx">s</span> <span className="o">+</span> <span className="dl">"</span><span className="s2"> </span><span className="dl">"</span> <span className="c1">// 's' now contains 'world '</span>
				<span className="nx">s</span> <span className="o">=</span> <span className="dl">"</span><span className="s2">hello </span><span className="dl">"</span> <span className="o">+</span> <span className="nx">s</span> <span className="c1">// Adds in front, 's' now contains 'hello world '</span>
				<span className="nx">s</span> <span className="o">+=</span> <span className="dl">"</span><span className="s2">!</span><span className="dl">"</span> <span className="c1">// Same as s = s + "!"</span>
				<span className="nx">console</span><span className="p">.</span><span className="nx">log</span><span className="p">(</span><span className="nx">a</span><span className="p">)</span> <span className="c1">// -&gt; prints 'hello world !'</span>
			</code></pre></div></div>

			<h3 id="superpowers">Superpowers</h3>

			<p>Strings have special superpower: adding anything to string converts it to string (…sometimes into nonsensical stuff 😅)</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="dl">"</span><span className="s2">value: </span><span className="dl">"</span> <span className="o">+</span> <span className="mi">3</span> <span className="c1">// -&gt; becomes "value: 3"</span>
				<span className="dl">"</span><span className="s2">value: </span><span className="dl">"</span> <span className="o">+</span> <span className="p">[</span><span className="mi">1</span><span className="p">,</span> <span className="mi">2</span><span className="p">,</span> <span className="mi">3</span><span className="p">]</span> <span className="c1">// -&gt; becomes "value: 1,2,3"</span>
				<span className="dl">"</span><span className="s2">value: </span><span className="dl">"</span> <span className="o">+</span> <span className="kc">true</span> <span className="c1">// -&gt; becomes "value: true"</span>
			</code></pre></div></div>

			<p>Special characters used as <code className="language-plaintext highlighter-rouge">\n</code> allowing you to add invisible space. Currently supported characters are:</p>

			<ul>
				<li><code className="language-plaintext highlighter-rouge">\\</code> — adds <code className="language-plaintext highlighter-rouge">\</code> character itself</li>
				<li><code className="language-plaintext highlighter-rouge">\t</code> — adds a tab</li>
				<li><code className="language-plaintext highlighter-rouge">\n</code> — new line</li>
				<li><code className="language-plaintext highlighter-rouge">\r</code> — most useless superpower</li>
				<li><code className="language-plaintext highlighter-rouge">\'</code> — adds <code className="language-plaintext highlighter-rouge">'</code> character, even if string surrounded by <code className="language-plaintext highlighter-rouge">'single \'quotes\''</code></li>
				<li><code className="language-plaintext highlighter-rouge">\"</code> — adds <code className="language-plaintext highlighter-rouge">"</code> character, even if string surrounded by <code className="language-plaintext highlighter-rouge">"double \"quotes\""</code></li>
			</ul>

			<p>When multi line strings are used directly in code, without resorting to special characters to encode new lines,
				on different platforms you will have incomplatible newlines encoding, <code className="language-plaintext highlighter-rouge">\r\n</code> on Windows, <code className="language-plaintext highlighter-rouge">\n</code> on Linux and most others.</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">let</span> <span className="nx">multiline</span> <span className="o">=</span> <span className="dl">"</span><span className="s2">what is in between
				of those lines?</span><span className="dl">"</span>
			</code></pre></div></div>

			<p>Hexa takes care for you, by always replacing <code className="language-plaintext highlighter-rouge">\r\n</code> to <code className="language-plaintext highlighter-rouge">\n</code>, saving your team mates from unneccessary headache and holywars:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">let</span> <span className="nx">multiline</span> <span className="o">=</span> <span className="dl">"</span><span className="s2">what is in between</span><span className="se">\n</span><span className="s2">of those lines?</span><span className="dl">"</span>
				<span className="c1">//                                 ^^ note \n in the middle</span>
			</code></pre></div></div>

			<h3 id="string-interpolation">String interpolation</h3>

			<p>Sometimes you may want to embed value into string or do basic formatting. To do this just mention variable name within <code className="language-plaintext highlighter-rouge">\()</code>:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">let</span> <span className="nx">welcome</span> <span className="o">=</span> <span className="dl">'</span><span className="s1">world</span><span className="dl">'</span>
				<span className="nx">console</span><span className="p">.</span><span className="nx">log</span><span className="p">(</span><span className="dl">'</span><span className="s1">hello </span><span className="se">\</span><span className="s1">(welcome)!</span><span className="dl">'</span><span className="p">)</span> <span className="c1">// -&gt; prints 'hello world!'</span>

				<span className="c1">// Basically the same as:</span>
				<span className="nx">console</span><span className="p">.</span><span className="nx">log</span><span className="p">(</span><span className="dl">'</span><span className="s1">hello </span><span className="dl">'</span> <span className="o">+</span> <span className="nx">welcome</span> <span className="o">+</span> <span className="dl">'</span><span className="s1">!</span><span className="dl">'</span><span className="p">)</span> <span className="c1">// -&gt; prints 'hello world!'</span>
			</code></pre></div></div>

			<p>You may use any expressions within interpolation parethesis:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">let</span> <span className="nx">a</span> <span className="o">=</span> <span className="p">[</span><span className="mi">1</span><span className="p">,</span><span className="mi">2</span><span className="p">,</span><span className="mi">3</span><span className="p">]</span>
				<span className="nx">console</span><span className="p">.</span><span className="nx">log</span><span className="p">(</span><span className="dl">'</span><span className="s1">ten is </span><span className="se">\</span><span className="s1">(5 + 5) while [</span><span className="se">\</span><span className="s1">(a)] length is </span><span className="se">\</span><span className="s1">(a.length)</span><span className="dl">'</span><span className="p">)</span>
				<span className="c1">// -&gt; prints 'ten is 10 while [1, 2, 3] length is 3'</span>
			</code></pre></div></div>

			<h3 id="raw-strings">Raw strings</h3>

			<p>Raw texts are surrounded by <strong>`backticks`</strong>. They don’t care about special characters.</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="nx">console</span><span className="p">.</span><span className="nx">log</span><span className="p">(</span><span className="dl">"</span><span className="s2">hello</span><span className="se">\t</span><span className="s2">world</span><span className="dl">"</span><span className="p">)</span> <span className="c1">// -&gt; prints 'hello    world'</span>
				<span className="nx">console</span><span className="p">.</span><span className="nx">log</span><span className="p">(</span><span className="dl">'</span><span className="s1">hello</span><span className="se">\t</span><span className="s1">world</span><span className="dl">'</span><span className="p">)</span> <span className="c1">// -&gt; prints 'hello    world'</span>
				<span className="nx">console</span><span className="p">.</span><span className="nx">log</span><span className="p">(</span><span className="s2">`hello\tworld`</span><span className="p">)</span> <span className="c1">// -&gt; prints 'hello\tworld'</span>
			</code></pre></div></div>

			<p>Raw strings <strong>do not</strong> support interpolation:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">let</span> <span className="nx">welcome</span> <span className="o">=</span> <span className="dl">'</span><span className="s1">world</span><span className="dl">'</span>
				<span className="nx">console</span><span className="p">.</span><span className="nx">log</span><span className="p">(</span><span className="s2">`hello \(welcome)!`</span><span className="p">)</span> <span className="c1">// -&gt; prints 'hello \(welcome)!'</span>
			</code></pre></div></div>

			<p>They also keep line endings information as is:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">let</span> <span className="nx">s</span> <span className="o">=</span> <span className="s2">`
				`</span> <span className="c1">// Contains \n or \r\n depending on your code editor settings</span>
			</code></pre></div></div>

			<p>Only special case is embedding a backtick characted into raw string, possible by repeating backtick twise:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">let</span> <span className="nx">s</span> <span className="o">=</span> <span className="s2">`this is ``backticked`` string`</span>
				<span className="c1">// Same as "this is `backticked` string"</span>
				<span className="c1">// Note single backticks in a resulting string</span>
			</code></pre></div></div>

			<h3 id="optimization">Optimization</h3>

			<p>Strings are quite fast, they never change, so they never overhead. But they have a fault: string creation is a costly operation.
				New strings are created on concatentaion of existing ones, and conversion of objects to text (like printing formatted number to screen).</p>

			<p>Compiler tries it’s best to optimize such cases.
				In every obvious situation it builds a complete string: <code className="language-plaintext highlighter-rouge">"a" + "b"</code> is guaranteed to become <code className="language-plaintext highlighter-rouge">"ab"</code>. This optimization is always enabled.</p>

			<p>But sometimes you have to generate really big strings of many small ones.
				Instead of adding them with “+”, try putting them into array and join later:</p>

			<div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="c1">// Instead of:</span>
				<span className="kd">let</span> <span className="nx">result</span> <span className="o">=</span> <span className="nx">a</span> <span className="o">+</span> <span className="nx">b</span> <span className="o">+</span> <span className="nx">c</span> <span className="o">+</span> <span className="p">...</span>

				<span className="c1">// Do:</span>
				<span className="kd">let</span> <span className="nx">temp</span> <span className="o">=</span> <span className="p">[]</span>
				<span className="nx">temp</span><span className="p">.</span><span className="nx">push</span><span className="p">(</span><span className="nx">a</span><span className="p">)</span>
				<span className="nx">temp</span><span className="p">.</span><span className="nx">push</span><span className="p">(</span><span className="nx">b</span><span className="p">)</span>
				<span className="nx">temp</span><span className="p">.</span><span className="nx">push</span><span className="p">(</span><span className="nx">c</span><span className="p">)</span>
				<span className="p">...</span>
				<span className="kd">let</span> <span className="nx">result</span> <span className="o">=</span> <span className="nx">temp</span><span className="p">.</span><span className="nx">join</span><span className="p">()</span>
			</code></pre></div></div>

			<p>While this may seem imperfect (from a very nervous systems programmer perspective who optimizes into eternity),
				speed of array operations is so good, most of the time you will not notice performance drops.</p>
		</>
	)
}
