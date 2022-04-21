enum State {
	Plaintext,
	CommentLine,
	String
}

export const Code = ({ code }: { code: string }) => {
	let html: JSX.Element[] = []

	let chars = code.split('')
	const keywords = [
		'function'
	]

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
					if (char === '/' && char1 === '/') {
						state = State.CommentLine
						continue
					}
					if (char === '"') {
						html.push(<span className="mi">{char}</span>)
						i++
						state = State.String
						continue
					}
					const word: string[] = []
					let at = i
					const alphabet = 'abcdefghijklmnopqrstuvwxyz'
					const alpha = alphabet + alphabet.toUpperCase()
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
			case State.String: {
				if (char === '"') {
					i++
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

	// <div dangerouslySetInnerHTML={{ __html: `<code>` + html.join('') + `</code>` }} />
	return <div className="language-ts highlighter-rouge"><div className="highlight"><pre className="highlight"><code>{html}</code></pre></div></div>
}
