// Welcome
import { Article as Introduction } from './pages/Introduction'
import { Article as Hello } from './pages/Hello'

// Book
import { Article as Checklist } from './pages/Checklist'
import { Article as Comparison } from './pages/Comparison'
import { Article as Cppnt } from './pages/Cppnt'
import { Article as Examples } from './pages/Examples'
import { Article as FAQ } from './pages/FAQ'
import { Article as FromJavaScript } from './pages/FromJavaScript'
import { Article as Install } from './pages/Install'
import { Article as Packages } from './pages/Packages'
import { Article as Performance } from './pages/Performance'
import { Article as Profit } from './pages/Profit'
import { Article as Strings } from './pages/Strings'
import { Article as Targets } from './pages/Targets'
import { Article as Testing } from './pages/Testing'

// Inside compiler
import { Article as Lexer } from './pages/Lexer'

// Blog
import { Article as So } from './pages/So-what-with-Hexa'
import { Article as Bootstrap } from './pages/Bootstrap-the-compiler'
import { Article as Hexa } from './pages/Hexa-in-Hexa'
import { Article as Syntax } from './pages/Syntax-and-Inspiration'

type PageNoRoutes = {
	name: string
	render: () => JSX.Element
}[][]

const pagesNoRoutes: PageNoRoutes = [
	[
		{ name: 'Introduction', render: Introduction },
		{ name: 'Hello, Hexa', render: Hello },
		{ name: 'Installation', render: Install },
	],
	[
		{ name: 'Syntax examples', render: Examples },
		{ name: 'Comparison with other languages', render: Comparison },
		{ name: 'C++n\'ting your code', render: Cppnt },
		{ name: 'FAQ', render: FAQ },
		{ name: 'Package manager', render: Packages },
		{ name: 'Performance', render: Performance },
		{ name: 'Porting JavaScript', render: FromJavaScript },
		{ name: 'Programming language checklist', render: Checklist },
		{ name: 'Strings and text', render: Strings },
		{ name: 'Third-party compilation targets', render: Targets },
		{ name: 'Unit testing', render: Testing },
		{ name: 'Why Hexa', render: Profit },
	],
	[
		{ name: 'Lexer', render: Lexer },
	],
	[
		{ name: 'Bootstrap the compiler', render: Bootstrap },
		{ name: 'So what with Hexa', render: So },
		{ name: 'Syntax and Inspiration', render: Syntax },
		{ name: 'Hexa compiles itself', render: Hexa },
	]
]

const toRoutablePages = (pages: typeof pagesNoRoutes) => {
	return pages.map(chapter => chapter.map(
		page => {
			return {
				...page,
				name: page.name.trim(),
				route: page.name.trim().toLowerCase().split('').map(char => 'abcdefghijklmnopqrstuvwxyz'.indexOf(char) !== -1 ? char : '-').join('').split('--').join('-')
			}
		}
	))
}

export const pages = toRoutablePages(pagesNoRoutes)
