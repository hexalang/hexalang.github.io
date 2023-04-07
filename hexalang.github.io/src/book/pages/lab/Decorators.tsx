import { Code } from "book/Code"

export const Article = () => {
	return (
		<>
			<p>Add namespaces to <Code inline code={`@decorators`} /> and something more, probably decorator aliases and fake roots.</p>

			<Code code={`@namespace.decorator
import @decorator as @alias // No 'in' clause
@hexa.item == @item // @hexa is fake global root for built-in decorators`} />

			<p>
				Should we add three or more namespace levels like <Code inline code={`@namespace.decorator.more.other`} /> is open for discussion.
				We generally follow the rule of having only one level of namespace depth
				(like in <Code inline code={`import * as oneLevel in ...`} /> and used as <Code inline code={`oneLevel.item`} />)
			</p>
		</>
	)
}
