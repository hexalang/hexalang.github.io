import { Code } from "book/Code"

export const Article = () => {
	return (
		<>
			<p>Add namespaces to <Code inline code={`@decorators`} /> and something more (soon)</p>

			<Code code={`@namespace.decorator`} />
		</>
	)
}
