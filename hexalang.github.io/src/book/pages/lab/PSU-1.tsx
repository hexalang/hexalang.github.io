import { Code } from "book/Code"
import { H2 } from "book/H2"
import { H3 } from "book/H3"
import { FeatureState } from "book/Markup"
import { Img } from "book/Img"
import picture from '../images/byena.jpg'

export const PSU1 = () => <>
	<Img src={picture} style={{ borderRadius: '100%' }} alt="In the programmer's flow" width={256} />
	<p>
		Welcome to the very first issue of the Planned Syntax Updates.
		From time-to-time we update the syntax to ensure that Hexa meets real-world requirements.
		While we would like to never break the syntax, currently the user base is too small so the backward compatibility is not that critical.
	</p>

	<p>
		Sometimes it becomes pretty clear that specific syntax changes feel essential.
		It depends on the developers experience, IDE trends and other factors.
		In Hexa, we delay features until they become a necessity.
	</p>

	<p>
		Tell us what you think at discussions topic.
	</p>

	<H2>High priority</H2>
	<p>
		There is some things should be absolutely done before wide adoption.
		They affect large parts of existing code too.
	</p>

	<H3>Drop colon in variables</H3>
	<Code code={`// Before
var varName: Type
// Now
var varName Type`} />
	<p>
		GitHub previews should be updated (in repo settings and readme) and front page of the homepage.
	</p>
	<FeatureState done />

	<H3>Shorter constructor</H3>
	<p>
		Makes code look more DSL-like.
		Upper case words are always type identifiers, thus it was useless anyway.
		I don't think it is confusing for JavaScript people, some parts of the syntax haven't <Code inline code={`new`} /> keyword too.
	</p>
	<Code code={`// Before
value = new Type(arguments)
// After
value = Type(arguments)`} />
	<p>
		Hexa also supports fields initializer, but it's confusing.
	</p>
	<Code code={`// Before
value = new Type { fields } (arguments)
// This clearly means "fields are set after construction"
value = Type(arguments) { fields }`} />
	<FeatureState />

	<H3>Drop colon in enums</H3>
	<Code code={`// Look at all those annoying colons\nenum E : T { A(v: T)\n// Becomes\nenum E T { A(v T)`} />
	<p>
		Update language server hints too!
		Allow <Code inline code={`Bool`} /> as possible enum type also.
	</p>
	<FeatureState />

	<H3>Drop colon in function arguments</H3>
	<p>
		Welcome to the yet another colon dropping issue! This time:
		<br />
		<br />
		<Code code={`fun name(a: T): T\n// Becomes\nfun name(a T) T`} />
	</p>
	<FeatureState done />

	<H3>Import syntax is just weird</H3>
	<p>
		Keywords reusing sometimes is not right decision.
		Here we can make "from" a contextual "keyword" and not introduce global reserved word.
	</p>
	<Code code={`// LMAO\nimport obj in "path"\n// Becomes\nimport obj from "path"`} />
	<FeatureState />

	<H2>Lexer fixes</H2>
	<p>
		Some fixes apparently to be done. No optimizations yet.
		Note: Lexer is not Parser. Lexer splits text to tokens. Check the corresponding article.
	</p>
	<ul>
		<li><strong>NOT DONE</strong> Parse <Code inline code={`@as`} /> and other keyword-like decorators</li>
		<li><strong>NOT DONE</strong> Rename tokens, just better names for some of them</li>
		<li><strong>NOT DONE</strong> Add/parse comments and doc comments tokens and condition of excluding them</li>
		<li><strong>NOT DONE</strong> Seems like conditional compilation better to do at this stage</li>
	</ul>
	<FeatureState />

	<H2>More</H2>

	<H3>Having Int32 is confusing</H3>
	<p>
		Same for UInt32.
		Just leave Int and UInt and some way to enforce precise emulation on targets like JavaScript
		with some thing as <Code inline code={`@preciseMath a + b`} /> or method-based.
	</p>
	<FeatureState />

	<H3>Interfaces instead of anonymous objects</H3>
	<p>
		Aka Go's <Code inline code={`varName interface { }`} /> instead of <Code inline code={`varName { }`} />.
		<br />
		This fixes function return value issue after colon drops, and, probably makes sense on it's own?
		<br />
		Allows code <Code inline code={`{ a T }`} /> be like <Code inline code={`{ var a T fun b ... }`} />.
	</p>
	<FeatureState />

	<H3>Type alias is too long to type</H3>
	<p>
		Keywords reusing strikes again.
		Bonus point: "type" keyword may be used for meta-methods and due to their common usage
		this saves a lot of keystrokes.
	</p>
	<Code code={`// Nah or fine?\ndeclare A = B\n// Becomes\ntype A = B`} />
	<FeatureState />

	<H3>No prefix increments and decrements</H3>
	<p>
		They are annoying, confusing, useless and most importantly
		people tend to use them in absolutely inappropriate places.
	</p>
	<Code code={`// Remove\n--i\n++i\n// Still support\ni--\ni++`} />
	<FeatureState />

	<H3>Parse meta-methods</H3>
	<p>
		IDK how to call them right now, let them be meta-methods.
		Just add parsing capability.
	</p>
	<Code code={`
name.var.method
name.type.method
name.class.method
name.enum.method
fun.method
name.fun.method
`} />
	<FeatureState />

	<H3>Require blocks in cases</H3>
	<p>
		Due to lack of blocks in cases by default, readability sometimes ruined.
		Require blocks when more than N expressions.
	</p>
	<Code code={`
case a: a b c
// Requires block:
case a: { a b c }
`} />
	<FeatureState />

	{
		/*
	No @decs on Types, @decs var/let/type
	drop new keyword, add T { }
	declare T = T2 to type T = T2
	Enum(name: T) keep as is? cause looks the same as constructor?
	case : {3/* + expr* /}
	(a)=gt_ must be a=gt_
	no nested ternary
	[,] trailing commas

	add defer kw
	PSU type kw to be used for meta methods too

	(T).x (non-static of instance) != T.x (static field)
	T.new().x huh?

	! not (but just in lexer) rename to .Not
	Lexer to class with fields to avoid closures? or finish inlining
	^ lexer instance could be allocated on stack as proved by `this` outlive analysis

	enums non-positional

	{'({ doc, tested, done }) => '} unwrap args like this also for fun
	*/
	}

	<H2>CLI</H2>
	<p>
		UX of the command line definitely can be improved.
		Let's think about it.
	</p>

	<H3>Command line arguments</H3>
	<p>
		Dedicated argument parser should allow any order of flags like <Code inline code={`--define`} /> and <Code inline code={`--target`} />.
	</p>
	<p>
		Would be cool to have unit tests for argument parsing engine too.
	</p>
	<FeatureState />
</>
