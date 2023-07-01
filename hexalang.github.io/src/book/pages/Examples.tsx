import { Code } from "book/Code"
import { H2 } from "book/H2"
import { H3 } from "book/H3"
import { Page } from "book/Page"
import { Article as Hello } from './Hello'
import { Article as Strings } from './Strings'

export const Article = () => {
	return (
		<>
			<p>
				Hexa's syntax is greatly inspired by TypeScript and Swift.
			</p>
			<p>
				Standard library is close to JavaScript one, as Hexa supports Web as a first-class target.
			</p>

			<H3>Hello, World!</H3>

			<p>
				If you are familiar with related programming languages,
				use this overview to quickstart your Hexa journey!
			</p>

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
true and false or not true // Boolean operators
"string" // String or text type
["red", "green", "blue"] // Array type or list`} />

			<ul>
				<li><Page page={Strings}>Strings and text</Page></li>
			</ul>

			<p>Variables in Hexa are statically typed:</p>

			<Code code={`var a Int = 123
let b Bool = true`} />

			<p>Types a inferrable (guessed automagically):</p>

			<Code code={`var a = 123
let b = true`} />

			<H3>Blocks</H3>

			<Code code={`if true {
	// When true
} else {
	// When false
}

while x < 10 { x++ }

// Some blocks may be used as values
return if a { x } else { y }`} />

			<H3>Iterators</H3>

			<Code code={`var demo = [1, 2, 3]
for value in demo {
	hello(value)
}`} />
			<H3>Functions</H3>

			<Code code={`fun hello(world (Int) => Bool) Bool {
	return world(123)
}

let result Bool = hello(fun (value Int) {
	return value > 100
})

// Shorter syntax
let result Bool = hello(value => value > 100)

// Using block as a value
let result Bool = hello(value => {
	value > 100
})`} />

			<H2>Deeper overview</H2>

			<H3>Literals</H3>

			<Code code={`0x10 // Hexadecimal
\`C:\\Windows\\System32\`
// Raw strings do *not* do pre-escaping,
// but generated to JavaScript with escapes`} />

			<H3>Arrays</H3>

			<Code code={`[] // Empty array
[1, 2, 3]
[true, false, true, true] // Elements of same type
[
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1] // No trailing comma
]

var a [Int] = [1, 2, 3]`} />

			<H3>Maps</H3>

			<Code code={`[:] // Empty map
[ "hello": "world!" ]
[ 1: "one", 2: "two" ] // Elements of same type

var a [Int : String] = [1: "hello", 2: "world"]`} />

			<H3>Structures</H3>

			<Code code={`{:} // Empty structure
{ hello: "world!" }
{ name: "Jane", age: 21 }`} />

			<H3>Strings</H3>

			<Code code={`"Strings are
  multi
    line"
"\\'Second\\nline\\'" // Character escapes`} />

			<H2>Enums</H2>

			<Code code={`enum E Int {
	X = 1
	Y = 2
}

let value = E.X

switch value {
	case X: console.log("got X!")
}`} />

			<H3>Complex enums</H3>

			<p>
				Also known as tagged unions:
			</p>

			<Code code={`enum A {
	X(value Int)
	Y // No attached values
}

let demo = A.X(value: 123)

switch demo {
	case X(value): console.log("got: " + value)
}`} />

			<H2>Classes</H2>

			<Code code={`class Demo {
	var x Int

	new (y Int) {
		this.x = y
	}

	fun hello(z Int) {
		this.x = z
		x = z // Short syntax
	}
}

// External classes are declared as "declare class Name {}"

let value = new Demo(123)
value.hello(345)`} />

			<H3>Aliases</H3>
			<Code code={`class A {}

declare B = A`} />

			<p>
				This was a short syntax overview.
				Not every feature was listed.
				Book provides more examples.
			</p>
		</>
	)
}
