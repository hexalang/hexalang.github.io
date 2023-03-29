import { Code } from "book/Code"
import { H2 } from "book/H2"

export const Article = () => {
	return (
		<>
			<p>Consumes tokens and produces syntax tree of <Code inline code={`Node`} /> elements.</p>

			<p>Result of parsing depends on conditional compilation defines set in <Code inline code={`hexa.json`} />, this affects only <Code inline code={`#if condition`} /> tokens.</p>

			<H2>Where to look</H2>

			<ul>
				<li>source\compiler\parser.hexa</li>
				<li>source\data\data.hexa</li>
				<li>source\data\nodes.hexa</li>
			</ul>
		</>
	)
}
