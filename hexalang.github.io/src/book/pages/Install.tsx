import { H2 } from "book/H2"
import { Img } from "book/Img"
import picture from './images/happy.png'

export const Article = () => {
	return (
		<>
			<Img src={picture} style={{ borderRadius: '100%' }} alt="So happy! Gonna play with Hexa, yay!" width={256} />

			<p>Getting up and running!</p>

			<p>TODO</p>
			<ul>
				<li>Normal installers</li>
				<li>Linux distros</li>
				<li>IDEs</li>
				<li>Build yourself</li>
				<li>Nightly builds (i.e. CI Artifacts)</li>
			</ul>

			<H2>Compiler</H2>

			<p>TODO</p>

			<H2>Tools</H2>

			<p>TODO</p>
		</>
	)
}
