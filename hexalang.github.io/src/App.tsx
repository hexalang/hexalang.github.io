import React from 'react'
import logo from './logo.svg'
import { Home } from './home/Home'
import { Book } from './book/Book'
import { Try } from './try/Try'
import { Donate } from './donate/Donate'
import './App.css'

function App() {
	return <Donate />
	return <Home />
	return <Book />
	return <Try />

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
