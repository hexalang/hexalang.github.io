import { Link } from 'react-router-dom'
import { github, youtube } from '../data/links'
import styled from 'styled-components'
import { FC } from 'react'

const Styled = styled.div`
	text-align: center;
	font-size: 18px !important;
	flex: 0 1 auto;

	.navbar {
		right: 10px;
		position: absolute;
		min-height: 50px;
		display: flex;
		padding: 3px;
		flex-direction: row;
	}

	.navbar-btn {
		color: rgb(32, 32, 32);
		cursor: pointer;
		padding: 5px 10px;
		user-select: none;
		margin: 6px;
	}

	.navbar-btn:hover {
		box-shadow: 0px 10px 20px -10px lightgrey;
	}

	.flex-row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;

		img {
			vertical-align: -8px;
			margin-right: 20px;
		}
	}

	a {
		color: black;
		text-decoration: none;
	}
	//.small-logo:hover {
	//	scale: 2.5 2.5;
	//	position: relative;
	//}
`

export const Header: FC<{ compact: boolean }> = ({ compact }) => {
	return (
		<Styled>
			<div className="navbar flex-end">
				<div className="flex-row">
					{compact && <Link to="/">
						<img className="small-logo" alt="Home" width="24px" height="24px" src="/logo-no-text.svg" />
					</Link>}
					<Link to="/try" className="navbar-btn">Try</Link>
					<Link to="/book" className="navbar-btn">Learn</Link>
					<a href="https://github.com/hexalang/hexa/releases/latest" className="navbar-btn">Install</a>
					<a href={youtube} className="navbar-btn">YouTube</a>
					<a href={github} className="navbar-btn">GitHub</a>
					<Link to="/donate" className="navbar-btn">Donate</Link>
				</div>
			</div>

			{!compact && <Link to="/">
				<img width="191px" height="191px" src="/logo.svg" />
				<br />Hexa Programming Language
				<br />Ensures safety, simplicity and performance
				<br />
				<br />
			</Link>}
		</Styled>
	)
}
