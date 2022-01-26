export const Article = () => {
	return (
		<>
			<p>! This is a draft !</p>

			<h2 id="environment">Environment</h2>

			<ul>
				<li>Hexa</li>
				<li>JavaScript</li>
				<li>C++
					<ul>
						<li>C++17</li>
						<li>Compiler:</li>
					</ul>
				</li>
			</ul>

			<p>Machine One</p>
			<ul>
				<li>Type: Desktop PC (64-bit only)</li>
				<li>CPU: ~.~~GHz ~~~, ~ Cores, ~ HW Threads</li>
				<li>OS: Windows 10</li>
			</ul>

			<p>Machine Two</p>
			<ul>
				<li>Type: Tablet PC (32-bit only)</li>
				<li>CPU: ~.~~GHz Intel Atom ~~~, 4 Cores, 4 HW Threads</li>
				<li>OS: Windows 10</li>
			</ul>

			<h2 id="exception-handling">Exception handling</h2>

			<p>Something like that:</p>

			<div className="language-js highlighter-rouge"><div className="highlight"><pre className="highlight"><code><span className="c1">//(()=&gt;&#123; "use strict"</span>
				<span className="kd">function</span> <span className="nx">throws</span><span className="p">(</span><span className="nx">i</span><span className="p">)</span> <span className="p">&#123;</span>
				<span className="k">if</span> <span className="p">(</span><span className="nx">i</span> <span className="o">%</span> <span className="mi">2</span> <span className="o">==</span> <span className="mi">0</span><span className="p">)</span> <span className="k">throw</span> <span className="mi">123</span>
				<span className="p">&#125;</span>

				<span className="kd">function</span> <span className="nx">calls</span><span className="p">(</span><span className="nx">i</span><span className="p">)</span> <span className="p">&#123;</span>
				<span className="k">if</span> <span className="p">(</span><span className="nx">i</span> <span className="o">%</span> <span className="mi">2</span> <span className="o">==</span> <span className="mi">0</span><span className="p">)</span> <span className="nx">throws</span><span className="p">(</span><span className="nx">i</span> <span className="o">*</span> <span className="mi">3</span><span className="p">)</span>
				<span className="p">&#125;</span>

				<span className="kd">function</span> <span className="nx">catches</span><span className="p">(</span><span className="nx">i</span><span className="p">)</span> <span className="p">&#123;</span>
				<span className="k">try</span> <span className="p">&#123;</span>
				<span className="k">if</span> <span className="p">(</span><span className="nx">i</span> <span className="o">%</span> <span className="mi">2</span> <span className="o">==</span> <span className="mi">0</span><span className="p">)</span> <span className="nx">calls</span><span className="p">(</span><span className="nx">i</span> <span className="o">*</span> <span className="mi">3</span><span className="p">)</span>
				<span className="p">&#125;</span> <span className="k">catch</span><span className="p">()</span> <span className="k">return</span> <span className="nx">i</span> <span className="o">-</span> <span className="mi">1</span>
				<span className="k">return</span> <span className="nx">i</span> <span className="o">+</span> <span className="mi">1</span>
				<span className="p">&#125;</span>

				<span className="kd">let</span> <span className="nx">i</span> <span className="o">=</span> <span className="mi">0</span>
				<span className="kd">let</span> <span className="nx">result</span> <span className="o">=</span> <span className="mi">0</span>
				<span className="k">while</span> <span className="p">(</span><span className="nx">i</span> <span className="o">&lt;</span> <span className="mi">0000</span><span className="p">)</span> <span className="nx">result</span> <span className="o">+=</span> <span className="nx">catches</span><span className="p">(</span><span className="nx">i</span><span className="p">)</span>
				<span className="nx">console</span><span className="p">.</span><span className="nx">log</span><span className="p">(</span><span className="nx">result</span><span className="p">,</span> <span className="nx">i</span><span className="p">)</span>
				<span className="c1">//&#125;)()</span>
			</code></pre></div></div>

			<table>
				<thead>
					<tr>
						<th css="text-align: center">Machine</th>
						<th css="text-align: center">Target</th>
						<th css="text-align: center">Iterations</th>
						<th css="text-align: center">Time</th>
						<th css="text-align: center">Comparison</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td css="text-align: center">Desktop</td>
						<td css="text-align: center">JavaScript</td>
						<td css="text-align: center">1000</td>
						<td css="text-align: center">1000ms</td>
						<td css="text-align: center">1.0</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}
