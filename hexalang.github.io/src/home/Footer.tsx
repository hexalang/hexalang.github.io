import { github, year, patreon, telegram } from '../data/links'

export const Footer = () => {
	return (
		<div className="footer flex-row">
			<div className="flex-auto center non-mobile">
				<div>
					<a href="https://github.com/hexalang">Hexa</a> &copy; {year}
				</div>
			</div>
			<div className="flex-row footer-buttons">
				<a href={telegram} className="btn btn-blue">Telegram</a>
				<a href={github} className="btn btn-black">GitHub</a>
				<a href={patreon} className="btn btn-red">Patreon</a>

			</div>
		</div>
	)
}
