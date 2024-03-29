import { Page } from "book/Page"
import { Article as Comparison } from './Comparison'
import { Img } from "book/Img"
import speedrun from './images/speedrun.jpg'

export const Article = () => {
	return (
		<>
			<Img src={speedrun} style={{ borderRadius: '100%' }} alt="Very fast typing, she probably uses Dvorak" width={256} />

			<p>Hexa provides hints how to convert your existing JavaScript code.</p>

			<p>Just copy-paste your JavaScript code into <code className="language-plaintext highlighter-rouge">.hexa</code> file and try to build the project:</p>

			<p><code className="language-plaintext highlighter-rouge">example of error
			</code>
				``</p>

			<p>And so forth.</p>

			<p><Page page={Comparison} id="#javascript">More details about language differences</Page></p>
		</>
	)
}
