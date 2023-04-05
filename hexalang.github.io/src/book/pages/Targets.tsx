import { H2 } from "book/H2"
import { Page } from 'book/Page'
import { Article as Normalizer } from './Normalizer'
import { CompilerUrl } from "book/JustUrl"
import { Code } from "book/Code"
import { H3 } from "book/H3"

export const Article = () => {
	return (
		<>
			<p>Code generation is based on concept of <Page page={Normalizer}>Nice Nodes</Page>. This technology would be improved over time.</p>

			<p>Note: it’s currently impossible to add targets dynamically to the compiler, you have to modify compiler code. Places of modification:</p>

			<ul>
				<li><CompilerUrl>source\targets</CompilerUrl> remember to update hexa.json</li>
				<li><CompilerUrl>source\targets.hexa</CompilerUrl></li>
				<li><CompilerUrl>library</CompilerUrl> referred by setLibrary</li>
				<li><CompilerUrl>source\main.hexa</CompilerUrl> call registerTarget</li>
			</ul>

			<p>Feel free to create pull requests for new targets! Later they will be extracted to a separate libraries.</p>

			<p>Note: Hexa follows pragmatic approach for language targets.
				<strong> Don’t</strong> create ‘universal’ language targets, like “Lua”, “Lisp”, “JavaScript+TypeScript” or “Java+C#” etc.</p>

			<p>Instead, create separate targets for each specific goal or platform.
				Like “Lua 5 full-featured target” vs “Lua 5 performance-oriented target” vs “LuaJIT 2 target”,
				“TypeScript target” vs “JavaScript ES4 for IE6/etc”, “PHP5+” vs “PHP7+”, “AutoCad Lisp” vs “Closure”,
				“Arduino C” vs “Clang with full-LLVM intrinsics”, “Unity Script C#” vs “C# 8.0”, etc.</p>

			<p>‘Universal’ targets always lack features and performance, and much harder to develop, test and maintain.</p>

			<H2>Expected behavior</H2>
			<H3>Unwanted enum optimization</H3>
			<p>
				Each enum value of non-constant enumeration must be a separate instance.
				It should be possible to use enum values as keys in <Code inline code={`Map`} />.
				For example, in parsers, user may attach some meta data onto AST node, say position of the node,
				and if the value of the <Code inline code={`break`} /> node would be reused, operation
				<Code inline code={`positions.get(node)`} /> will return data for the wrong node.
				This was an actual bug in the Hexa compiler.
			</p>

			<Code code={`// Example of such enum:
enum Node {
	While(condition, expression)
	Break
	// Note absence of the () in Break,
	// you should NOT deduplicate this value!
}
`} />
			<H3>Generalization of null</H3>
			<p>
				Hexa assumes <Code inline code={`null`} /> to be <i>the</i> value for <i>every</i> optional type.
				Checks like <Code inline code={`value != null`} /> should be done with <Code inline code={`==`} /> operator
				instead of <Code inline code={`===`} /> in targets with extra sentinel values like <b>undefined</b> in JavaScript.
				In targets with items like <Code inline code={`std::optional`} />, generator must infer the implementation and use
				optional type accordingly. Try to not make this implementation detail explicit to the user until strictly necessary.
				Normalizer may provide some meta data around <Code inline code={`null`} /> keyword and it's conversion into
				actual usable value with proper type information.
				Same goes for <Code inline code={`if let`} /> bindings,
				where you should generate proper <Code inline code={`optional.unwrap()`} /> logic according to the target and type.
			</p>

			<H2>Available attributes</H2>

			<ul>
				<li><code className="language-plaintext highlighter-rouge">@rename</code></li>
				<li><code className="language-plaintext highlighter-rouge">@require</code></li>
				<li><code className="language-plaintext highlighter-rouge">@operator</code></li>
			</ul>

			<p><Page page={Normalizer}>Normalizer</Page> will lower <em>target users</em> code, so even if your generator supports only basics,
				most of the Hexa will work anyway. For example, most nested functions are converted to global ones,
				so your may show error message “this function cannot be lowered to global one, nested functions are not supported”
				if your target don’t support them (or you don’t implement them for performance or any reasons),
				but have most of the “normal” code still work unmodified (like third-party libraries).</p>
		</>
	)
}
