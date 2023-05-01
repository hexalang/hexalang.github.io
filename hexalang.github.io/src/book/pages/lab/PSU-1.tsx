import { Code } from "book/Code"
import { H2 } from "book/H2"
import { H3 } from "book/H3"
import { FeatureState } from "book/Markup"
import { Img } from "book/Img"
import picture from '../images/byena.jpg'

export const PSU1 = () => <>
	<Img src={picture} style={{ borderRadius: '100%' }} alt="So happy! New features, yay!" width={256} />
	<p>
		Welcome to the very first issue of the Planned Syntax Updates.
		From time-to-time we update the syntax to ensure that Hexa meets real-world requirements.
		While we would like to never break the syntax, currently the user base is too small so the backward compatibility is not that critical.
	</p>
	<p>
		<strong>THIS LIST IS NOT COMPLETE AND WILL BE UPDATED</strong>
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
`} />

	<p>
		GitHub previews should be updated (in repo settings and readme) and front page of the homepage.
	</p>

	<FeatureState />

	<H3>Shorter constructor</H3>
	<H3>Drop colon in enums</H3>
	Update language server hints too
	Allow Bool
	<H3>Drop colon in function arguments</H3>
	<p>
		Welcome to the yet another colon dropping issue! This time:
	</p>

	<H2>Lexer fixes</H2>
	<p>
		Some fixes apparently to be done. No optimizations yet.
		Note: Lexer is not Parser. Lexer splits text to tokens. Check the corresponding article.
	</p>
	<ul>
		<li><strong>DONE</strong> Parse <Code inline code={`@as`} /> and other keyword-like decorators</li>
		<li><strong>DONE</strong> Rename tokens, just better names for some of them</li>
		<li><strong>DONE</strong> Add/parse comments and doc comments tokens and condition of excluding them</li>
		<li><strong>DONE</strong> Seems like conditional compilation better to do at this stage</li>
	</ul>

	<H2>More</H2>
	<H3>Having Int32 is confusing</H3>
	Same for UInt32
	<H3>Interfaces instead of anonymous objects</H3>
	aka go varName interface { }

	h1 name
	body
	h2 improvements Profit
	<FeatureState tested />

	`for in` to `for of` so `import of`?
	^ or make `from` contextual keyword

	No @decs on Types, @decs var/let/type
	drop new keyword, add T { }
	declare T = T2 to type T = T2
	Enum(name: T) keep as is? cause looks the same as constructor?
	case : {3/* + expr*/}
	(a)=gt_ must be a=gt_
	no nested ternary
	[,] trailing commas
	no prefix increments and decrements
	add defer kw
	PSU type kw to be used for meta methods too

	(T).x (non-static of instance) != T.x (static field)
	T.new().x huh?

	! not (but just in lexer) rename to .Not
	Lexer to class with fields to avoid closures? or finish inlining
	^ lexer instance could be allocated on stack as proved by `this` outlive analysis

	.var .type .fun.

	this to hexa lab, enums non-positional
	PSU require { } over case in N+

	{'({ doc, tested, done }) => '} unwrap args like this also for fun
</>
