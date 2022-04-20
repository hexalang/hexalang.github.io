import { year } from 'data/links'
import { Footer } from 'home/Footer'
import { StyledTry } from './StyledTry'
import { useEffect } from 'react'
import { Header } from 'home/Header'

export const Try = () => {
	useEffect(() => {
		document.title = 'Try Hexa'
	}, [])

	return <StyledTry>

		<div className="page shadow">
			<Header compact={true} />
			<div className="header">
			</div>

			<div className="container pad">
				<div className="col-2 col-sm-4 pad flex-column">
					<div className="nav">
						<a className="nav-link active" href="#source">Source</a>
						<a className="nav-link" href="#options">Options</a>
					</div>
					<div className="tab-content fullheight">
						<div className="tab-pane active pad fullheight" id="source">
							<div id="editor" className="pad code editor input-control fullheight" contentEditable="true">var names = ['Joffrey', 'Tyrion', 'Sansa']<br />console.log('Hello ' + names.join(", ") + '!')</div>
						</div>
						<div className="tab-pane pad-2" id="options">
							<div className="flex-row">
								<div className="col-1 flex-center">
									Target:
								</div>
								<div className="col-4">
									<select className="input-control">
										<option value="js">JavaScript</option>
										<option value="c">C</option>
										<option value="haxe">Haxe</option>
									</select>
								</div>
							</div>
							<div>Note: only JavaScript target is runnable within browser</div>
						</div>
					</div>
				</div>
				<div className="col-2 col-sm-4 pad flex-column">
					<div className="nav">
						<a className="nav-link active" href="#run">Run</a>
						<a className="nav-link" href="#code">Code</a>
						<a className="nav-link" href="#log">Log</a>
					</div>
					<div className="tab-content fullheight">
						<div className="tab-pane active pad fullheight flex-column" id="run">
							<div className="output fullheight" id="runner-wrapper">
								<iframe title="runner" className="runner" src="/run.html?r=0.6468282873069537#oops" name="runner" scrolling="no" css="height: 100%;" frameBorder="no"></iframe>
							</div>
						</div>
						<div className="tab-pane pad fullheight flex-column" id="code">
							<div className="output fullheight">
								<div className="code">Generated compiler code will be here</div>
							</div>
						</div>
						<div className="tab-pane pad fullheight flex-column" id="log">
							<div className="output fullheight">
								<div className="code">Compiler output will be here</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	</StyledTry>
}
