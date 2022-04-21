import { Code } from "book/Code"

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

			<Code code={`//(()=>{ "use strict"
fun throws(i) {
 if (i % 2 == 0) throw 123
}

fun calls(i) {
 if (i % 2 == 0) throws(i * 3)
}

fun catches(i) {
 try {
   if (i % 2 == 0) calls(i * 3)
 } catch() return i - 1
 return i + 1
}

let i = 0
let result = 0
while (i < 0000) result += catches(i)
console.log(result, i)
//})()`} />

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
