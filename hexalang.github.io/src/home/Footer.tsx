import { github, year, patreon, telegram, discord } from '../data/links'
import styled, { css } from 'styled-components'

const Styled = styled.div`
	.footer {
		flex: 0 1 45px;
		justify-content: center;
	}

	.flex-row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center
	}

	.flex-auto {
		flex: 1 0 auto;
	}

	.footer-buttons {
		align-items: center;
		justify-content: center;
	}

	.footer-buttons > .btn {
		margin-right: 10px;
	}

	.text {
		font-size: 16px;
		text-align: left;
		a {
			text-decoration: none;
		}
	}

	a.btn {
		font-size: 16px;
		color: #fff;
		text-decoration: none;
	}

	.btn-discord {
		background-color: #5663EE;
	}

	.btn-telegram {
		background-color: rgb(41, 156, 228);
	}

	.btn-github {
		background-color: #000;
	}

	.btn-patreon {
		background-color: rgb(253, 61, 36);
	}

	@media screen and (max-width: 800px) {
		.non-mobile {
			display: none;
			width: 0;
			height: 0;
			font-size: 0;
			// TODO flex even for footer buttons
		}
	}
`
export const Footer = () => {
	return (
		<Styled className="footer flex-row">
			<div className="flex-auto center non-mobile text">
				<div title="Read Fair Use Disclaimer section in README.md of the website repo for more details" style={{ color: 'lightgrey' }}>
					<a href={github} style={{ color: 'lightgrey' }}>Hexa</a> &copy; {year}
					&nbsp;
					<a href="https://www.pixiv.net/en/artworks/77171026" style={{ color: 'lightgreen' }}>Background</a>
					&nbsp;by&nbsp;
					<a href="https://www.pixiv.net/en/users/795196" style={{ color: 'palevioletred' }}>DSマイル</a>
				</div>
			</div>
			<div className="flex-row footer-buttons">
				<a href={discord} className="btn btn-discord">Discord</a>
				<a href={telegram} className="btn btn-telegram">Telegram</a>
				<a href={github} className="btn btn-github">GitHub</a>
				<a href={patreon} className="btn btn-patreon">Patreon</a>
			</div>
		</Styled>
	)
}
