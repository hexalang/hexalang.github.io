import { Home } from './home/Home'
import { Book } from './book/Book'
import { Try } from './try/Try'
import { Donate } from './donate/Donate'
import {
	useLocation,
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom"
import { useEffect } from 'react'

const ThemeFix = () => {
	const location = useLocation()

	useEffect(() => {
		window.requestAnimationFrame(_ => {
			const theme = `dark`
			document.querySelectorAll(`style.${theme}rea${'der'}`).forEach((_: any) => _.media = 'max-width: 1px')
		})
	}, [location])

	return <></>
}

const App = () => {

	return <BrowserRouter>
		<ThemeFix />
		<Routes>
			<Route path="/try" element={<Try />} />
			<Route path="/donate" element={<Donate />} />
			<Route path="/book/:article" element={<Book />} />
			<Route path="/book" element={<Book />} />
			<Route path="/" element={<Home />} />
			<Route path="/:fallback404" element={<Home />} />
		</Routes>
	</BrowserRouter>
}

export default App
