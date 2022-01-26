import { Introduction } from './pages/Introduction'
import { Hello } from './pages/Hello'

const pagesNoRoutes = [
	[
		{ name: 'Introduction', render: Introduction },
		{ name: 'Hello, Hexa', render: Hello },
	],
	[
		{ name: 'C++n\'ting your code', render: Introduction },
		{ name: 'Comparison with other languages', render: Introduction },
		{ name: 'FAQ', render: Introduction },
		{ name: 'Installation', render: Introduction },
		{ name: 'Package manager', render: Introduction },
		{ name: 'Performance', render: Introduction },
		{ name: 'Porting JavaScript', render: Introduction },
		{ name: 'Programming language checklist', render: Introduction },
		{ name: 'Strings and text', render: Introduction },
		{ name: 'Syntax examples', render: Introduction },
		{ name: 'Third-party compilation targets', render: Introduction },
		{ name: 'Unit testing', render: Introduction },
		{ name: 'Why Hexa', render: Introduction },
	],
	[
		{ name: 'Inside compiler: Lexer', render: Introduction },
	]
]

const toRoutablePages = (pages: typeof pagesNoRoutes) => {
	return pages.map(chapter => chapter.map(
		page => {
			return { ...page, route: page.name.toLowerCase().split('').map(char => 'abcdefghijklmnopqrstuvwxyz'.indexOf(char) !== -1 ? char : '_').join('').split('__').join('_') }
		}
	))
}

export const pages = toRoutablePages(pagesNoRoutes)
