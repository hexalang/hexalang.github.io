import { Code } from "book/Code"
import { H2 } from "book/H2"
import { H3 } from "book/H3"
import { JustUrl } from "book/JustUrl"
import { Page } from "book/Page"
import github from "../images/gh.svg"

export const Article = () => {
	return (
		<>
			TODO PIC
			<p>This is the very first official release of Hexa! Previous release (aka 1.0.0) was just formal and wasn't really ready for public usage or capable of anything actually useful.</p>

			<H2>New features</H2>

			<H3>Language server</H3>
			<p>Hexa now includes so-called language server. Language server provides error highlighting, autocompletion and more. It is not (yet) a LSP-conforming. Reference client has been implemented for VSCode.</p>
			<p>If you're familiar with Python, you may contribute Sublime support now or wait for LSP version of the server later.</p>
			<ul>
				<li><JustUrl>https://github.com/hexalang/hexa-vscode-bundle</JustUrl></li>
				<li><JustUrl>https://github.com/hexalang/hexa-sublime-bundle</JustUrl></li>
			</ul>

			<H2>Breaking changes</H2>
			<p>Change is considered "breaking" only if it breaks some tests, especially LTS (aka Long Term Supported) ones.</p>
			<ul>
				<li>_</li>
				<li>_</li>
			</ul>

			<H2>Work in progress</H2>
			<p>Future directions for the development of new features and improvements to the existing ones.</p>
			<ul>
				<li>Package manager</li>
				<li>Project templates</li>
				<li>Bootstrap to .exe</li>
				<li><img className="emoji" title=":arrow_left:" alt=":arrow_left:" src="https://github.githubassets.com/images/icons/emoji/unicode/2b05.png" height="20" width="20" /> Also check HexaLab initiatives</li>
			</ul>

			<H2>Credits</H2>
			<p>Thanks to our fantastic sponsors and contributors!</p>
			<ul>
				<li><img alt="GitHub" src={github} className="emoji" /> acidicMercury8</li>
				<li><img alt="GitHub" src={github} className="emoji" /> ethanolchik</li>
				<li><img alt="GitHub" src={github} className="emoji" /> expwez</li>
				<li><img alt="GitHub" src={github} className="emoji" /> gavr123456789</li>
				<li><img alt="GitHub" src={github} className="emoji" /> Samsuper12</li>
				also active patreons or past
			</ul>
			<blockquote>
				<p>Displayed in alphabetical order</p>
			</blockquote>

			<p style={{ textAlign: 'center' }}><img className="emoji" title="❤️" alt=":heart:" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" height="20" width="20" /></p>
		</>
	)
}
