import { Link } from 'react-router-dom'
import { pages } from './pages'
import { StyledBook } from './StyledBook'
import { useParams } from "react-router-dom"
import { Fragment, useEffect, useRef, useState } from 'react'

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

	// TODO save to localStorage
	const [theme, setTheme] = useState<"normal" | "invert">("normal")
	const [sidebar, setSidebar] = useState<boolean>(true)
	const [nav, setNav] = useState<{ id: string, name: string }[]>([])

	useEffect(() => {
		// TODO SSR router title?
		const newTitle = current.name + ' — Hexa Book'
		if (newTitle !== document.title) {
			const headers: typeof nav = []
			// eslint-disable-next-line no-lone-blocks
			{
				[
					...document.querySelectorAll<HTMLElement>('h2[id]'),
					...document.querySelectorAll<HTMLElement>('h3[id]')
				].forEach(header => {
					const name: string = header.innerText.trim()
					if (name !== current.name) {
						headers.push({ id: header.id, name })
					}
				})
			}
			setNav(headers)
		}
		document.title = newTitle
	})

	useEffect(() => {
		// eslint-disable-next-line no-restricted-globals
		if (location.hash.length < 3) return
		// eslint-disable-next-line no-restricted-globals
		const target = document.querySelector(location.hash)
		if (target) {
			target.scrollIntoView()
		}
	}, [])

	// eslint-disable-next-line no-restricted-globals
	const hash = location.hash || '#'

	return (
		<StyledBook data-theme={theme} className={sidebar ? '' : 'sidebar-hidden'}>

			<div className="sidebar">
				<div css={`margin-block-start: 7px; padding-inline-start: 15px; margin-block-end: 4px;`}>
					<Link to="/">Hexa</Link><strong><Link to="/book">Book</Link></strong>
				</div>
				<ul>

					{
						(() => {
							return pages.map((chapter, index) => (
								<Fragment key={index}>
									{index !== 0 && <div css={`height: 1px; border-top: 1px solid rgba(139, 216, 255, 0.2);`}></div>}
									{chapter.map(page =>
										<li key={page.route}><Link
											to={`/book/${page.route}`}
											onClick={
												() => {
													const target = document.querySelector('#top')
													if (target) {
														target.scrollIntoView()
													}
												}
											}
										>{strong(page.name, current.route === page.route)}</Link></li>
									)}
								</Fragment>
							))
						})()
					}

				</ul>
				<br /><br /><br />
			</div>

			<div className="sidebar-toggle" onClick={() => setSidebar(!sidebar)}>
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
					<a href="#top" className={(hash === '#' || hash === '#top') ? "selected" : ''}>{current.name}</a><br />
					{nav.map(nav => <Fragment key={nav.id}><a
						href={`#${nav.id}`}
						className={(hash === `#${nav.id}`) ? "selected" : ''}
					>{nav.name}</a><br /></Fragment>)}
				</div>
				<div className="article markdown">
					<h2 id="top">{current.name}</h2>
					<Article />
				</div>
				<div css="margin-top: 64px" />
			</div>

			<div className="dark-toggle" onClick={() => setTheme(theme === "normal" ? "invert" : "normal")}><span className="dark"></span><span className="light"></span></div>
		</StyledBook>
	)
}
