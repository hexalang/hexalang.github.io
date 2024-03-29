import { Link } from 'react-router-dom'
import { github, youtube } from '../data/links'
import styled, { css } from 'styled-components'
import { FC } from 'react'
import { Article as Install } from '../book/pages/Install'
import { Page } from 'book/Page'
import { Text } from 'Translate'

const Styled = styled.div<{ compact: boolean }>`
	text-align: center;
	font-size: 18px !important;
	flex: 0 1 auto;

	@media screen and (max-width: 800px) {
		a {
			font-size: 14px !important;
		}

		.navbar-btn.navbar-btn {
			padding: 0px;
			margin-left: 3px;
		}

		a img.bigLogo {
			margin-top: 34px;
		}
	}

	.navbar {
		right: 10px;
		right: 0px;
		position: absolute;
		height: 50px;
		display: flex;
		padding: 3px;
		flex-direction: row;
		width: 100vw;
		padding-right: 12px;

		${props => props.compact && css`
			background: linear-gradient(
				rgba(0, 0, 0, 0.1),
				rgba(0, 0, 0, 0.0)
			);
		`};
	}

	.navbar-btn {
		${props => props.compact ? css`
			color: lightgray;
		` : css`color: rgb(32, 32, 32)`};
		cursor: pointer;
		padding: 5px 10px;
		user-select: none;
		margin: 6px;
		transition: color .2s ease-in-out;
	}

	.navbar-btn:hover {
		color: rgb(0, 174, 239);
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

	.grow {
		flex-grow: 1;
	}

	.logoButton {
		flex-grow: 1;
		display: flex;
    	padding-left: 18px;
	}
	//.small-logo:hover {
	//	scale: 2.5 2.5;
	//	position: relative;
	//}
`

export const Header: FC<{ compact: boolean }> = ({ compact }) => {
	return (
		<Styled className="navbarHeader" compact={compact}>
			<div className="navbarHeaderBlur"></div>
			<div className="navbar flex-end">
				<div className="flex-row grow">
					{compact ? <span className="logoButton"><Link to="/" className="">
						<img className="small-logo" alt="Home" width="24px" height="24px" src="/logo-no-text.svg" />
					</Link></span> : <span className="logoButton"></span>}
					<Link to="/try" className="navbar-btn"><Text>Try</Text></Link>
					<Link to="/book" className="navbar-btn"><Text>Learn</Text></Link>
					<Page className="navbar-btn" page={Install}><Text>Install</Text></Page>
					<a href={youtube} className="navbar-btn">YouTube</a>
					<a href={github} className="navbar-btn">GitHub</a>
					<Link to="/donate" className="navbar-btn"><Text>Donate</Text></Link>
				</div>
			</div>

			{!compact && <Link to="/">
				<img className="bigLogo" width="191px" height="191px" alt="logo" src="/logo.svg" />
				<br />Hexa Programming Language
				<br />Ensures safety, simplicity and performance
				<br />
				<br />
			</Link>}
		</Styled>
	)
}
