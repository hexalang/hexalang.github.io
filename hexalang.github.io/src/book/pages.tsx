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
import { Article as Normalizer } from './pages/Normalizer'
import { Article as Parser } from './pages/Parser'
import { Article as Typer } from './pages/insights/Typer'
import { Article as Human } from './pages/insights/Human'

// Blog
import { Article as So } from './pages/blog/So-what-with-Hexa'
import { Article as Bootstrap } from './pages/blog/Bootstrap-the-compiler'
import { Article as Hexa } from './pages/blog/Hexa-in-Hexa'
import { Article as Syntax } from './pages/blog/Syntax-and-Inspiration'

// Releases
import { Article as Release200 } from './pages/blog/200'

// Lab
import { Article as NativeIR } from './pages/lab/Native-IR'
import { Article as RedesignComplexEnums } from './pages/lab/Redesign-Complex-Enums'
import { Article as Decorators } from './pages/lab/Decorators'
import { Article as Multithreaded } from './pages/lab/Multithreaded'

// Utils
import { nameToId } from './utils'

// Automatic import
import { PSU1 } from './pages/lab/PSU-1'

type PageNoRoutes = {
	name: string
	render: () => JSX.Element
	draft?: 'no'
	year?: number
	month?: 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'june' | 'july' | 'aug' | 'sept' | 'oct' | 'nov' | 'dec'
	lab?: 'rfc' | 'merged' | 'rejected'
	labRfcUrl?: string
	day?: number
}[][]

const pagesNoRoutes: PageNoRoutes = [
	[
		{ name: 'Introduction', render: Introduction },
		{ name: 'Hello, Hexa', render: Hello },
		{ name: 'Installation', render: Install },
	],
	[
		{ name: 'Syntax examples', render: Examples },
		{ name: 'Strings and text', render: Strings },
		{ name: 'Comparison with other languages', render: Comparison },
		{ name: 'FAQ', render: FAQ },
		{ name: 'Package manager', render: Packages },
		{ name: 'Performance', render: Performance },
		{ name: 'Porting JavaScript', render: FromJavaScript },
		{ name: 'Programming language checklist', render: Checklist },
		{ name: 'Third-party compilation targets', render: Targets },
		{ name: 'Unit testing', render: Testing },
		{ name: 'C++n\'ting your code', render: Cppnt },
		{ name: 'Why Hexa', render: Profit },
	],
	[
		{ name: 'Lexer', render: Lexer },
		{ name: 'Parser', render: Parser },
		{ name: 'Typer', render: Typer },
		{ name: 'Normalizer', render: Normalizer, draft: 'no' },
		{ name: 'Human Syntax Guidelines', render: Human },
	],
	[
		//{ name: 'Hexa 2.0.0', render: Release200 },
		{ name: 'Hexa compiles itself', render: Hexa, draft: 'no', year: 2018, day: 25, month: 'july' },
		{ name: 'Syntax and Inspiration', render: Syntax, draft: 'no', year: 2017, day: 12, month: 'feb' },
		{ name: 'So what with Hexa', render: So, draft: 'no', year: 2017, day: 8, month: 'feb' },
		{ name: 'Bootstrap the compiler', render: Bootstrap, draft: 'no', year: 2017, day: 7, month: 'feb' },
	],
	[
		{
			name: 'Redesign complex enums', render: RedesignComplexEnums,
			lab: 'rfc',
			labRfcUrl: 'https://github.com/hexalang/Hexa/discussions/25'
		},
		{
			name: 'Native IR', render: NativeIR,
			lab: 'rfc',
			labRfcUrl: 'https://github.com/hexalang/Hexa/discussions/24'
		},
		{
			name: 'Decorator namespaces', render: Decorators,
			lab: 'rfc',
			labRfcUrl: 'https://github.com/hexalang/Hexa/discussions/26'
		},
		{
			name: 'Multithreaded compiler', render: Multithreaded,
			lab: 'rfc',
			labRfcUrl: 'https://github.com/hexalang/Hexa/discussions/27'
		},
		{
			name: 'Planned Syntax Update', render: PSU1,
			lab: 'rfc',
			labRfcUrl: 'https://github.com/orgs/hexalang/discussions/38'
		},
	],
]

const toRoutablePages = (pages: typeof pagesNoRoutes) => {
	return pages.map(chapter => chapter.map(
		page => {
			return {
				...page,
				name: page.name.trim(),
				route: nameToId(page.name)
			}
		}
	))
}

export const pages = toRoutablePages(pagesNoRoutes)
