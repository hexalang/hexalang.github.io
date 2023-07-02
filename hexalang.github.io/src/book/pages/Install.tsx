import { H2 } from "book/H2"
import { Img } from "book/Img"
import { JustUrl } from "book/JustUrl"
import picture from './images/happy.png'

export const Article = () => {
	return (
		<>
			<Img src={picture} style={{ borderRadius: '100%' }} alt="So happy! Gonna play with Hexa, yay!" width={256} />

			<p>Getting up and running!</p>

			<p>
				By the way, Hexa is open source!
				If you want to build the compiler yourself please follow instructions at&nbsp;
				<JustUrl>https://github.com/hexalang/hexa#build</JustUrl>.
			</p>

			<H2>Compiler</H2>

			<p>Hexa provides graphical installers for your convenience:</p>

			<ul>
				<li>Automatic Builds <JustUrl>https://ci.appveyor.com/project/PeyTy/hexa/build/artifacts</JustUrl></li>
				<li>GitHub Releases <JustUrl>https://github.com/hexalang/hexa/releases/latest</JustUrl></li>
				<li>Telegram Mirror <JustUrl>https://t.me/hexalang_official</JustUrl></li>
			</ul>

			<H2>Tools</H2>

			<p>Compiler includes language server and is required for tools to work properly:</p>

			<ul>
				<li>VSCode <JustUrl>https://github.com/hexalang/hexa-vscode-bundle</JustUrl></li>
				<li>Sublime Text <JustUrl>https://github.com/hexalang/hexa-sublime-bundle</JustUrl></li>
				<li>Atom <JustUrl>https://github.com/hexalang/hexa-atom-bundle</JustUrl></li>
			</ul>
		</>
	)
}
