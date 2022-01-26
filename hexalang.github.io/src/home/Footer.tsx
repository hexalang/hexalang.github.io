import { github, year, patreon } from '../data/links'

export const Footer = () => {
	return (
		<div className="footer flex-row">
			<div className="flex-auto center non-mobile">
				<div>
					<a href="https://github.com/hexalang">Hexa</a> by
					<a href="https://github.com/PeyTy">PeyTy</a> &copy; {year}
				</div>
			</div>
			<div className="flex-row footer-buttons">
				<a href="https://twitter.com/hexalang" className="btn btn-blue">Twitter</a>
				<a href={github} className="btn btn-black">GitHub</a>
				<a href={patreon} className="btn btn-red">Patreon</a>

			</div>
		</div>
	)
}
