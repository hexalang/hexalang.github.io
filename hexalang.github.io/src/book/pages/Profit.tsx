import { H2 } from "book/H2"

export const Article = () => {
	return (
		<>
			<p>Consider adopting new programming language? <img className="emoji" title=":yum:" alt=":yum:" src="https://github.githubassets.com/images/icons/emoji/unicode/1f60b.png" height="20" width="20" /></p>

			<H2 id="goals-and-philosophy">Goals and philosophy</H2>

			<p>Main goal of Hexa is… software. This is not a language on its own, it is a tool.</p>

			<p>All design decisions a very pragmatic, and aimed for painless writing, deploying, and maintaining of software.
				Second goal is to being friendly for small teams/businesses, individuals and open source communities.</p>

			<p>Most languages provide nonsense like unicode characters in variable names and even emojis,
				tabs-vs-spaces wars, non-working optional safety. Hexa don’t.</p>

			<p>Hexa strictly defines that making software is really, really hard. And maintaining others code is extra harder.
				Reading code is hard. Debugging is hard. Optimizing is hard. Deploying buggy software is useless and harmful.</p>

			<p>Hexa is <strong>not</strong> idealistic. Some things look irrational or you see that it is very logical to add feature xyz?
				Programming is <em>not</em> about logic since 1960.
				Or, maybe, “hey, we already have C++”? Hey, how many apps you did in C++? None?</p>

			<p>Sometimes coding may look not very fun, but you don’t really care when your <em>ideas</em> come to <em>life</em> and <em>prosper</em>.</p>

			<p>Software deserves to be great, and problems to be solvable.</p>

			<H2 id="use-cases">Use cases</H2>

			<ul>
				<li>High performance, portable, cross platform <strong>native</strong> software</li>
				<li>Software based on web technologies</li>
				<li>Scripting and automation</li>
				<li>Low code friction: easy to join existing project</li>
				<li>Scaling and maintenance</li>
			</ul>

			<H2 id="pros">Pros</H2>

			<table>
				<thead>
					<tr>
						<th css="text-align: left">Feature</th>
						<th css="text-align: right">Implementation state</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td css="text-align: left">Compiles to (human-readable!) JavaScript</td>
						<td css="text-align: right">Mostly complete</td>
					</tr>
					<tr>
						<td css="text-align: left">Compiles to native binaries with LLVM</td>
						<td css="text-align: right">In the works</td>
					</tr>
					<tr>
						<td css="text-align: left">Compiles to C</td>
						<td css="text-align: right">In the works</td>
					</tr>
					<tr>
						<td css="text-align: left">Ultimately crossplatform (for development, i.e. Windows, macOS, Linux)</td>
						<td css="text-align: right">Yes</td>
					</tr>
					<tr>
						<td css="text-align: left">Ultimately crossplatform (for targeting)</td>
						<td css="text-align: right">Currently JavaScript (web, node, scripting)</td>
					</tr>
					<tr>
						<td css="text-align: left">Fast compilation</td>
						<td css="text-align: right"><a href="https://hexalang.github.io/book/Performance.html">Nearly instantaneous</a></td>
					</tr>
					<tr>
						<td css="text-align: left">Stable syntax</td>
						<td css="text-align: right">Most of the language will stay as-is</td>
					</tr>
					<tr>
						<td css="text-align: left">Compiles itself</td>
						<td css="text-align: right">Currently with node, LLVM in the works</td>
					</tr>
					<tr>
						<td css="text-align: left">Syntax is not obscure, common paradigms</td>
						<td css="text-align: right">Yes</td>
					</tr>
					<tr>
						<td css="text-align: left">Very fast native targets</td>
						<td css="text-align: right">
							<a href="https://hexalang.github.io/book/Performance.html">Yes</a>, semantically guaranteed</td>
					</tr>
					<tr>
						<td css="text-align: left">Low memory overhead</td>
						<td css="text-align: right">No tracing garbage collection</td>
					</tr>
					<tr>
						<td css="text-align: left">Transpiles to other programming languages</td>
						<td css="text-align: right">Yes, mostly stable <a href="https://en.wikipedia.org/wiki/Intermediate_representation">IR</a>, pluggable targets in the works</td>
					</tr>
					<tr>
						<td css="text-align: left">Imperative metaprogramming</td>
						<td css="text-align: right">In the works</td>
					</tr>
					<tr>
						<td css="text-align: left">Scripting (running single files without compilation and <a href="https://en.wikipedia.org/wiki/Read-eval-print_loop">REPL</a>)</td>
						<td css="text-align: right">Sometimes works</td>
					</tr>
					<tr>
						<td css="text-align: left">Null-safety</td>
						<td css="text-align: right">In the works</td>
					</tr>
					<tr>
						<td css="text-align: left">Exception-safety</td>
						<td css="text-align: right">In the works</td>
					</tr>
					<tr>
						<td css="text-align: left">Helpful error messages</td>
						<td css="text-align: right">Compiler mostly understands your code and intention</td>
					</tr>
					<tr>
						<td css="text-align: left">Zero-cost abstractions</td>
						<td css="text-align: right">In the works (inline functions, inline classes, code transformation)</td>
					</tr>
					<tr>
						<td css="text-align: left">C ABI compatibility</td>
						<td css="text-align: right">Of course</td>
					</tr>
				</tbody>
			</table>

			<H2 id="cons">Cons</H2>

			<table>
				<thead>
					<tr>
						<th css="text-align: left">Feature</th>
						<th css="text-align: right">Implementation state</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td css="text-align: left">Still incomplete compiler</td>
						<td css="text-align: right">Version Alpha</td>
					</tr>
					<tr>
						<td css="text-align: left">Few bingings</td>
						<td css="text-align: right">Some subset of JavaScript, browser and node API</td>
					</tr>
					<tr>
						<td css="text-align: left">Package system is not done</td>
						<td css="text-align: right">In the works</td>
					</tr>
					<tr>
						<td css="text-align: left">Native targets barely work</td>
						<td css="text-align: right">In the works</td>
					</tr>
					<tr>
						<td css="text-align: left">Regular expressions are not yet done</td>
						<td css="text-align: right">Planned</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}
