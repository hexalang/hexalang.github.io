import { Link } from 'react-router-dom'
import { pages } from './pages'
import { StyledBook } from './StyledBook'
import { useParams } from "react-router-dom"
import { useEffect } from 'react'

const strong = (text: string, strong: boolean) => strong ? <strong>{text}</strong> : <>{text}</>

const articleByRoute = (route: string) => {
	route = route.replace('/', '').trim().toLowerCase()

	for (const chapter of pages) {
		for (const page of chapter) {
			if (page.route === route) {
				return page
			}
		}
	}

	return pages[0][0]
}

export const Book = () => {
	const params = useParams<{ article: string }>()
	const current = articleByRoute(params.article || '')
	const Article = current.render

	useEffect(() => {
		document.title = current.name + ' — Hexa Book'
	})

	return (
		<StyledBook>

			<div className="sidebar">
				<div css={`margin-block-start: 7px; padding-inline-start: 15px; margin-block-end: 4px;`}>
					<Link to="/">Hexa</Link><strong><Link to="/book">Book</Link></strong>
				</div>
				<ul>

					{
						(() => {
							return pages.map((chapter, index) => (
								<>
									{index !== 0 && <div css={`height: 1px; border-top: 1px solid rgba(139, 216, 255, 0.2);`}></div>}
									{chapter.map(page =>
										<li><Link to={`/book/${page.route}`}>{strong(page.name, current.route === page.route)}</Link></li>
									)}
								</>
							))
						})()
					}

				</ul>
				<br /><br /><br />
			</div>

			<div className="sidebar-toggle">
				<span></span>
				<span></span>
				<span></span>
			</div>

			<div className="page">
				<div className="header">
					<div className="header-spacer"></div>
					<Link to="/try" className="header-button">Try</Link>
					<a href="https://github.com/hexalang/hexa/releases/latest" className="header-button">Install</a>
					<a href="https://t.me/s/hexalang_news" className="header-button">News</a>
					<a href="https://github.com/hexalang" className="header-button">GitHub</a>
					<Link to="/donate" className="header-button">Donate</Link>
				</div>
				<div id="article-navigation">
					<a href="#top" className="selected">{current.name}</a><br />
					<a href="#where-to-start">Where to start</a><br />
					<a href="#helpful-links">Helpful links</a><br />
				</div>
				<div className="article markdown">
					<h2 id="top">{current.name}</h2>
					<Article />
				</div>
				<div css="margin-top: 64px" />
			</div>

			<div className="dark-toggle"><span className="dark"></span><span className="light"></span></div>
		</StyledBook>
	)
}
