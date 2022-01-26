import { Link } from 'react-router-dom'
import { github } from '../data/links'
import styled, { css } from 'styled-components'

const Styled = styled.div`
	text-align: center;
	font-size: 18px !important;
	flex: 0 1 auto;
`

export const Header = () => {
	return (
		<Styled>
			<div className="navbar flex-end">
				<div className="flex-row">
					<Link to="/try" className="navbar-btn">Try</Link>
					<Link to="/book" className="navbar-btn">Learn</Link>
					<a href="https://github.com/hexalang/hexa/releases/latest" className="navbar-btn">Install</a>
					<a href="https://t.me/s/hexalang_news" className="navbar-btn">News</a>
					<a href={github} className="navbar-btn">GitHub</a>
					<Link to="/donate" className="navbar-btn">Donate</Link>
				</div>
			</div>

			<Link to="/">
				<a href="https://hexalang.github.io"><img width="191px" height="191px" src="/hexa-index.png" /></a>
				<br />Hexa Programming Language
				<br />Ensures safety, simplicity and performance
				<br />
				<br />
			</Link>
		</Styled>
	)
}
