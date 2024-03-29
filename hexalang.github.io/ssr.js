const fs = require('fs')

const index = fs.readFileSync('build/index.html').toString()
const pages = fs.readFileSync('src/book/pages.tsx').toString()

const parts =
	pages.split(`const pagesNoRoutes: PageNoRoutes = [`)[1]
		.split(']\n')[0].replaceAll(`\\'`, '"')
		.split(`name: '`)

parts.shift()
const urling = _ => _.trim().toLowerCase().split('').map(char => 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(char) !== -1 ? char : '-').join('').split('--').join('-')

for (const part of parts) {
	const name = part.split(`'`)[0].trim()
	const url = urling(name)
	console.log(name, url)
	fs.mkdirSync(`build/book/${url}`, { recursive: true })
	const html = index.replaceAll(
		`Hexa Programming Language`,
		`${name.replaceAll('\\', '').replaceAll("'", '’').replaceAll('"', '’')} — Hexa Book`
	)
	fs.writeFileSync(`build/book/${url}/index.html`, html)
}

fs.writeFileSync('build/404.html', index)
fs.mkdirSync(`build/try`, { recursive: true })
fs.writeFileSync('build/try/index.html', index)
fs.mkdirSync(`build/donate`, { recursive: true })
fs.writeFileSync('build/donate/index.html', index)

// Fix Google indexing
fs.mkdirSync(`build/blog`, { recursive: true })
fs.writeFileSync('build/blog/Hexa-in-Hexa.html', index)
