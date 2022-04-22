import { Code } from "book/Code"

export const Article = () => {
	return (
		<>
			<p>Consumes tokens and produces syntax tree of <Code inline code={`Node`} /> elements.</p>

			<p>Result of parsing depends on conditional compilation defines set in <Code inline code={`hexa.json`} />, this affects only <Code inline code={`#if condition`} /> tokens.</p>
		</>
	)
}
