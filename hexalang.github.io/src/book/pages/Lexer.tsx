import { Code } from "book/Code"
import { H2 } from "book/H2"
import { Page } from 'book/Page'
import { Article as Parser } from './Parser'

export const Article = () => {
	return (
		<>
			<p>Lexer transfers data then to <Page page={Parser}>Parser</Page>.</p>

			<p>Example of lexer work:</p>

			<Code code={`"fun hello() return 123" => [
    "fun", "hello", "(", ")", "return", "123"
]
// In actual compiler code tokens are used, not arrays of plain strings`} />

			<p>Each little piece of code is encoded as <Code inline code={`Token`} /> object, which contains position in file, extended value (for strings and identifiers), etc.
				This is lots of information to show proper error messages and do debugging.</p>

			<p>While Lexer code may not look very efficient, compared to “magic” of parser generators, the main problem is not in the design of lexer code itself. One should always think about bottlenecks. Hexa is language for modern computers, not 20-centuries. Nowadays compiler mostly limited by the CPU cache <strong>and whole compiler routine</strong> from starting compiler binary (gcc and clang are so huge, it takes eons to load them on low-ram and no-ssd situations on every compilation) to performing transformations, hints calculation, optimization and final output.</p>

			<p>Normally many people have an impression of “cheap” or “obvious” optimizations. Say, allocating a String for a textual token takes about 50% of lexer performance. Hmm…why do this at all? Let’s store file offset and size! Nope. First, you’ll have to store file contents in memory, store 32 bits offset + 16 bits size (already same memory as 6 ascii characters, Hexa uses only ASCII for identifiers). Okay, who cares about RAM (which is always AL-WA-YS swapped out thanks to your IDE opened (looking at my VSCode) thus you don’t actually have free RAM ever), but how would you compare identifies to each other later? Oh, looping over characters every time? Hexa stores string only once in memory. Longer to allocate, but costs nothing to compare later, thus making <code className="language-plaintext highlighter-rouge">switch()</code> and <code className="language-plaintext highlighter-rouge">==</code> operators insanely cheap.</p>

			<blockquote>
				<p>Note: idiomatic Hexa prefers long self-descriptional identifier names. Longer names =&gt; longer comparison loops (with classic approach of per-char comparison).</p>
			</blockquote>

			{false && 'TODO realtime demo with LSP text to tokens'}

			<H2>Where to look</H2>

			<ul>
				<li>source\compiler\lexer.hexa</li>
				<li>source\data\token.hexa</li>
			</ul>

		</>
	)
}
