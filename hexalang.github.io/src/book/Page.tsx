import { FC } from 'react'
import { Link } from 'react-router-dom'
import { pages } from './pages'

interface Props {
	page: string
}

export let scrollTo: { scrollTo: (hash: string) => void } = {} as any

export const Page: FC<Props> = ({ children, page }) => {
	let to = pages[0][0]

	pages.forEach(chapter => chapter.forEach(article => {
		if (article.name === page) {
			to = article
		}
	}))

	return <Link
		to={`/book/${to.route}`}
		onClick={
			() => {
				scrollTo.scrollTo(`#top`)
			}
		}
	>{children}</Link>
}
