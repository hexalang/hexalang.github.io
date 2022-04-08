import { Link } from 'react-router-dom'
import { pages } from './pages'
import { StyledBook } from './StyledBook'
import { useParams } from "react-router-dom"
import { Fragment, useEffect, useRef, useState } from 'react'
import { github } from '../data/links'
import { Sidebar } from './Sidebar'
import styled, { css } from 'styled-components'

export const StyledSub = styled.span`
	width: 16px;
	height: 16px;
	display: inline-block;
	position: relative;

	div {
		background-color: gray;
	}

	div.ver {
		position: absolute;
		height: 8px;
		width: 2px;
		right: 4px;
		top: 4px;
	}

	div.hor {
		position: absolute;
		height: 2px;
		width: 8px;
		right: 4px;
		top: 12px;
	}
`

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
	const [nav, setNav] = useState<{ id: string, name: string, h: string }[]>([])

	useEffect(() => {
		// TODO SSR router title?
		const newTitle = current.name + ' — Hexa Book'
		if (newTitle !== document.title) {
			const headers: typeof nav = []
			// eslint-disable-next-line no-lone-blocks
			{
				[
					...document.querySelectorAll<HTMLElement>(
						[
							'h2[data-id]',
							'h3[data-id]',
							'h2[id]',
							'h3[id]'
						].join(', ')
					)
				].forEach(header => {
					const name: string = header.innerText.trim()
					const id = header.dataset['id'] ?? header.id
					if (name !== current.name && name !== '' && id) {
						headers.push({ id, name, h: header.tagName.toLowerCase() })
					}
				})
			}
			setNav(headers)
		}
		document.title = newTitle
	})

	const headerOffset = 50

	const scrollTo = (id: string) => {
		const target = document.querySelector<HTMLElement>(id)
		const page = document.querySelector<HTMLElement>('.page')
		if (!target) return
		if (!page) return
		window.location.hash = id

		if (id === `#top`) {
			page.scrollTo(0, 0)
			return
		}

		target.scrollIntoView({
			//	block: 'start',
			block: 'start'
		})

		page.scrollBy(0, -headerOffset)
	}

	useEffect(() => {
		// eslint-disable-next-line no-restricted-globals
		if (location.hash.length < 3) return
		// eslint-disable-next-line no-restricted-globals
		scrollTo(location.hash)
	}, [])

	// eslint-disable-next-line no-restricted-globals
	const hash = location.hash || '#'

	return (
		<StyledBook data-theme={theme} className={sidebar ? '' : 'sidebar-hidden'}>

			<div className="page">
				<div className="header">
					<div className="header-spacer"></div>
					<Link to="/try" className="header-button">Try</Link>
					<a href="https://github.com/hexalang/hexa/releases/latest" className="header-button">Install</a>
					<a href="https://t.me/s/hexalang_news" className="header-button">News</a>
					<a href={github} className="header-button">GitHub</a>
					<Link to="/donate" className="header-button">Donate</Link>
				</div>
				<div id="article-navigation">
					<a
						href="#top"
						onClick={(event) => {
							event.preventDefault()
							scrollTo(`#top`)
						}}
						className={(hash === '#' || hash === '#top') ? "selected" : ''}
					>{current.name}</a>
					{nav.map(nav => <Fragment key={nav.id}><a
						href={`#${nav.id}`}
						onClick={(event) => {
							event.preventDefault()
							scrollTo(`#${nav.id}`)
						}}
						className={
							((hash === `#${nav.id}`) ? "selected" : '')
							+
							(nav.h === 'h3' ? ' flex' : '')
						}
					>{nav.name}{nav.h === 'h3' && <StyledSub><div className="ver" /><div className="hor" /></StyledSub>}</a></Fragment>)}
				</div>
				<div className="article markdown">
					<h2><a
						href={'#top'}
						onClick={(event) => {
							event.preventDefault()
							scrollTo(`#top`)
						}}
					>{current.name}</a></h2>
					<div id="top"></div>
					<Article />
				</div>
				<div css="margin-top: 64px" />
			</div>

			<Sidebar
				toggleSidebar={() => setSidebar(!sidebar)}
				toggleTheme={() => setTheme(theme === "normal" ? "invert" : "normal")}
				currentRoute={current.route}
			/>
		</StyledBook>
	)
}
