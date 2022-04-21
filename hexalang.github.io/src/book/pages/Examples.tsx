import { Code } from "book/Code"
import { H2 } from "book/H2"
import { H3 } from "book/H3"
import { Page } from "book/Page"

export const Article = () => {
	return (
		<>
			<p>(draft)</p>

			<H3 id="hello-world">Hello, World!</H3>

			<Code code={`console.log("Hello, World!")`} />

			<ul>
				<li><a href="https://hexalang.github.io/book/Hello.html">Hello, Hexa!</a></li>
			</ul>

			<H3 id="comments">Comments</H3>

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

			<H2 id="common-variable-types">Common variable types</H2>

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

			<H2 id="deeper-overview">Deeper overview</H2>

			<H3 id="literals">Literals</H3>

			<Code code={`0x10 // Hexadecimal
\`C:\\Windows\\System32\`
// Raw strings do *not* do pre-escaping,
// but generated to JavaScript with escapes`} />

			<H3 id="lists">Lists</H3>

			<Code code={`[] // Empty structure
[1, 2, 3]
[true, false, true, true] // Elements of same type
[
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1] // No trailing comma
]`} />

			<H2 id="maps">Maps</H2>

			<Code code={`[:] // Empty map
[ "hello": "world!" ]
[ 1: "one", 2: "two" ] // Elements of same type`} />

			<H2 id="structures">Structures</H2>

			<Code code={`{:} // Empty structure
{ hello: "world!" }
{ name: "Jane", age: 21 }`} />

			<H2 id="strings">Strings</H2>

			<Code code={`"Strings are
  multi
    line"
"\\'Second\\nline\\'" // Character escapes`} />

			<H2 id="advanced-features">Advanced features</H2>

			<p>TODO</p>

			<H2 id="not-yet-implemented-features">Not yet implemented features</H2>

			<p>TODO</p>
		</>
	)
}
