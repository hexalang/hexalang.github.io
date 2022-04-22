import bootstrap from './images/bootstrap.png'
import such_a_many_commits from './images/such_a_many_commits.png'
import { Img } from '../Img'
import { Page } from 'book/Page'
import { Article as Bootstrap } from './Bootstrap-the-compiler'

export const Article = () => {
	return (
		<>
			<p>Hello! If you didn’t follow, Hexa is a static typed programming language with a touch of style, magic and beauty… oh, I mean, it compiles to JavaScript, soon <img style={{ verticalAlign: 'middle' }} src="https://haxe.org/favicon.ico" height="16" width="16" alt="Haxe" /><a href="https://haxe.org">Haxe</a> and native. Has safety features, looks nice and simple. Coding in Hexa is really calmful and productive&nbsp;<img className="emoji" title=":cake:" alt=":cake:" src="https://github.githubassets.com/images/icons/emoji/unicode/1f370.png" height="20" width="20" /></p>

			<p>As I wrote before in <Page page={Bootstrap}>Bootstrap the compiler</Page>, large achievement for any language is to “dogfood” a compiler with itself. Same was a goal for Hexa too (intentionally, to help with future metaprogramming features).</p>

			<p>And 100 commits behind… bootstrapping is done! <img className="emoji" title=":tada:" alt=":tada:" src="https://github.githubassets.com/images/icons/emoji/unicode/1f389.png" /></p>

			<Img src={such_a_many_commits} alt="Git GUI showing lots of commits to be pushed" />

			<p>From now on, Hexa uses pre-built version of itself to make latest versions usable.</p>

			<Img src={bootstrap} alt="Compilation log" />

			<p>There's some quirks, for example, old JavaScript generator dropped entirely from codebase in favor of new normalizer+generator tandem. New generator sometimes breaks compilation, but no worries, it's a quick fix, I just wanted to share my joy as earlier as possible!</p>
			<p></p>

			<p>It is now really easy to add new <a href="https://github.com/hexalang/hexa/tree/kawaii/source/targets">targets</a> with introduced adaptive code <a href="https://github.com/hexalang/hexa/blob/kawaii/source/compiler/normalizer.hexa">normalizer</a>. It receives platform-specific keywords and rules directly, and does all renaming stuff and heavy lifting by itself.</p>
			<p></p>

			<p>It's time to backport some features from early prototypes and go public!</p>
			<p></p>
		</>
	)
}
