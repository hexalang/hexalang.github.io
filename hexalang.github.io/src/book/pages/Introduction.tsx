import { Link } from 'react-router-dom'
import { telegram, discord, telegramChat } from '../../data/links'
import logo from './images/logo.svg'
import { Img } from '../Img'
import { H2 } from 'book/H2'
import { Page } from 'book/Page'
import { Article as Comparison } from './Comparison'
import { Article as Profit } from './Profit'
import { Article as Checklist } from './Checklist'
import { Article as Lexer } from './Lexer'
import { Article as Hello } from './Hello'

export const Article = () => {
	return (
		<>
			<Img src={logo} alt="Hexa logo" width={192} />

			<p>Hexa is a high level, strictly typed programming language. It compiles to JavaScript, native executables and other languages. Easy to use and completely crossplatfrom.</p>

			<p>This “book” is intended to serve as a guide to help you learn the Hexa programming language. It will give you the knowledge you need to get started.</p>

			<p>It assumes that you have some familiarity with the basics of programming, such as using a code editor and terminal, and concepts such as variables, looping, recursion, types and data structures. Background in imperative programming with some knowledge of functional programming ideas will be very helpful. Sometimes it makes a comparison to some other programming language (like JavaScript) to provide some additional information.</p>

			<H2 id="where-to-start">Where to start</H2>

			<p>Are you novice?</p>

			<ul>
				<li>
					<Page page={Hello}>“Hello, Hexa!”</Page> — beginner friendly intro to Hexa</li>
				<li><Link to="/try">Try online compiler (in browser!) to run some examples</Link></li>
			</ul>

			<p>Are you experienced developer?</p>

			<ul>
				<li><Page page={Comparison}>“Comparison with other languages”</Page></li>
				<li><Page page={Checklist}>“Programming language checklist”</Page></li>
				<li><Page page={Profit}>“Why Hexa?”</Page></li>
				<li><a href="https://github.com/hexalang/hexa">Contribute to the compiler</a></li>
				<li><Page page={Lexer}>Compiler internals</Page></li>
			</ul>

			<p>Hit a button on the left side to view/hide table of contents <img className="emoji" title=":arrow_left:" alt=":arrow_left:" src="https://github.githubassets.com/images/icons/emoji/unicode/2b05.png" height="20" width="20" /></p>

			<H2 id="helpful-links">Helpful links</H2>

			<ul>
				<li>
					<a href={telegramChat}>Telegram @hexalang our official group</a></li>
				<li>
					<a href={discord}>Discord server with international chats</a></li>
				<li>
					<a href={telegram}>Telegram @hexalang_news news channel</a></li>
				<li>
					<a href="https://t.me/hexalang_github">Telegram @hexalang_github realtime GitHub feed</a></li>
				<li>
					<Link to="/">Hexa home page</Link></li>
				<li>
					<a href="https://github.com/hexalang">GitHub itself and source code</a></li>
				<li><a href="https://patreon.com/PeyTy">Patreon if you consider donations</a></li>
				<li>
					<a href="https://t.me/addstickers/hexalang">Stickers for Telegram</a> <img className="emoji" title=":heart:" alt=":heart:" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" height="20" width="20" />
				</li>
			</ul>
		</>
	)
}
