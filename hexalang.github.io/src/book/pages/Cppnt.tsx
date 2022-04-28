import { H2 } from "book/H2"
import { H3 } from "book/H3"
import { Img } from "book/Img"

export const Article = () => {
	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
				<video id="background-video" autoPlay loop muted poster="/pawah.jpg" style={{ pointerEvents: 'none', borderRadius: '100%', width: '192px', height: '192px' }}>
					<source src="/pawah.mp4" type="video/mp4" />
					<source src="/pawah.webm" type="video/webm" />
				</video>
			</div>
			<p>This article assumes that Hexa is undoubtedly better than C++. Unfortunately, we still have to reuse C++ codebases, so let's learn how to do it.</p>
			<H2 id="fromhexa">Use C++ from Hexa</H2>
			<H3 id="icom">COM Interfaces</H3>
			<H3 id="templates">Generic Templates</H3>
			<H3 id="idll">DLL Import</H3>
			<H3 id="icode">Include as Code</H3>
			<H2 id="fromc">Use Hexa from C++</H2>
			<H3 id="ccom">COM Classes</H3>
			<H3 id="edll">DLL Export</H3>
			<H3 id="ecode">Export as Code</H3>
			<H3 id="generics">Instantiate Generics</H3>
		</>
	)
}
