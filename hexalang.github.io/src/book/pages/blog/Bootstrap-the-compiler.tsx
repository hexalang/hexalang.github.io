export const Article = () => {
	return (
		<>
			<p>It was a long standing project and hard research! So it is <em>the</em> time to stop over-engineering and dive into implementation and dogfooding.</p>

			<p>Current task is to go wild and make Hexa a self-contained, i.e. self compilable.</p>

			<p>Unfortunately, the easiest way to achieve this is to make a compiler prototype in H<em>a</em>xe, convert <strong>it’s</strong> <em>source</em> to H<em>e</em>xa, compile it with H<em>a</em>xe’s to finally generate H<em>e</em>xa’s compiler, to ..well ..finally compile H<em>e</em>xa compiler with H<em>e</em>xa compiler. Sounds non-trivial, huh?</p>

			<p>Actually, H<em>a</em>xe allows to implement automatic source conversion with <strong>macro</strong> API. So most of the time I am writing H<em>a</em>xe code, which compiles H<em>e</em>xa code, generated from <em>this</em> code which parses <em>this same code</em>. Meh.</p>

			<p>This shows to work really well, so lets fill a to-do. Also you may expect the <strong>macro</strong> to be published in the <a href="https://github.com/hexalang/toHexa">https://github.com/hexalang/toHexa</a> repo. I don’t believe it will directly re-compile something like OpenFL but who knows.</p>

			<p>By the way this makes unit testing a lot simpler cause one may reuse H<em>a</em>xe’ unit tests he-he.</p>
		</>
	)
}
