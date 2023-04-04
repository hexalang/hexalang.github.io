import { Page } from 'book/Page'
import { Article as Targets } from './Targets'
import { H2 } from "book/H2"
import { CompilerUrl } from "book/JustUrl"

export const Article = () => {
	return (
		<>
			<p>Produces tree of <Page page={Targets}>Nice Nodes</Page> from <i>typed</i> syntax tree.</p>

			<p>Performs essential optimizations and lowers the code to the lowest common denominator.</p>

			<H2>Where to look</H2>

			<ul>
				<li><CompilerUrl>source\compiler\normalizer.hexa</CompilerUrl></li>
				<li><CompilerUrl>source\data\nice.hexa</CompilerUrl></li>
			</ul>
		</>
	)
}
