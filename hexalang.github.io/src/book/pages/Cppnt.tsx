import { H2 } from "book/H2"
import { H3 } from "book/H3"
import { Img } from "book/Img"

export const Article = () => {
	return (
		<>
			<div title="Have confidence!" style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
				<video id="background-video" autoPlay loop muted poster="/pawah.jpg" style={{ pointerEvents: 'none', borderRadius: '100%', width: '192px', height: '192px' }}>
					<source src="/pawah.mp4" type="video/mp4" />
					<source src="/pawah.webm" type="video/webm" />
				</video>
			</div>
			<p>
				Hexa aims to offer superior interop with C++.
				Unfortunately, we still have to reuse C++ codebases, so let's learn how to do it.
				This article is also applicable to C and other native libraries.
			</p>
			<p>
				C++ code generation is built into C target's generator.
				You don't need to switch targets to use C++ features.
				In case of any issues, feel free to provide a reproducible example in our bug tracker.
			</p>
			<H2>Use C++ from Hexa</H2>
			<H3>Basic data structures</H3>
			<H3>COM Interfaces</H3>
			<H3>Generic Templates</H3>
			<H3>DLL Import</H3>
			<H3>Stable ABI</H3>
			<H3>Include as Code</H3>
			<H2>Use Hexa from C++</H2>
			<H3>COM Classes</H3>
			<H3>DLL Export</H3>
			<H3>Export as Code</H3>
			<H3>Instantiate Generics</H3>
		</>
	)
}
