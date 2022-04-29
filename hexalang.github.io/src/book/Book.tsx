import { Link } from 'react-router-dom'
import { pages } from './pages'
import { StyledBook } from './StyledBook'
import { useParams } from "react-router-dom"
import { Fragment, useEffect, useState } from 'react'
import { github, youtube } from '../data/links'
import { Sidebar } from './Sidebar'
import styled from 'styled-components'
import { scrollTo as scrollToH2 } from './H2'
import { scrollTo as scrollToH3 } from './H3'
import { Page, scrollTo as scrollToPage } from './Page'
import { Article as Install } from './pages/Install'

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

export const StyledDraft = styled.div`
	width: 100%;
	color: var(--color-text);
	color: grey;
	text-align: center;
	margin-bottom: 10px;
`

export const StyledRfc = styled.div`
	width: 100%;
	color: var(--color-text);
	color: grey;
	text-align: center;
	margin-bottom: 8px;
	margin-top: 16px;
	display: flex;
	justify-content: center;

	a {
		color: lightblue;
	}

	> a, span, div {
		border-style: solid;
		border-width: 1px;
		border-color: lightblue;
		color: lightblue;
		border-radius: 8px;
		padding: 3px;
		padding-left: 5px;
		padding-right: 5px;
		max-width: 60%;

		@media screen and (max-width: 800px) {
			max-width: 90%;
		}

		&.rejected {
			border-color: lightcoral;
			color: lightcoral;
		}

		&.merged {
			border-color: lightgreen;
			color: lightgreen;
		}
	}
`

const Rfc = ({ href }: { href: string }) => {
	return <StyledRfc>
		<div>
			<a href={href}>This proposal is open for discussion, click to visit comments page</a>
		</div>
	</StyledRfc>
}

const Merged = () => {
	return <StyledRfc>
		<span className='merged'>This proposal has been implemented and merged into Hexa</span>
	</StyledRfc>
}

const Rejected = () => {
	return <StyledRfc>
		<span className='rejected'>This proposal was rejected and will not be implemented</span>
	</StyledRfc>
}

const articleByRoute = (route: string) => {
	route = route.replace('/', '').trim().toLowerCase()

	for (const chapter of pages) {
		for (const page of chapter) {
			if (page.route === route) {
				return page
			}

			if (route.endsWith('.html') && page.route.startsWith(route.toLowerCase().split('.html')[0])) {
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
						headers.push({
							id,
							name,
							h: header.tagName.toLowerCase()
						})
					}
				})
			}
			setNav(headers)
		}
		document.title = newTitle

		document.querySelectorAll<HTMLAnchorElement>('.sidebar li a').forEach(a => {
			if (a.href.endsWith(current.route)) {
				a.scrollIntoView({
					inline: 'start',
					block: 'start'
				})

				//document.querySelector<HTMLDivElement>('.sidebar')!.scrollBy(0, -20)
			}
		})
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
			block: 'start'
		})

		page.scrollBy(0, -headerOffset)
	}

	scrollToH2.scrollTo = scrollTo
	scrollToH3.scrollTo = scrollTo
	scrollToPage.scrollTo = scrollTo

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
					<Page className="header-button" page={Install}>Install</Page>
					<a href={youtube} className="header-button">YouTube</a>
					<a href={github} className="header-button">GitHub</a>
					<Link to="/donate" className="header-button">Sponsor</Link>
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
					<h1><a
						href={'#top'}
						onClick={(event) => {
							event.preventDefault()
							scrollTo(`#top`)
						}}
					>{current.name}</a></h1>
					<div id="top"></div>
					{current.draft !== 'no' && <StyledDraft>This is a draft, don't expect much</StyledDraft>}
					{current.labRfcUrl && <Rfc href={current.labRfcUrl} />}
					{current.lab === 'merged' && <Merged />}
					{current.lab === 'rejected' && <Rejected />}
					<Article />
				</div>
				<div css="margin-top: 64px" />
			</div>

			<Sidebar
				toggleSidebar={() => setSidebar(!sidebar)}
				toggleTheme={() => setTheme(theme === "normal" ? "invert" : "normal")}
				currentRoute={current.route}
				scrollTo={scrollTo}
			/>
		</StyledBook>
	)
}
