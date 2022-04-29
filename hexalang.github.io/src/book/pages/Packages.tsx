import { H3 } from 'book/H3'
import { Img } from 'book/Img'
import { Page } from 'book/Page'
import git from './images/git-to-PATH.png'
import { Article as Install } from './Install'

export const Article = () => {
	return (
		<>
			<p>DRAFT</p>

			<p>Package manager is a tool for code sharing between developers. Very easy to use, no worries! <img className="emoji" title=":wink:" alt=":wink:" src="https://github.githubassets.com/images/icons/emoji/unicode/1f609.png" height="20" width="20" /></p>

			<p>It comes built into <Page page={Install} id="#compiler">Hexa compiler</Page>, so you don’t have to lurk elsewhere.</p>

			<p>Manager works similar to <code className="language-plaintext highlighter-rouge">npm</code> (node.js’ package manager) where possible.</p>

			<H3>Requirements</H3>

			<p>Package manager works atop of Git. <a href="https://git-scm.com/downloads">Download Git installer</a> if you don’t have
				one pre-installed on your system, select add to PATH option:</p>

			<Img src={git} alt="git to PATH" />

			<p>Packages installed globally into <code className="language-plaintext highlighter-rouge">~/hexa_modules/packages</code> or <code className="language-plaintext highlighter-rouge">C:\Users\user\hexa_modules\packages</code>,
				thus disk space requirements per-package are not high. Note, that every package version installed into separate
				folder like <code className="language-plaintext highlighter-rouge">hexa_modules/packages/.../v1.2.3</code>, but you may cleanup unused versions.
				If packages installed locally on per-project manner, then <code className="language-plaintext highlighter-rouge">./hexa_modules</code> created in the project root.</p>

			<H3>Package bundle</H3>

			<p>Code with additional data may be bundled into “package” like this:</p>

			<ul>
				<li>
					<code className="language-plaintext highlighter-rouge">src</code> - folder with code</li>
				<li>
					<code className="language-plaintext highlighter-rouge">docs</code> - folder for docs, if any</li>
				<li>
					<code className="language-plaintext highlighter-rouge">tests</code> - folder with tests, if any</li>
				<li>
					<code className="language-plaintext highlighter-rouge">hexa.json</code> - list all source files as “src\filename.hexa”</li>
				<li>
					<code className="language-plaintext highlighter-rouge">.gitattributes</code> - just add <code className="language-plaintext highlighter-rouge">* text=auto</code> there to avoid Linux&lt;-&gt;Windows&lt;-&gt;macOS
					{' '}
					<a href="https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats">end of lines problems</a>
				</li>
				<li>
					<code className="language-plaintext highlighter-rouge">.gitignore</code> - ensure no garbage comes into package</li>
				<li>
					<code className="language-plaintext highlighter-rouge">README.md</code> - description and usage examples</li>
				<li>
					<code className="language-plaintext highlighter-rouge">LICENSE</code> - any open-source license (prefer MIT or BSD)</li>
			</ul>

			<p>Use any of <code className="language-plaintext highlighter-rouge">/</code> or <code className="language-plaintext highlighter-rouge">\\</code> slashes. Hexa changes them to platform-specific automagically.</p>

			<H3>Registering package versions</H3>

			<p>git tag</p>

			<p>hexa cleanup-patch
				hexa –local cleanup-patch
				hexa cleanup-minor
				hexa cleanup-minor –local
				hexa cleanup-major
				hexa cleanup-major –local
				–no-cache
				–reinstall # if broken incomplete download</p>

			<p><a href="TODO%5Chexa%5Csource%5Ccli%5Chpm.hexa">Source code of package manager for contributors TODO</a></p>

			<H3>Uninstalling packages</H3>

			<p>Do this only if your really need some free disk space. It’s okay to have fallbacks if new package version fails.</p>

			<p>To uninstall a locally/globally installed package:</p>

			<p>$ hexa uninstall package-name</p>

			<p>“hexaCompiler”: “~0.10.0”, Specify required Hexa compiler.
				Package manager will download older or newer versions <strong>of the package</strong> if possible for your compiler,
				until compatible and non-conflicting one is found.</p>

			<p>Follow SemVer 2 http://semver.org/</p>
		</>
	)
}
