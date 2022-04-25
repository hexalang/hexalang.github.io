import { Header } from './Header'
import { Footer } from './Footer'
import { StyledHome } from './StyledHome'
import { Link } from 'react-router-dom'
import { Code } from 'book/Code'
import { StyledLanding } from './StyledLanding'

export const Home = () => {
	return (
		<StyledHome className="page shadow">
			<div className="wip-label">Site is under construction!! =)</div>
			<Header compact={false} />

			<div className="container">

				<div className="col-1 col-sm-2 pad">
					<div className="shadow fullheight">
						<div id="editor" className="pad code editor" contentEditable="true" spellCheck="false">
/* !! WARNING this is a VERY old compiler, will be updated soon !! */<br />
							@native("console")<br />
							declare class Console &#123;<br /> &nbsp; &nbsp; static fun log(...message: String): Void<br />
							&#125;<br /><br />
							Console.log("Hello from Hexa!")<br />
							Console.log("No `static fun main` required")</div>
					</div>
				</div>
				<div className="col-1 col-sm-2 pad">
					<div className="shadow fullheight">
						<div id="output" className="pad code output">
							...coming soon
						</div>
					</div>
				</div>
				<div className="col-2">
					<div className="shadow margin">
						<div id="debug" className="pad code output">
							...Debug
						</div>
					</div>
				</div>

				<div className="col-1">
					<div className="shadow margin">
						<div id="download" className="pad code output">
							<div><h2>Download</h2></div>
							<div>Available for 64-bit Linux, macOS and Windows</div>
							<img src="https://github.com/hexalang/hexa/blob/kawaii/preview.png?raw=true" />
						</div>
					</div>
				</div>
				<div className="col-2 col-sm-2 pad">
					<div className="shadow fullheight">
						<div id="stable" className="pad code output">
							<a href="https://github.com/hexalang/hexa#stable">
								<div>Install Hexa</div>
								<div><b>COMING SOON</b> Stable compiler versions</div>
							</a>
							<div><a href="#changelog-hexa">Changelog</a></div>
						</div>
					</div>
				</div>
				<div className="col-2 col-sm-2 pad">
					<div className="shadow fullheight">
						<div id="unstable" className="pad code output">
							<a href="https://github.com/hexalang/hexa#tools--ide">
								<div>Tools & IDE</div>
								<div>Packages for code editors</div>
							</a>
							<div><a href="#changelog-tools">Changelog</a></div>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="shadow margin">
						<div id="without" className="pad code output">
							<Link to="/try">Try Hexa without installing =P</Link>
						</div>
					</div>
				</div>

			</div>
			<div id="overview"></div>
			<div id="install"></div>
			<div id="learn"></div>
			<div id="community"></div>

			<Footer />

		</StyledHome>
	)
}
