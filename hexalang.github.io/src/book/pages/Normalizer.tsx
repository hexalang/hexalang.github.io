import { Code } from "book/Code"
import { Page } from 'book/Page'
import { Article as Targets } from './Targets'

export const Article = () => {
	return (
		<>
			<p>Produces tree of <Page page={Targets}>Nice Nodes</Page> from <i>typed</i> syntax tree.</p>

			<p>Performs essential optimizations and lowers the code to the lowest common denominator.</p>
		</>
	)
}
