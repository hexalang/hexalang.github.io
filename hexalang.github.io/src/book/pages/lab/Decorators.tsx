import { Code } from "book/Code"

export const Article = () => {
	return (
		<>
			<p>Add namespaces to <Code inline code={`@decorators`} /> and something more, probably decorator aliases and fake roots.</p>

			<Code code={`@namespace.decorator
import @decorator as @alias // No 'in' clause
@hexa.item == @item // @hexa is fake global root for built-in decorators`} />

			<p>Should we add three or more namespace levels like <Code inline code={`@namespace.decorator.more.other`} /> is open for discussion.</p>
		</>
	)
}
