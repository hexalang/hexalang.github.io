import { H2 } from "book/H2"
import { H3 } from "book/H3"
import { Code } from "book/Code"
import { FeatureState } from "book/Markup"

export const Article = () => {
	return (
		<>
			<p>Add namespaces to <Code inline code={`@decorators`} /> and something more, probably decorator aliases and global roots.</p>

			<Code code={`@namespace.decorator
import @decorator as @alias // No 'from' clause
@hexa.item == @item // @hexa is optional global root for built-in decorators`} />

			<H2>Feature by feature</H2>
			<p>
				Should we add three or more namespace levels like <Code inline code={`@namespace.decorator.more.other`} /> is open for discussion.
				We generally follow the rule of having only one level of namespace depth
				(like in <Code inline code={`import * as oneLevel from ...`} /> and used as <Code inline code={`oneLevel.item`} />)
			</p>

			{false && 'TODO list of available decorators in doc Attributes.tsx'}
			<H3>One namespace level</H3>
			<p>
				Should be just <Code inline code={`namespace String`} /> instead of array in the AST node.
			</p>
			<FeatureState />
			<H3>Alias</H3>
			<p>
				For decorators and namespaces too?
			</p>
			<FeatureState />
			<H3>Global root</H3>
			<p>
				This should be used across standard library for clarity.
			</p>
			<FeatureState />
		</>
	)
}
