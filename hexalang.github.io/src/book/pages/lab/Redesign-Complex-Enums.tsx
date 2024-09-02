import { Code } from "book/Code"
import { H2 } from "book/H2"

export const Article = () => {
	return (
		<>
			<p>The idea is to make enums way more useful than they are now. This includes pattern matching.</p>

			<H2>Enumerations design</H2>

			<p>
				Complex enums are enums whose tags contain extra values like <Code inline code={`TagName(value, value2)`} /> after tag definitions.
			</p>
		</>
	)
}
