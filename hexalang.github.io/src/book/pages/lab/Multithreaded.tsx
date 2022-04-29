import { H2 } from "book/H2"
import { H3 } from "book/H3"

export const Article = () => {
	return (
		<>
			<p>Make compiler fully multithreaded! It seems that possible to make threaded even the typer and codegen, not only parsing phase.</p>
			<H2>Parsing</H2>

			<p>Syntactical transformations may be done at per-file or per-decorator level, depending on how much metadata is needed.</p>

			<H3>Cache</H3>
			<H2>Analysis</H2>
			<H3>Typer</H3>
			<H3>Normalizer</H3>
			<H2>Code generation</H2>
			<H3>JavaScript</H3>
			<H3>Native IR</H3>
		</>
	)
}
