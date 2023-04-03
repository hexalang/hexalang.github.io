import { Footer } from 'home/Footer'
import { StyledTry } from './StyledTry'
import { useEffect } from 'react'
import { Header } from 'home/Header'

export const Try = () => {
	useEffect(() => {
		document.title = 'Try Hexa Online'
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
					<div className="tab-content full-height">
						<div className="tab-pane active pad full-height" id="source">
							<div id="editor" className="pad code editor input-control full-height" contentEditable="true">var names = ['Joffrey', 'Tyrion', 'Sansa']<br />console.log('Hello ' + names.join(", ") + '!')</div>
						</div>
						<div className="tab-pane pad-2" id="options">
							<div className="flex-row">
								<div className="col-1 flex-center">
									Target:
								</div>
								<div className="col-4">
									<select className="input-control">
										<option value="js">JavaScript</option>
										<option value="c">C/C++</option>
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
					<div className="tab-content full-height">
						<div className="tab-pane active pad full-height flex-column" id="run">
							<div className="output full-height" id="runner-wrapper">
								{false && 'about=_black noopener etc, disallow cookie access'}
								<iframe title="runner" className="runner" src="/run.html?r=0.6468282873069537#soon" name="runner" scrolling="no" css="height: 100%;" frameBorder="no"></iframe>
							</div>
						</div>
						<div className="tab-pane pad full-height flex-column" id="code">
							<div className="output full-height">
								<div className="code">Generated compiler code will be here</div>
							</div>
						</div>
						<div className="tab-pane pad full-height flex-column" id="log">
							<div className="output full-height">
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
