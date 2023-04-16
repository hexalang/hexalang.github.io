import { Code } from "book/Code"

export const Article = () => {
	return (
		<>
			<p>The idea is to make enums way more useful than they are now.</p>

			<p>Complex enums are enums whose tags contain extra values like <Code inline code={`TagName(value, value2)`} /> after tag definitions.</p>
		</>
	)
}
