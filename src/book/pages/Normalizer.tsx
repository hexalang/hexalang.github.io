import { Page } from 'book/Page'
import { Article as Targets } from './Targets'
import { H2 } from "book/H2"
import { CompilerUrl } from "book/JustUrl"
import { Code } from '../Code'

export const Article = () => {
	return (
		<>
			<p>Produces tree of <Page page={Targets}>Nice Nodes</Page> from <i>typed</i> syntax tree.</p>

			<p>Performs essential optimizations and lowers the code to the lowest common denominator.</p>

			<p>
				By design you cannot disable optimizations and tree shaking.
				Control over this behavior is applied on per-item basis (types, code blocks, etc).
				Try to use built-in types like <Code inline code={`String`} /> as much as possible, so you don't have
				to re-implement optimizations on the generation phase.
			</p>

			<p>
				Most of the variable renaming and so-called "name mangling" is done here.
				Code generator may provide some additional information about target-specific
				reserved keywords.
				This should be generally possible to use names from Nice Nodes with little to none renaming at the generation phase.
			</p>

			<Code code={`// Example of renaming and optimization:
{
	var a = 123
	var a = 345
	var a = 1 + 1
}
// Hexa allows variable shadowing (same name within one scope)

// Renamed version ready for generation may look like this:
{
	var a = 123
	var a_2 = 345 // Note the added unique counter _2
	var a_3 = 2 // Pre-computed
}
`} />

			<p>Normalizer also creates implementations for each generic class instantiation (type checking is still done at Typer phase).</p>

			<p>
				Tree shaking and unused code removal depends on how item is used and exported.
				Some expressions may be computed at compile time (like string concatenation)
				and create a cascade effect of removing huge syntax trees and types,
				if they become unused after optimization.
			</p>

			<H2>Where to look</H2>

			<ul>
				<li><CompilerUrl>source\compiler\normalizer.hexa</CompilerUrl></li>
				<li><CompilerUrl>source\data\nice.hexa</CompilerUrl></li>
			</ul>
		</>
	)
}
