import { Home } from './home/Home'
import { Book } from './book/Book'
import { Try } from './try/Try'
import { Donate } from './donate/Donate'
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom"

function App() {
	return <BrowserRouter>
		<Routes>
			<Route path="/try" element={<Try />} />
			<Route path="/donate" element={<Donate />} />
			<Route path="/book" element={<Book />} />
			<Route path="/" element={<Home />} />
		</Routes>
	</BrowserRouter>
}

export default App
