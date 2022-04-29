import { Code } from "book/Code"
import { H2 } from "book/H2"
import { H3 } from "book/H3"
import { Page } from "book/Page"
import { Article as Hello } from './Hello'
import { Article as Strings } from './Strings'

export const Article = () => {
	return (
		<>
			<p>(draft)</p>

			<H3>Hello, World!</H3>

			<Code code={`console.log("Hello, World!")`} />

			<ul>
				<li><Page page={Hello}>Hello, Hexa!</Page></li>
			</ul>

			<H3>Comments</H3>

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

			<H2>Common variable types</H2>

			<Code code={`null // No value
42 // 32-bit signed integer
123.456 // 64-bit floating-point number
true false // Boolean type
"string" // String or text type
["red", "green", "blue"] // Array type or list`} />

			<ul>
				<li><Page page={Strings}>Strings and text</Page></li>
			</ul>

			<p>Variables in Hexa are statically typed:</p>

			<Code code={`var a: Int = 123
let b: Bool = true`} />

			<p>Types a inferrable (guessed automagically):</p>

			<Code code={`var a = 123
let b = true`} />

			<H2>Deeper overview</H2>

			<H3>Literals</H3>

			<Code code={`0x10 // Hexadecimal
\`C:\\Windows\\System32\`
// Raw strings do *not* do pre-escaping,
// but generated to JavaScript with escapes`} />

			<H3>Lists</H3>

			<Code code={`[] // Empty array
[1, 2, 3]
[true, false, true, true] // Elements of same type
[
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1] // No trailing comma
]`} />

			<H2>Maps</H2>

			<Code code={`[:] // Empty map
[ "hello": "world!" ]
[ 1: "one", 2: "two" ] // Elements of same type`} />

			<H2>Structures</H2>

			<Code code={`{:} // Empty structure
{ hello: "world!" }
{ name: "Jane", age: 21 }`} />

			<H2>Strings</H2>

			<Code code={`"Strings are
  multi
    line"
"\\'Second\\nline\\'" // Character escapes`} />

			<H2>Advanced features</H2>

			<p>TODO</p>

			<H2>Not yet implemented features</H2>

			<p>TODO</p>
		</>
	)
}
