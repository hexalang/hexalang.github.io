import { FC } from 'react'
import styled, { css } from 'styled-components'
import { Code } from '../Code'

export const Sticky = styled.div`
	position: sticky;
	top: 0;
`

interface Props {
	id: string
}

const H2: FC<Props> = ({ children, id }) => {
	return <>
		<div id={id} />
		<h2 data-id={id}><a href={'#' + id}>{children}</a></h2>
	</>
}

export const Article = () => {
	return (
		<>
			<p>At first, there are common things that differentiate Hexa to most other programming languages:</p>

			<ul>
				<li>No semicolons <Code inline code={`;`} /> at all</li>
				<li>Language is strongly typed, types are <a href="https://en.wikipedia.org/wiki/Type_inference">automatically inferred</a> (guessed) when possible</li>
				<li>Compiles very straitforwardly to JavaScript and machine code (LLVM and C) because of semantics of <a href="https://en.wikipedia.org/wiki/Lowest_common_denominator_(computers)">lowest common denominator</a>,
					this ensures native interopability in both cases and very high performance</li>
				<li>Compiles <a href="https://en.wikipedia.org/wiki/Source-to-source_compiler">to any other programming language</a>, if corresponding code generation backend is provided and target language is not super
					different to Hexa</li>
				<li>No garbage collection in native backends (LLVM and C), possibility of manual memory management - otherwise
					threadsafe <a href="https://en.wikipedia.org/wiki/Automatic_Reference_Counting">automatic reference counting</a> is used</li>
				<li>Safety-first: null safety, checked exceptions, <a href="https://en.wikipedia.org/wiki/Iterator">iterators</a>, special syntax features</li>
			</ul>

			<p>Compare with known language by choosing it on the right sidebar <img className="emoji" title=":arrow_right:" alt=":arrow_right:" src="https://github.githubassets.com/images/icons/emoji/unicode/27a1.png?v8" height="20" width="20" /></p>

			<H2 id="javascript">JavaScript</H2>

			<ul>
				<li><Code inline code={`var`} /> in Hexa is a <Code inline code={`let`} /> in JavaScript. Everyone uses <Code inline code={`let`} /> in js today anyway, but <Code inline code={`var`} /> as a keyword is more common and not breaks your old habits</li>
				<li><Code inline code={`let`} /> compiles to <Code inline code={`const`} />, accordingly, saving you some keystrokes</li>
				<li>Normal <Code inline code={`function`} /> functions are always compiled to <Code inline code={`()=>`} /> arrow-functions, thus they catch outer <Code inline code={`this`} /> and should be defined before calling position</li>
				<li>Hexa has <Code inline code={`()=>`} /> syntax too</li>
				<li>Types are placed like this: <Code inline code={`var a: Int = 1`} /> and <Code inline code={`function (v: Int): Int`} /></li>
				<li>Class fields have <Code inline code={`var`} /> and <Code inline code={`let`} /> before their names, also there is one and only visibility modifier <Code inline code={`private`} />.
					Methods prepended with <Code inline code={`function`} />. Constructors are <Code inline code={`new()`} />. Placing <Code inline code={`this.`} /> before field names isn’t required.
					Braces <Code inline code={`{}`} /> aren’t required for function bodies.</li>
			</ul>

			<p>Full example:</p>

			<Code code={`class A {
    var a = 123
    new (value) a = value
    private function return_a() {
        return this.a + 1 + a
    }
}

let a = new A(456)`} />

			<ul>
				<li>Maps are <Code inline code={`[K:V]`} />, empty <Code inline code={`new Map()`} /> is <Code inline code={`[:]`} /> in Hexa: <Code inline code={`var map: [String: Int] = [:]`} /> then <Code inline code={`map = ["JennysAge": 12, "BillsAge": 13]`} /></li>
				<li>Empty objects are <Code inline code={`{:}`} /></li>
				<li>Strings are interpolated with <Code inline code={`\\()`} />. This works for all (<Code inline code={`""`} /> and <Code inline code={`''`} />) strings except for raw ones surrounded with backticks.
					Strings may be mutliple lines. <Code inline code={`let age = 13 let billsAge = 'Bill\\'s age is \\(age)!'`} /></li>
				<li>No <Code inline code={`===`} /> and <Code inline code={`!==`} /> operators, use <Code inline code={`strictEqual`} /> and <Code inline code={`strictNotEqual`} /> functions</li>
				<li>Only <Code inline code={`null`} />. Still, <Code inline code={`undefined`} /> is available as just an external variable (only in JavaScript backend)</li>
				<li>Arrays are typed and contain values of a single type: <Code inline code={`let a: [Int] = [1, 2, 3] // Int's only`} /></li>
				<li>Not so many loops and iterators. Only <Code inline code={`for (a in b)`} /> which is same as <Code inline code={`for (const a of b)`} /> in JS,
					and <Code inline code={`while () {}`} /> with a <Code inline code={`do {} while ()`} /> ones. Also some special cases like <Code inline code={`for (i in 5)`} />, <Code inline code={`for (i in arr.length)`} /> and <Code inline code={`for (i in 0 ... arr.length)`} />. Maybe others in future, but nothing with complicated hard-to-read syntaxes (like <Code inline code={`(in/of/each a:5..<b:7)`} />)</li>
				<li>You may use <Code inline code={`,`} /> comma to list multiple conditions instead of <Code inline code={`&&`} />! <Code inline code={`if (a, b == c, d > 5) {} else {}`} /></li>
				<li>Null-avoiding checks may be done with <Code inline code={`if (let a = b)`} /> syntax.
					For example: <Code inline code={`var i: Int? = null if (let int = i, int > 5) compute(int)`} /> does check for <Code inline code={`i != null`} />, sets it value to <Code inline code={`int`} />, does
					all <em>condition checks</em> for <Code inline code={`int`} /> and calls <Code inline code={`compute`} /> with a guaranteed non-null value <em>if they a met</em>.</li>
				<li><Code inline code={`switch`} /> does <Code inline code={`break`} /> automatically for each case. You don’t place <Code inline code={`break`} />s for <Code inline code={`switch`} />es</li>
				<li>Modularity is very different (based on package-level namespaces), but on-demand compatible with JS</li>
			</ul>

			<p><a href="https://hexalang.github.io/book/FromJavaScript.html">More on porting from JavaScript</a></p>

			<h2 id="typescript">TypeScript</h2>

			<ul>
				<li>Hexa type system is stricter than TypeScript’s: <Code inline code={`Int`} /> + <Code inline code={`Float`} /> vs just <Code inline code={`number`} />. Types consider data-layout in memory. For example, <Code inline code={`Array<Float>`} /> is not compatible with <Code inline code={`Array<Int>`} /> and vise-versa, because they are stored (even in JavaScript engines)
					as different data types (basically, V8 transforms <Code inline code={`[1,2,3]`} /> to <Code inline code={`Int32Array`} /> until you add some <Code inline code={`Float`} />s)</li>
				<li>Types always start with upper-case <Code inline code={`TypeName`} />, functions, methods and vars with lowercase <Code inline code={`varName`} /></li>
				<li>Basic types are <Code inline code={`Bool`} />, <Code inline code={`Int`} />, <Code inline code={`Float`} />, <Code inline code={`Void`} />, <Code inline code={`String`} />, <Code inline code={`Array<T>`} /> or <Code inline code={`[T]`} />, <Code inline code={`Map<K, V>`} /> or <Code inline code={`[K:V]`} />, <Code inline code={`Any`} /> and some other</li>
				<li>Hexa has special advanced <Code inline code={`enum`} /> type family (yes, not only “list of constants”, but complex enums, enum classes, computational fields, etc)</li>
				<li>Types inferred in more lazy manner, especially generics</li>
				<li>Some features not available in idiomatic Hexa code, but instead used only for external JavaScript bindings, like accessing
					class instance as object with <Code inline code={`[]`} />. Compiler will optimize, rearrange and rename those fields anyway. You will use <Code inline code={`strictEqual()`} /> function which compiles to <Code inline code={`===`} />, but no operator <Code inline code={`===`} /> available in normal code (this is done for sanity and to support more generation platforms) and others. <Code inline code={`instanceof()`} /> would be compiled to <Code inline code={`instanceof`} /> operator accordingly, but again, idiomatic Hexa has own <Code inline code={`is`} /> operator, which may be not suitable for external bindings depending on situation</li>
				<li>If you see, that some magic feature is not supported, it is done for performance reasons, both native and dynamic targets, and of course for code portability between them</li>
				<li><Code inline code={`if (x != null)`} /> is not considered null-safe (<Code inline code={`x`} /> may be changed at any moment, what is safety here?), you have to use <Code inline code={`if (let x = x)`} />
					binding, like <Code inline code={`if (let a = obj.a, let b = obj.b, a.x > b.x)`} /> or <Code inline code={`if (let o = obj, o.a.x > o.b.x)`} /> if <Code inline code={`obj`} /> is nullable</li>
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
				<li><Code inline code={`switch`} /> does <Code inline code={`break`} /> automatically for each case. You don’t place <Code inline code={`break`} />s for <Code inline code={`switch`} />es. <a href="https://www.phoronix.com/scan.php?page=news_item&amp;px=Kernel-Wimplicit-fallthrough">Saves you from some weird situations</a></li>
				<li>Inline classes (abstract types) over any other type</li>
				<li>Unwrapping “possibly null” values done explicitly as <Code inline code={`if (let a = b)`} /> safe binding or via <Code inline code={`value as! Int`} /> unsafe cast (this is the only way to do this)</li>
				<li>Generics and compile time syntax tree transformation (instead of token-level <Code inline code={`#define`} /> macro)</li>
			</ul>
		</>
	)
}
