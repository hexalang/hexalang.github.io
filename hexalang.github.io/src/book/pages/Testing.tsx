export const Article = () => {
	return (
		<>
			<p>(draft)</p>

			<p>Most classic languages don’t have built-in unit testing features, while modern ones add syntax sugar for “inline’ testing.</p>

			<p>While inline testing looks good on the surface, it is not suitable for anything complicated. Imagine having [more than ten lines] of test cases or [mocking class hierarchies] to validate business logic. Code will become bloated and, depending on language implementation, semantically limited. It is good practice to not mix documentation, write books and articles separately, so how tests are different?</p>

			<p>Hexa takes realistic approach to testing, thus, making it conventional to add testable build schemes to your project.</p>

			<p>While this is not innovational, it still makes you more confident-conscious about common way of testing third-party code, and doing same.</p>

			<p>debugOnly
				releaseOnly</p>

			<div className="language-json highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="p">&#123;</span><span className="w"> </span><span className="nl">"testOnly"</span><span className="p">:</span><span className="w"> </span><span className="p">[</span><span className="w"> </span><span className="s2">"testA.hexa"</span><span className="p">,</span><span className="w"> </span><span className="s2">"testB.hexa"</span><span className="w"> </span><span className="p">]</span><span className="w"> </span><span className="p">&#125;</span><span className="w">
			</span></code></pre></div></div>
		</>
	)
}
