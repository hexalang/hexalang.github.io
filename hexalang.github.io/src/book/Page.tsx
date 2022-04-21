import { FC } from 'react'
import { Link } from 'react-router-dom'
import { pages } from './pages'

interface Props {
	page: () => JSX.Element
	id?: string
}

export let scrollTo: { scrollTo: (hash: string) => void } = {} as any

export const Page: FC<Props> = ({ children, page, id }) => {
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
		to={`/book/${to.route}`}
		onClick={
			() => {
				scrollTo.scrollTo(id ?? `#top`)
			}
		}
	>{children}</Link>
}
