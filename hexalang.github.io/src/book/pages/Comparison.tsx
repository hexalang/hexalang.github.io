import { FC } from 'react'
import styled, { css } from 'styled-components'

export const Sticky = styled.div`
	position: sticky;
	top: 0;
`

interface Props {
	id: string
}

const H2: FC<Props> = ({ children, id }) => {
	return <>
		<h2 data-id={id}>{children}</h2>
		<div id={id} />
	</>
}

export const Article = () => {
	return (
		<>
			<p>At first, there are common things that differentiate Hexa to most other programming languages:</p>

			<ul>
				<li>No semicolons <code className="language-plaintext highlighter-rouge">;</code> at all</li>
				<li>Language is strongly typed, types are <a href="https://en.wikipedia.org/wiki/Type_inference">automatically inferred</a> (guessed) when possible</li>
				<li>Compiles very straitforwardly to JavaScript and machine code (LLVM and C) because of semantics of <a href="https://en.wikipedia.org/wiki/Lowest_common_denominator_(computers)">lowest common denominator</a>,
					this ensures native interopability in both cases and very high performance</li>
				<li>Compiles <a href="https://en.wikipedia.org/wiki/Source-to-source_compiler">to any other programming language</a>, if corresponding code generation backend is provided and target language is not super
					different to Hexa</li>
				<li>No garbage collection in native backends (LLVM and C), possibility of manual memory management - otherwise
					threadsafe <a href="https://en.wikipedia.org/wiki/Automatic_Reference_Counting">automatic reference counting</a> is used</li>
				<li>Safety-first: null safety, checked exceptions, <a href="https://en.wikipedia.org/wiki/Iterator">iterators</a>, special syntax features</li>
			</ul>

			<p>Compare with known language:</p>

			<ul id="markdown-toc">
				<li><a href="#javascript" id="markdown-toc-javascript">JavaScript</a></li>
				<li><a href="#typescript" id="markdown-toc-typescript">TypeScript</a></li>
				<li><a href="#c" id="markdown-toc-c">C</a></li>
			</ul>

			<H2 id="javascript">JavaScript</H2>

			<ul>
				<li><code className="language-plaintext highlighter-rouge">var</code> in Hexa is a <code className="language-plaintext highlighter-rouge">let</code> in JavaScript. Everyone uses <code className="language-plaintext highlighter-rouge">let</code> in js today anyway, but <code className="language-plaintext highlighter-rouge">var</code> as a keyword is more common and not breaks your old habits</li>
				<li><code className="language-plaintext highlighter-rouge">let</code> compiles to <code className="language-plaintext highlighter-rouge">const</code>, accordingly, saving you some keystrokes</li>
				<li>Normal <code className="language-plaintext highlighter-rouge">function</code> functions are always compiled to <code className="language-plaintext highlighter-rouge">()=&gt;</code> arrow-functions, thus they catch outer <code className="language-plaintext highlighter-rouge">this</code>
					and should be defined before calling position</li>
				<li>Hexa has <code className="language-plaintext highlighter-rouge">()=&gt;</code> syntax too</li>
				<li>Types are placed like this: <code className="language-plaintext highlighter-rouge">var a: Int = 1</code> and <code className="language-plaintext highlighter-rouge">function (v: Int): Int</code></li>
				<li>Class fields have <code className="language-plaintext highlighter-rouge">var</code> and <code className="language-plaintext highlighter-rouge">let</code> before their names, also there is one and only visibility modifier <code className="language-plaintext highlighter-rouge">private</code>.
					Methods prepended with <code className="language-plaintext highlighter-rouge">function</code>. Constructors are <code className="language-plaintext highlighter-rouge">new()</code>. Placing <code className="language-plaintext highlighter-rouge">this.</code> before field names isn’t required.
					Braces <code className="language-plaintext highlighter-rouge">&#123;&#125;</code> aren’t required for function bodies.</li>
			</ul>

			<p>Full example:</p>

			<div className="language-js highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="kd">class</span> <span className="nx">A</span> <span className="p">&#123;</span>
				<span className="kd">var</span> <span className="nx">a</span> <span className="o">=</span> <span className="mi">123</span>
				<span className="k">new</span> <span className="p">(</span><span className="nx">value</span><span className="p">)</span> <span className="nx">a</span> <span className="o">=</span> <span className="nx">value</span>
				<span className="kr">private</span> <span className="kd">function</span> <span className="nx">return_a</span><span className="p">()</span> <span className="p">&#123;</span>
				<span className="k">return</span> <span className="k">this</span><span className="p">.</span><span className="nx">a</span> <span className="o">+</span> <span className="mi">1</span> <span className="o">+</span> <span className="nx">a</span>
				<span className="p">&#125;</span>
				<span className="p">&#125;</span>

				<span className="kd">let</span> <span className="nx">a</span> <span className="o">=</span> <span className="k">new</span> <span className="nx">A</span><span className="p">(</span><span className="mi">456</span><span className="p">)</span>
			</code></pre></div></div>

			<ul>
				<li>Maps are <code className="language-plaintext highlighter-rouge">[K:V]</code>, empty <code className="language-plaintext highlighter-rouge">new Map()</code> is <code className="language-plaintext highlighter-rouge">[:]</code> in Hexa: <code className="language-plaintext highlighter-rouge">var map: [String: Int] = [:]</code> then <code className="language-plaintext highlighter-rouge">map = ["JennysAge": 12, "BillsAge": 13]</code></li>
				<li>Empty objects are <code className="language-plaintext highlighter-rouge">&#123;:&#125;</code></li>
				<li>Strings are interpolated with <code className="language-plaintext highlighter-rouge">\()</code>. This works for all (<code className="language-plaintext highlighter-rouge">""</code> and <code className="language-plaintext highlighter-rouge">''</code>) strings except for raw ones surrounded with backtics.
					Strings may be mutliple lines. <code className="language-plaintext highlighter-rouge">let age = 13 let billsAge = 'Bill\'s age is \(age)!'</code></li>
				<li>No <code className="language-plaintext highlighter-rouge">===</code> and <code className="language-plaintext highlighter-rouge">!==</code> operators, use <code className="language-plaintext highlighter-rouge">strictEqual</code> and <code className="language-plaintext highlighter-rouge">strictNotEqual</code> functions</li>
				<li>Only <code className="language-plaintext highlighter-rouge">null</code>. Still, <code className="language-plaintext highlighter-rouge">undefined</code> is available as just an external variable (only in JavaScript backend)</li>
				<li>Arrays are typed and contain values of a single type: <code className="language-plaintext highlighter-rouge">let a: [Int] = [1, 2, 3] // Int's only</code></li>
				<li>Not so many loops and iterators. Only <code className="language-plaintext highlighter-rouge">for (a in b)</code> which is same as <code className="language-plaintext highlighter-rouge">for (const a of b)</code> in JS,
					and <code className="language-plaintext highlighter-rouge">while () &#123;&#125;</code> with a <code className="language-plaintext highlighter-rouge">do &#123;&#125; while ()</code> ones. Also some special cases like <code className="language-plaintext highlighter-rouge">for (i in 5)</code>, <code className="language-plaintext highlighter-rouge">for (i in arr.length)</code> and <code className="language-plaintext highlighter-rouge">for (i in 0 ... arr.length)</code>. Maybe others in future, but nothing with complicated hard-to-read syntaxes (like <code className="language-plaintext highlighter-rouge">(in/of/each a:5..&lt;b:7)</code>)</li>
				<li>You may use <code className="language-plaintext highlighter-rouge">,</code> comma to list multiple conditions instead of <code className="language-plaintext highlighter-rouge">&amp;&amp;</code>! <code className="language-plaintext highlighter-rouge">if (a, b == c, d &gt; 5) &#123;&#125; else &#123;&#125;</code></li>
				<li>Null-avoiding checks may be done with <code className="language-plaintext highlighter-rouge">if (let a = b)</code> syntax.
					For example: <code className="language-plaintext highlighter-rouge">var i: Int? = null if (let int = i, int &gt; 5) compute(int)</code> does check for <code className="language-plaintext highlighter-rouge">i != null</code>, sets it value to <code className="language-plaintext highlighter-rouge">int</code>, does
					all <em>condition checks</em> for <code className="language-plaintext highlighter-rouge">int</code> and calls <code className="language-plaintext highlighter-rouge">compute</code> with a guaranteed non-null value <em>if they a met</em>.</li>
				<li><code className="language-plaintext highlighter-rouge">switch</code> does <code className="language-plaintext highlighter-rouge">break</code> automatically for each case. You don’t place <code className="language-plaintext highlighter-rouge">break</code>s for <code className="language-plaintext highlighter-rouge">switch</code>es</li>
				<li>Modularity is very different (based on package-level namespaces), but on-demand compatible with JS</li>
			</ul>

			<p><a href="https://hexalang.github.io/book/FromJavaScript.html">More on porting from JavaScript</a></p>

			<h2 id="typescript">TypeScript</h2>

			<ul>
				<li>Hexa type system is stricter than TypeScript’s: <code className="language-plaintext highlighter-rouge">Int</code> + <code className="language-plaintext highlighter-rouge">Float</code> vs just <code className="language-plaintext highlighter-rouge">number</code>. Types consider data-layout in memory. For example,
					<code className="language-plaintext highlighter-rouge">Array&lt;Float&gt;</code> is not compatible with <code className="language-plaintext highlighter-rouge">Array&lt;Int&gt;</code> and vise-versa, because they are stored (even in JavaScript engines)
					as different data types (basically, V8 transforms <code className="language-plaintext highlighter-rouge">[1,2,3]</code> to <code className="language-plaintext highlighter-rouge">Int32Array</code> until you add some <code className="language-plaintext highlighter-rouge">Float</code>s)</li>
				<li>Types always start with upper-case<code className="language-plaintext highlighter-rouge">TypeName</code>, functions, methods and vars with lowercase <code className="language-plaintext highlighter-rouge">varName</code></li>
				<li>Basic types are <code className="language-plaintext highlighter-rouge">Bool</code>, <code className="language-plaintext highlighter-rouge">Int</code>, <code className="language-plaintext highlighter-rouge">Float</code>, <code className="language-plaintext highlighter-rouge">Void</code>, <code className="language-plaintext highlighter-rouge">String</code>, <code className="language-plaintext highlighter-rouge">Array&lt;T&gt;</code> or <code className="language-plaintext highlighter-rouge">[T]</code>, <code className="language-plaintext highlighter-rouge">Map&lt;K, V&gt;</code> or <code className="language-plaintext highlighter-rouge">[K:V]</code>, <code className="language-plaintext highlighter-rouge">Any</code> and some other</li>
				<li>Hexa has special advanced <code className="language-plaintext highlighter-rouge">enum</code> type family (yes, not only “list of constants”, but complex enums, enum classes, computational fields, etc)</li>
				<li>Types inferred in more lazy manner, especially generics</li>
				<li>Some features not available in idiomatic Hexa code, but instead used only for external JavaScript bindings, like accessing
					class instance as object with <code className="language-plaintext highlighter-rouge">[]</code>. Compiler will optimize, rearrange and rename those fields anyway. You will use <code className="language-plaintext highlighter-rouge">strictEqual()</code> function which compiles to <code className="language-plaintext highlighter-rouge">===</code>, but no operator <code className="language-plaintext highlighter-rouge">===</code> available in normal code (this is done for sanity and to support more generation platforms) and others. <code className="language-plaintext highlighter-rouge">instanceof()</code> would be compiled to <code className="language-plaintext highlighter-rouge">instanceof</code> operator accordingly, but again, idiomatic Hexa has own <code className="language-plaintext highlighter-rouge">is</code> operator, which may be not suitable for external bindings depending on situation</li>
				<li>If you see, that some magic feature is not supported, it is done for performance reasons, both native and dynamic targets, and of course for code portability between them</li>
				<li><code className="language-plaintext highlighter-rouge">if (x != null)</code> is not considered null-safe (<code className="language-plaintext highlighter-rouge">x</code> may be changed at any moment, what is safety here?), you have to use <code className="language-plaintext highlighter-rouge">if (let x = x)</code>
					binding, like <code className="language-plaintext highlighter-rouge">if (let a = obj.a, let b = obj.b, a.x &gt; b.x)</code> or <code className="language-plaintext highlighter-rouge">if (let o = obj, o.a.x &gt; o.b.x)</code> if <code className="language-plaintext highlighter-rouge">obj</code> is nullable</li>
			</ul>

			<p>List of JavaScript differences apply to TypeScript as well</p>

			<h2 id="c">C</h2>

			<ul>
				<li>Object oriented programming with single inheritance, always-virtual methods, ARC and real interfaces</li>
				<li>No structures. Instead anonymous objects to be used. They are stored in memory as C-like structures, but with a pointer
					to field accessor, very similiar to Go interfaces.</li>
				<li>Low-level features are implemented as on-demand code attributes. For example, you may declare C-like structures, even embedded into
					other ones (without pointers or heap allocation) or unions, but it’s not very idiomatic</li>
				<li>Hexa has basic strongly-typed enums, tagged enums (algebraic data types), enums with fields (tagged classes), and nice pattern matching over them!</li>
				<li>String type is built-in. All string instances are kept in memory only once, thus they are very fast to use as keys for dictionaries
					and reflection</li>
				<li>Namespaces are a thing</li>
				<li><code className="language-plaintext highlighter-rouge">switch</code> does <code className="language-plaintext highlighter-rouge">break</code> automatically for each case. You don’t place <code className="language-plaintext highlighter-rouge">break</code>s for <code className="language-plaintext highlighter-rouge">switch</code>es. <a href="https://www.phoronix.com/scan.php?page=news_item&amp;px=Kernel-Wimplicit-fallthrough">Saves you from some weird situations</a></li>
				<li>Inline classes (abstract types) over any other type</li>
				<li>Unwrapping “possibly null” values done explicitly as <code className="language-plaintext highlighter-rouge">if (let a = b)</code> safe binding or via <code className="language-plaintext highlighter-rouge">value as! Int</code> unsafe cast (this is the only way to do this)</li>
				<li>Generics and compile time syntax tree transformation (instead of token-level <code className="language-plaintext highlighter-rouge">#define</code> macro)</li>
			</ul>
		</>
	)
}
