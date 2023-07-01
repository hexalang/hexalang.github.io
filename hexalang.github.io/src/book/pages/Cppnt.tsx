import { Code } from "book/Code"
import { H2 } from "book/H2"
import { H3 } from "book/H3"

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
			<H2>Modularity recommendations</H2>
			{false && `
			Avoid @include-ing every class or variable, instead apply them over whole bundle.
			Place per-DLL or per-header declarations into separate file like
			@namespace('boost::asio')
			@include('&lt;boost&gt;')
			this // Module-level self reference

			class A { } // Would use module-level decorators
			class B { } // Would use module-level decorators
			`}
			<H2>Use C and C++ from Hexa</H2>
			<H3>Basic data structures</H3>
			<Code code={`// Classes can behave as structures
@packed // Use packing when needed
@struct
class Demo {
	var value Int
}

var demo = malloc(sizeOf<Demo>()) as! Demo
// Note: @struct is a reference by default,
// use ByValue<T> to override that

// Arrays by value as in C with known length
let integers ArrayByValue<Int, 0> = [0]
// Zero-initialization, similar to {0} in C

// Structures by value instead of reference
let payload = new ByValue<Demo>()
let payloadRef = payload.ref // Taking reference (aka pointer)
payloadRef.value = 123

// Arrays of structures by value
let entries ArrayByValue<ByValue<Entry>, 123>

// Pointer to the array
ConstArrayPointer<UInt8>
var array ArrayPointer<UInt8> = malloc(12345) as! ArrayPointer<UInt8>
array[123] = 123
`} />
			<H3>COM Interfaces</H3>
			<H3>Generic Templates</H3>
			<H3>DLL Import</H3>
			<H3>Include as Code</H3>
			<H2>Use Hexa from C and C++</H2>
			<H3>COM Classes</H3>
			<H3>DLL Export</H3>
			<H3>Export as Code</H3>
			<H3>Instantiate Generics</H3>
			<H3>Stable ABI</H3>
		</>
	)
}
