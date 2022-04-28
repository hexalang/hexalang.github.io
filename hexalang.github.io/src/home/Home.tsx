import { Header } from './Header'
import { Footer } from './Footer'
import { StyledHome } from './StyledHome'
import { Link } from 'react-router-dom'
import { Code } from 'book/Code'
import { StyledLanding } from './StyledLanding'
import { github, youtube, patreon, telegram, discord } from '../data/links'
import { Article as Install } from '../book/pages/Install'
import { Page } from 'book/Page'
import { useEffect } from 'react'
import { Text } from 'Translate'

export const Home = () => {
	useEffect(() => {
		document.title = 'Hexa'
	}, [])

	return (
		<StyledHome className="page shadow">
			<div className="wip-label hidden">Site is under construction!! =)</div>
			<Header compact={true} />
			<StyledLanding>
				<div className="margin">
					<span className="safariLogoFix"><span className="safariLogo" /></span>
					<div className="blocks">
						<div className="block blockAcryl">
							<a href={youtube} className="button">
								<div className="yt ico"></div>
								<div className="text">
									<div className="title"><Text>Follow</Text></div>
									<div className="desc"><Text>Watch YouTube videos</Text></div>
								</div>
							</a>
							<Link to="/try" className="button">
								<div className="try ico"></div>
								<div className="text">
									<div className="title"><Text>Try</Text></div>
									<div className="desc"><Text>Directly in your browser</Text></div>
								</div>
							</Link>
							<a href={patreon} className="button">
								<div className="hearts ico"></div>
								<div className="text">
									<div className="title"><Text>Support</Text></div>
									<div className="desc"><Text>Sponsor on Patreon</Text></div>
								</div>
							</a>
							<Page page={Install} className="button dark"><span className="down" /><Text>Install on your device</Text></Page>
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
								<a href={telegram} className="tg">{telegram}</a>
								<a href={github} className="gi">{github}</a>
								<a href={discord} className="di">{discord}</a>
							</div>
						</div>
					</div>
				</div>
			</StyledLanding>
			<Footer />
		</StyledHome>
	)
}
