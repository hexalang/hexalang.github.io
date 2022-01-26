export const Article = () => {
	return (
		<>
			<ul>
				<li>Hexa is like JavaScript, but has no JavaScript’s feature x, y and z!</li>
				<li>Hexa is like Swift, but has no Swift’s feature x, y and z!</li>
				<li>Hexa is like Haskell, but has no Haskell’s feature x, y and z!</li>
				<li>etc</li>
			</ul>

			<p>Hexa is <strong>not</strong> intended to be a subset or a superset of another language,
				especially taking wrong parts.</p>

			<p>And Swift, JavaScript, … are <strong>not</strong> perfect languages from author’s stand point.
				If you fall in love with (say) Swift, it doesn’t makes that Hexa should be Swift-on-steroids.
				Idea of Hexa-as-superset-of-X was dropped many years ago.</p>

			<p>Goal is to keep language simple and straightforward, and familiar to
				developers coming from other languages.
				Every feature was taken from strictly pragmatic position.
				Features which didn’t prove their usefullness,
				albeit maybe looking common to you, didn’t make their way into Hexa design.</p>

			<p>For example, many languages forbid variable shadowing, but experience shows
				this makes your code actually <em>worse</em>: buggy, vague and especially error prone
				for manipulation (refactoring, copy-pasting, extending behaviour).
				Hexa allows variable shadowing, but disallows unicode in variable names.</p>

			<ul>
				<li>Is Hexa for advanced developers?</li>
			</ul>

			<p>Hexa is strongly for “averages”. It’s not very simple, but it’s designed to
				behave predictably, show helpful error messages, help you to write safe
				and fast code <strong>by default</strong>.</p>

			<p>For example, Hexa has simple typed <code className="language-plaintext highlighter-rouge">Array&lt;T&gt;</code>. Yeah, more advanced developer
				will prefer vector or LIFO/FIFO queue or sparse/dense array or single/double linked
				list etc etc etc. But the only the super-advanced developer will say which is not
				only better for the task, but also has better performance (in a non-sintetic environment!).
				And only the +-advanced developers would be capable to read and maintain that code.</p>

			<p>But… I <strong>really really hate</strong> code which is <strong>just</strong> 10% faster but 100% more <strong>complicated</strong>.
				Hexa’ arrays may do most of the stuff easily with adequate performance. It’s just a one simple type,
				generic, specialized at compiler type, known by every Hexa and JavaScript/Python/Java/etc developer.</p>

			<p>If you feel advanced and sane to <strong>not</strong> overoptimize every line of code, you may go native
				and implement some parts like you would in C (or just use external lib).</p>

			<p>In comparison, languages like Jai (Jonathan Blow) or Zig (Andrew Kelley) have different visions:</p>

			<ul>
				<li>Jai is advanced developers only (as stated by the creator) and all about performance (feel risky?)</li>
				<li>Zig is all about (safe!) systems programming, with pointers, allocators and all, while it way better than C</li>
				<li>I couldn’t write even a single win32 app in Rust (“lets overcomplicate everything”-oriented programming)</li>
				<li>D requires you to have
					<a href="https://en.wikipedia.org/wiki/Johnny_Mnemonic_(film)">a data storage device implanted in your brain</a>
					even to remember how that keyword behaves <strong>this</strong> time
					(<code className="language-plaintext highlighter-rouge">@nogc</code>, <code className="language-plaintext highlighter-rouge">@safe</code> but <code className="language-plaintext highlighter-rouge">pure</code>, <code className="language-plaintext highlighter-rouge">nothrow</code>? <code className="language-plaintext highlighter-rouge">return ref</code> vs <code className="language-plaintext highlighter-rouge">return scope</code> what? <code className="language-plaintext highlighter-rouge">immutable</code> vs <code className="language-plaintext highlighter-rouge">const</code>, <code className="language-plaintext highlighter-rouge">static this</code>?? <code className="language-plaintext highlighter-rouge">alias this</code>???
					oh wait there is also <code className="language-plaintext highlighter-rouge">return scope ref</code>…).</li>
			</ul>
		</>
	)
}
