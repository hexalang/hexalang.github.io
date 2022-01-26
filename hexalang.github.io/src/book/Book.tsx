import './book.css'

export const Book = () => {
	return (
		<div className="content">

			<div className="sidebar">
				<div css={`margin-block-start: 7px; padding-inline-start: 15px; margin-block-end: 4px;`}>
					<a href="/">Hexa</a><strong><a href="/book">Book</a></strong>
				</div>
				<ul>





					<li>

						<a href="/book/index.html"><strong>Introduction</strong></a>

					</li>

					<li>

						<a href="/book/Hello.html">Hello, Hexa!</a>

					</li>


					<div css={`height: 1px; border-top: 1px solid rgba(139, 216, 255, 0.2);`}></div>



					<li>

						<a href="/book/Cppnt.html">C++n'ting your code</a>

					</li>



					<li>

						<a href="/book/Comparison.html">Comparison with other languages</a>

					</li>



					<li>

						<a href="/book/FAQ.html">FAQ</a>

					</li>







					<li>

						<a href="/book/Install.html">Installation</a>

					</li>





					<li>

						<a href="/book/Packages.html">Package manager</a>

					</li>



					<li>

						<a href="/book/Performance.html">Performance</a>

					</li>



					<li>

						<a href="/book/FromJavaScript.html">Porting JavaScript</a>

					</li>



					<li>

						<a href="/book/Checklist.html">Programming language checklist</a>

					</li>



					<li>

						<a href="/book/Strings.html">Strings and text</a>

					</li>



					<li>

						<a href="/book/Examples.html">Syntax examples</a>

					</li>



					<li>

						<a href="/book/Targets.html">Third-party compilation targets</a>

					</li>



					<li>

						<a href="/book/Testing.html">Unit testing</a>

					</li>



					<li>

						<a href="/book/Profit.html">Why Hexa?</a>

					</li>



					<div css={`height: 1px; border-top: 1px solid rgba(139, 216, 255, 0.2);`}></div>


					<li>

						<a href="/book/Lexer.html">Inside compiler: Lexer</a>

					</li>


				</ul>
			</div>

			<div className="sidebar-toggle">
				<span></span>
				<span></span>
				<span></span>
			</div>

			<div className="page">
				<div className="header">
					<div className="header-spacer"></div>
					<a href="/try/" className="header-button">Try</a>
					<a href="https://github.com/hexalang/hexa/releases/latest" className="header-button">Install</a>
					<a href="https://t.me/s/hexalang_news" className="header-button">News</a>
					<a href="https://github.com/hexalang" className="header-button">GitHub</a>
					<a href="https://www.patreon.com/PeyTy" className="header-button">Donate</a>
				</div>
				<div id="article-navigation">
					<a href="#top" className="selected">Introduction</a><br />
					<a href="#where-to-start">Where to start</a><br />
					<a href="#helpful-links">Helpful links</a><br />
				</div>
				<div className="article markdown">
					<h2 id="top">Introduction</h2>


					<h2><img src="https://hexalang.github.io/favicon/android-icon-192x192.png" alt="Hexa" /></h2>

					<p>Hexa is a high level, strictly typed programming language. It compiles to JavaScript, native executables and other languages. Easy to use and completely crossplatfrom.</p>

					<p>This “book” is intended to serve as a guide to help you learn the Hexa programming language. It will give you the knowledge you need to get started.</p>

					<p>It assumes that you have some familiarity with the basics of programming, such as using a code editor and terminal, and concepts such as variables, looping, recursion, types and data structures. Background in imperative programming with some knowledge of functional programming ideas will be very helpful. Sometimes it makes a comparison to some other programming language (like JavaScript) to provide some additional information.</p>

					<h2 id="where-to-start">Where to start</h2>

					<p>Are you novice?</p>

					<ul>
						<li>
							<a href="https://hexalang.github.io/book/Hello.html">“Hello, Hexa!”</a> — beginner friendly intro to Hexa</li>
						<li><a href="https://hexalang.github.io/try/">Online compiler (in browser!) to run examples</a></li>
					</ul>

					<p>Are you experienced developer?</p>

					<ul>
						<li><a href="https://hexalang.github.io/book/Comparison.html">“Comparison with other languages”</a></li>
						<li><a href="https://hexalang.github.io/book/Checklist.html">“Programming language checklist”</a></li>
						<li><a href="https://hexalang.github.io/book/Profit.html">“Why Hexa?”</a></li>
						<li><a href="https://github.com/hexalang/hexa">Contribute to the compiler</a></li>
						<li><a href="https://hexalang.github.io/book/Lexer.html">Compiler internals</a></li>
					</ul>

					<p>Hit a button on the left side to view/hide table of contents <img className="emoji" title=":arrow_left:" alt=":arrow_left:" src="https://github.githubassets.com/images/icons/emoji/unicode/2b05.png" height="20" width="20" /></p>

					<h2 id="helpful-links">Helpful links</h2>

					<ul>
						<li>
							<a href="https://t.me/hexalang">Telegram @hexalang</a> our official group</li>
						<li>
							<a href="https://t.me/hexalang_news">Telegram @hexalang_news</a> news channel</li>
						<li>
							<a href="https://t.me/hexalang_github">Telegram @hexalang_github</a> realtime GitHub feed</li>
						<li>
							<a href="https://hexalang.github.io">https://hexalang.github.io</a> home page</li>
						<li>
							<a href="https://twitter.com/hexalang">https://twitter.com/hexalang</a> Twitter account</li>
						<li>
							<a href="https://github.com/hexalang">https://github.com/hexalang</a> GitHub itself and source code</li>
						<li>Patreon <a href="https://patreon.com/PeyTy">https://patreon.com/PeyTy</a> if you consider donations</li>
						<li>
							<a href="https://t.me/addstickers/hexalang">Stickers for Telegram</a> <img className="emoji" title=":heart:" alt=":heart:" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" height="20" width="20" />
						</li>
					</ul>

				</div>
				<br /><br />
			</div>

			<div className="dark-toggle"><span className="dark"></span><span className="light"></span></div>
		</div>
	)
}
