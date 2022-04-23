import { FC } from 'react'
import { Link } from 'react-router-dom'
import { pages } from './pages'

interface Props {
	page: () => JSX.Element
	id?: string
	className?: string
}

export let scrollTo: { scrollTo: (hash: string) => void } = {} as any

export const Page: FC<Props> = ({
	children,
	page,
	id,
	className
}) => {
	let to = pages[0][0]
	if (id && !id.startsWith('#')) {
		id = '#' + id
	}

	pages.forEach(chapter => chapter.forEach(article => {
		if (article.render === page) {
			to = article
		}
	}))

	if (to === pages[0][0]) console.error('Cannot find article', page)

	return <Link
		className={className}
		to={`/book/${to.route}${id ?? `#top`}`}
		onClick={
			() => {
				requestAnimationFrame(_ => {
					scrollTo.scrollTo(id ?? `#top`)
				})
				setTimeout(_ => {
					scrollTo.scrollTo(id ?? `#top`)
				}, 123)
			}
		}
	>{children}</Link>
}
