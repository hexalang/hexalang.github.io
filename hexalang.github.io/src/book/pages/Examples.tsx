import { Code } from "book/Code"

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

			<Code code={`console.log("Hello, World!")`} />

			<ul>
				<li><a href="https://hexalang.github.io/book/Hello.html">Hello, Hexa!</a></li>
			</ul>

			<h3 id="comments">Comments</h3>

			<p>Comments are JavaScript-style. Multi-line comments are nestable.</p>

			<Code code={`// Single-line comment.

/*
  Multi-line
  comment.
*/

/*
  Nested

  /* multi-line */

  comment.
*/`} />

			<h2 id="common-variable-types">Common variable types</h2>

			<Code code={`null // No value
42 // 32-bit signed integer
123.456 // 64-bit floating-point number
true false // Boolean type
"string" // String or text type
["red", "green", "blue"] // Array type or list`} />

			<ul>
				<li><a href="https://hexalang.github.io/book/Strings.html">Strings</a></li>
			</ul>

			<p>Variables in Hexa are statically typed:</p>

			<Code code={`var a: Int = 123
let b: Bool = true`} />

			<p>Types a [inferrable]:</p>

			<Code code={`var a = 123
let b = true`} />

			<h2 id="deeper-overview">Deeper overview</h2>

			<h3 id="literals">Literals</h3>

			<Code code={`0x10 // Hexadecimal
\`C:\\Windows\\System32\`
// Raw strings do *not* do pre-escaping,
// but generated to JavaScript with escapes`} />

			<h3 id="lists">Lists</h3>

			<Code code={`[] // Empty structure
[1, 2, 3]
[true, false, true, true] // Elements of same type
[
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1] // No trailing comma
]`} />

			<h2 id="maps">Maps</h2>

			<Code code={`[:] // Empty map
[ "hello": "world!" ]
[ 1: "one", 2: "two" ] // Elements of same type`} />

			<h2 id="structures">Structures</h2>

			<Code code={`{:} // Empty structure
{ hello: "world!" }
{ name: "Jane", age: 21 }`} />

			<h2 id="strings">Strings</h2>

			<Code code={`"Strings are
  multi
    line"
"\\'Second\\nline\\'" // Character escapes`} />

			<h2 id="advanced-features">Advanced features</h2>

			<p>TODO</p>

			<h2 id="not-yet-implemented-features">Not yet implemented features</h2>

			<p>TODO</p>
		</>
	)
}
