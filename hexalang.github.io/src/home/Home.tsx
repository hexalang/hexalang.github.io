import { Header } from './Header'
import { Footer } from './Footer'
import { StyledHome } from './StyledHome'
import { Link } from 'react-router-dom'
import { Code } from 'book/Code'
import { StyledLanding } from './StyledLanding'

export const Home = () => {
	return (
		<StyledHome className="page shadow">
			<div className="wip-label hidden">Site is under construction!! =)</div>
			<Header compact={true} />
			<StyledLanding>
				<div className="margin">
					<img width="191px" height="191px" alt="logo" src="/logo.svg" />
					<div className="blocks">
						<div className="block blockAcryl">
							<div className="button">
								<div className="yt ico"></div>
								<div className="text">
									<div className="title">Follow</div>
									<div className="desc">Watch YouTube videos</div>
								</div>
							</div>
							<div className="button">
								<div className="try ico"></div>
								<div className="text">
									<div className="title">Try</div>
									<div className="desc">Directly in your browser</div>
								</div>
							</div>
							<div className="button">
								<div className="hearts ico"></div>
								<div className="text">
									<div className="title">Support</div>
									<div className="desc">Sponsor on Patreon</div>
								</div>
							</div>
							<div className="button dark">Install on your device &gt;</div>
						</div>
						<div className="block blockWhite">
							<div className="texts">
								<div className="motto">Performance</div>
								<div className="motto">Simplicity</div>
								<div className="motto">Safety</div>
								<Code code={`fun hello(friend: String) {
    console.log("hello, \\(friend)!")
}

hello("Hexa")`} />
							</div>
							<div className="icons">
								<div className="tg"></div>
								<div className="gi"></div>
								<div className="di"></div>
							</div>
						</div>
					</div>
				</div>
			</StyledLanding>
			<Footer />
		</StyledHome>
	)
}
