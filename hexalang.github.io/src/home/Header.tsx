import { github } from '../data/links'

export const Header = () => {
	return (
		<div className="header">
			<div className="navbar flex-end">
				<div className="flex-row">
					<a href="/try" className="navbar-btn">Try</a>
					<a href="/book" className="navbar-btn">Learn</a>
					<a href="https://github.com/hexalang/hexa/releases/latest" className="navbar-btn">Install</a>
					<a href="https://t.me/s/hexalang_news" className="navbar-btn">News</a>
					<a href={github} className="navbar-btn">GitHub</a>
					<a href="/donate" className="navbar-btn">Donate</a>
				</div>
			</div>

			<a href="https://github.com/hexalang">
				<a href="https://hexalang.github.io"><img width="191px" height="191px" src="/hexa-index.png" /></a>
				<br />Hexa Programming Language
				<br />Ensures safety, simplicity and performance
				<br />
				<br />
			</a>
		</div>
	)
}
