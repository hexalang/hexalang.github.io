import { github, year, patreon, telegram } from '../data/links'
import styled, { css } from 'styled-components'

const Styled = styled.div`
	font-size: 16px;
`
export const Footer = () => {
	return (
		<Styled className="footer flex-row">
			<div className="flex-auto center non-mobile">
				<div>
					<a href={github}>Hexa</a> &copy; {year}
				</div>
			</div>
			<div className="flex-row footer-buttons">
				<a href={telegram} className="btn btn-blue">Telegram</a>
				<a href={github} className="btn btn-black">GitHub</a>
				<a href={patreon} className="btn btn-red">Patreon</a>
			</div>
		</Styled>
	)
}
