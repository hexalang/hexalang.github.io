import { H2 } from "book/H2"
import { H3 } from "book/H3"
import { JustUrl } from "book/JustUrl"
import { Page } from "book/Page"

export const Article = () => {
	return (
		<>
			<p>This is the very first official release of Hexa! Previous release (aka 1.0.0) was just formal and wasn't really ready for public usage or capable of anything actually useful.</p>

			<H2 id="breaking">New features</H2>

			<H3 id="server">Language server</H3>
			<p>Hexa now includes so-called language server. Language server provides error highlighting, autocompletion and more. It is not (yet) a LSP-conforming. Reference client has been implemented for VSCode.</p>
			<p>If you're familiar with Python, you may contribute Sublime support now or wait for LSP version of the server later.</p>
			<ul>
				<li><JustUrl>https://github.com/hexalang/hexa-vscode-bundle</JustUrl></li>
				<li><JustUrl>https://github.com/hexalang/hexa-sublime-bundle</JustUrl></li>
			</ul>

			<H2 id="breaking">Breaking changes</H2>
			<p>Change is considered "breaking" only if it breaks some tests, especially LTS (aka Long Term Supported) ones.</p>
			<ul>
				<li>_</li>
				<li>_</li>
			</ul>

			<H2 id="credits">Credits</H2>
			<p>Thanks to our sponsors and contributors!</p>
			<ul>
				<li>acidicMercury8</li>
				<li>ethanolchik</li>
				<li>expwez</li>
				<li>gavr123456789</li>
				<li>Samsuper12</li>
			</ul>
			<blockquote>
				<p>Displayed in alphabetical order</p>
			</blockquote>
		</>
	)
}
