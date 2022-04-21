import { Code } from "book/Code"

export const Article = () => {
	return (
		<>
			<p>Text block, or word, or sentence, or character, in Hexa are all called a “string”.
				String is an independent piece of human-readable something in computer memory. Strings do not contain any special meaning (compared to objects),
				and represented as type <code className="language-plaintext highlighter-rouge">String</code>.</p>

			<h3 id="syntax-of-strings">Syntax of strings</h3>

			<Code code={`let s: String = "hello"
let s = "hello"
// Compiler knows what qoutes mean
// and sets 's' type to 'String' for you`} />

			<p>Double- and single quoted strings have absolutely same meaning and features</p>

			<Code code={`"hello"
'hello' // No difference, nothing to worry about`} />

			<p>Strings support two basic operations: taking character at position and joining strings together.
				And they have only one property — length, or size.</p>

			<Code code={`let s = "hello" + "!" // Same as "hello!"
let s = "hello" + '!' // Mixing double- and single quoted strings is fine

let h = "hello"[0] // Starts from zero
let s = "hello"
let h = s[0] // "h"
let h = s.charAt(0) // Same effect

s.length // -> 6 characters, h-e-l-l-o-!
"hello!".length // -> 6
("hello" + "!").length // -> 6`} />

			<p>You cannot change characters of already created string, but you may change a string variable:</p>

			<Code code={`var s = "world" // Note using 'var' instead of 'let'
s = s + " " // 's' now contains 'world '
s = "hello " + s // Adds in front, 's' now contains 'hello world '
s += "!" // Same as s = s + "!"
console.log(a) // -> prints 'hello world !'`} />

			<h3 id="superpowers">Superpowers</h3>

			<p>Strings have special superpower: adding anything to string converts it to string (…sometimes into nonsensical stuff 😅)</p>

			<Code code={`"value: " + 3 // -> becomes "value: 3"
"value: " + [1, 2, 3] // -> becomes "value: 1,2,3"
"value: " + true // -> becomes "value: true"`} />

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

			<Code code={`let multiline = "what is in between
of those lines?"`} />

			<p>Hexa takes care for you, by always replacing <code className="language-plaintext highlighter-rouge">\r\n</code> to <code className="language-plaintext highlighter-rouge">\n</code>, saving your team mates from unneccessary headache and holywars:</p>

			<Code code={`let multiline = "what is in between\\nof those lines?"
//                                 ^^ note \\n in the middle`} />

			<h3 id="string-interpolation">String interpolation</h3>

			<p>Sometimes you may want to embed value into string or do basic formatting. To do this just mention variable name within <code className="language-plaintext highlighter-rouge">\()</code>:</p>

			<Code code={`let welcome = 'world'
console.log('hello \\(welcome)!') // -> prints 'hello world!'

// Basically the same as:
console.log('hello ' + welcome + '!') // -> prints 'hello world!'`} />

			<p>You may use any expressions within interpolation parethesis:</p>

			<Code code={`let a = [1,2,3]
console.log('ten is \\(5 + 5) while [\\(a)] length is \\(a.length)')
// -> prints 'ten is 10 while [1, 2, 3] length is 3'`} />

			<h3 id="raw-strings">Raw strings</h3>

			<p>Raw texts are surrounded by <strong>`backticks`</strong>. They don’t care about special characters.</p>

			<Code code={`console.log("hello\\tworld") // -> prints 'hello    world'
console.log('hello\\tworld') // -> prints 'hello    world'
console.log(\`hello\\tworld\`) // -> prints 'hello\\tworld'`} />

			<p>Raw strings <strong>do not</strong> support interpolation:</p>

			<Code code={`let welcome = 'world'
console.log(\`hello \\(welcome)!\`) // -> prints 'hello \\(welcome)!'`} />

			<p>They also keep line endings information as is:</p>

			<Code code={`let s = \`
\` // Contains \\n or \\r\\n depending on your code editor settings`} />

			<p>Only special case is embedding a backtick characted into raw string, possible by repeating backtick twise:</p>

			<Code code={`let s = \`this is \`\`backticked\`\` string\`
// Same as "this is \`backticked\` string"
// Note single backticks in a resulting string`} />

			<h3 id="optimization">Optimization</h3>

			<p>Strings are quite fast, they never change, so they never overhead. But they have a fault: string creation is a costly operation.
				New strings are created on concatentaion of existing ones, and conversion of objects to text (like printing formatted number to screen).</p>

			<p>Compiler tries it’s best to optimize such cases.
				In every obvious situation it builds a complete string: <code className="language-plaintext highlighter-rouge">"a" + "b"</code> is guaranteed to become <code className="language-plaintext highlighter-rouge">"ab"</code>. This optimization is always enabled.</p>

			<p>But sometimes you have to generate really big strings of many small ones.
				Instead of adding them with “+”, try putting them into array and join later:</p>

			<Code code={`// Instead of:
let result = a + b + c + ...

// Do:
let temp = []
temp.push(a)
temp.push(b)
temp.push(c)
...
let result = temp.join()`} />

			<p>While this may seem imperfect (from a very nervous systems programmer perspective who optimizes into eternity),
				speed of array operations is so good, most of the time you will not notice performance drops.</p>
		</>
	)
}
