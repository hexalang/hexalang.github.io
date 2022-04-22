enum State {
	Plaintext,
	CommentLine,
	CommentMultiLine,
	String
}

const onClickCopy = () => {
	// TODO copy innerText?
}

const letters = 'abcdefghijklmnopqrstuvwxyz'

const keywords = [
	'var',
	'let',
	'class',
	'new',
	'private',
	'return',
	'this',
	'for',
	'do',
	'while',
	'if',
	'else',
	'null',
	'in',
	'is',
	'as',
	'break',
	'switch',
	'continue',
	'case',
	'enum',
	'throw',
	'try',
	'catch',
	'true',
	'false',
	'fun'
]

// TODO respect dark mode in CSS
// TODO optimize
// TODO react.memo
// TODO for inline Click to copy \to clipboard + pointer
export const Code = ({ code, inline }: { code: string, inline?: boolean }) => {
	let html: JSX.Element[] = []
	let stringFinalizer: '"' | "'" | '`' = '"'
	let commentNesting = 0

	let chars = code.split('')
	let state: State = State.Plaintext as State
	let i = 0

	while (i < chars.length) {
		const char = chars[i]
		const char1 = chars[i + 1]

		switch (state) {
			case State.Plaintext: {
				if (char === '\n') {
					i++
					html.push(<br />)
				} else {
					if (char === '#') {
						i++
						html.push(<span className="mi">#</span>)
						while (letters.includes(chars[i])) {
							html.push(<span className="mi">{chars[i]}</span>)
							i++
						}
						continue
					}
					if (char === '/' && char1 === '/') {
						state = State.CommentLine
						continue
					}
					if (char === '/' && char1 === '*') {
						state = State.CommentMultiLine
						continue
					}
					if (char === '"' || char === "'" || char === "`") {
						stringFinalizer = char
						html.push(<span className="mi">{char}</span>)
						i++
						state = State.String
						continue
					}

					const alphabet = '_abcdefghijklmnopqrstuvwxyz'
					if (alphabet.includes(char)) {
						const word: string[] = []
						let at = i
						const alpha = alphabet + alphabet.toUpperCase() + '0123456789'
						while (at < chars.length && alpha.includes(chars[at])) {
							word.push(chars[at])
							at++
						}

						if (keywords.includes(word.join(''))) {
							i = at
							html.push(<span className="kd">{word.join('')}</span>)
							continue
						} else {
							if (word.length > 0) {
								i = at
								html.push(<span className="nx">{word.join('')}</span>)
								continue
							}
						}
					}

					const upper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
					if (upper.includes(char)) {
						const word: string[] = []
						let at = i
						const alpha = alphabet + alphabet.toUpperCase() + '_0123456789'
						while (at < chars.length && alpha.includes(chars[at])) {
							word.push(chars[at])
							at++
						}

						if (word.length > 0) {
							i = at
							html.push(<span className="nb">{word.join('')}</span>)
							continue
						}
					}

					const numbers = '0123456789'
					if (numbers.includes(char)) {
						const word: string[] = []
						let at = i
						const alpha = numbers + '._uinABCDEFxeE-'
						while (at < chars.length && alpha.includes(chars[at])) {
							word.push(chars[at])
							at++
						}

						i = at
						html.push(<span className="mi">{word.join('')}</span>)
						continue
					}

					const operators = '=+-/*!><&|'
					if (operators.includes(char)) {
						i++
						html.push(<span className="o">{char}</span>)
						continue
					}

					i++
					html.push(<>{char}</>)
				}
				break
			}
			case State.CommentLine: {
				if (char === '\n') {
					i++
					html.push(<br />)
					state = State.Plaintext
					continue
				}
				i++
				html.push(<span className="c1">{char}</span>)
				break
			}
			case State.CommentMultiLine: {
				if (char === '\n') {
					i++
					html.push(<br />)
					continue
				}
				if (char === '/' && char1 === '*') {
					i++
					i++
					html.push(<span className="c1">{'/*'}</span>)
					commentNesting++
					continue
				}
				if (char === '*' && char1 === '/') {
					i++
					i++
					html.push(<span className="c1">*/</span>)
					commentNesting--
					if (commentNesting === 0) {
						state = State.Plaintext
					}
					continue
				}
				i++
				html.push(<span className="c1">{char}</span>)
				break
			}
			case State.String: {
				if (char === '\\' && char1 === '(') {
					i++
					i++
					html.push(<span className="nb"><b>{char}</b></span>)
					html.push(<span className="nb">{char1}</span>)
					while (i < chars.length && chars[i] !== ')') {
						html.push(<span className="nb">{chars[i]}</span>)
						i++
					}
					html.push(<span className="nb">{chars[i]}</span>)
					i++
					continue
				}
				if (char === '\\') {
					i++
					i++
					html.push(<span className="gh"><b>{char}</b></span>)
					html.push(<span className="gh">{char1}</span>)
					continue
				}
				if (char === stringFinalizer) {
					i++
					// Push char here because char == ' or "
					html.push(<span className="mi">{char}</span>)
					state = State.Plaintext
					continue
				}
				i++
				html.push(<span className="mi">{char}</span>)
				break
			}
		}
	}

	html = html.map((value, index) => { return { ...value, key: index } })

	if (inline) {
		return <code>{html}</code>
	}
	return <div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code>{html}</code></pre></div></div>
}
