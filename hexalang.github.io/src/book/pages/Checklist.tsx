export const Article = () => {
	return (
		<>
			<p>This list follows common
				{' '}
				<a href="https://www.reddit.com/r/ProgrammingLanguages/comments/7mcsx3/programming_language_checklist/">“Programming Language Checklist”</a>
				{' '}
				structure, to give approximate view on Hexa! <img className="emoji" title=":roll_eyes:" alt=":roll_eyes:" src="https://github.githubassets.com/images/icons/emoji/unicode/1f644.png" height="20" width="20" /></p>

			<p>Consider with a bit of humor <img className="emoji" title=":smile:" alt=":smile:" src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png" height="20" width="20" /></p>

			<div className="language-md highlighter-rouge"><div className="highlight"><pre className="highlight"><code>{`Programming Language Checklist
by Colin McMillen, Jason Reed, and Elly Jones.

You appear to be advocating a new:
[x] functional  [x] imperative  [x] object-oriented  [x] procedural [ ] stack-based
[x] "multi-paradigm"  [ ] lazy  [x] eager  [x] statically-typed  [ ] dynamically-typed
[ ] pure  [x] impure  [ ] non-hygienic  [ ] visual  [x] beginner-friendly
[ ] non-programmer-friendly  [ ] completely incomprehensible
programming language.  Your language will not work.  Here is why it will not work.

You appear to believe that:
[x] Syntax is what makes programming difficult
[ ] Garbage collection is free                [ ] Computers have infinite memory
[ ] Nobody really needs:
[ ] concurrency  [ ] a REPL  [ ] debugger support  [ ] IDE support  [ ] I/O
[ ] to interact with code not written in your language
[x] The entire world speaks 7-bit ASCII
[ ] Scaling up to large software projects will be easy
[ ] Convincing programmers to adopt a new language will be easy
[ ] Convincing programmers to adopt a language-specific IDE will be easy
[ ] Programmers love writing lots of boilerplate
[ ] Specifying behaviors as "undefined" means that programmers won't rely on them
[ ] "Spooky action at a distance" makes programming more fun

Fortunately, your language has:
[x] comprehensible syntax  [ ] semicolons  [ ] significant whitespace  [ ] macros
[x] implicit type conversion  [x] explicit casting  [x] type inference
[ ] goto  [x] exceptions  [x] closures  [x] tail recursion  [ ] coroutines
[x] reflection  [ ] subtyping  [ ] multiple inheritance  [x] operator overloading
[x] algebraic datatypes  [x] recursive types  [x] polymorphic types
[ ] covariant array typing  [ ] monads  [x] dependent types
[x] infix operators  [x] nested comments  [x] multi-line strings  [x] regexes
[x] call-by-value  [ ] call-by-name  [x] call-by-reference  [ ] call-cc

The following philosophical objections apply:
[x] Programmers should not need to understand category theory to write "Hello, World!"
[x] Programmers should not develop RSI from writing "Hello, World!"
[x] The most significant program written in your language is its own compiler
[ ] The most significant program written in your language isn't even its own compiler
[ ] No language spec
[x] "The implementation is the spec"
[ ] The implementation is closed-source  [ ] covered by patents  [ ] not owned by you
[ ] Your type system is unsound  [ ] Your language cannot be unambiguously parsed
[ ] a proof of same is attached
[ ] invoking this proof crashes the compiler
[ ] The name of your language makes it impossible to find on Google
[x] Interpreted languages will never be as fast as C
[ ] Compiled languages will never be "extensible"
[ ] Writing a compiler that understands English is AI-complete
[ ] Your language relies on an optimization which has never been shown possible
[ ] There are less than 100 programmers on Earth smart enough to use your language
[x] ___Coding in C++___ takes exponential time
[ ] ____________________________ is known to be undecidable

Your implementation has the following flaws:
[ ] CPUs do not work that way
[ ] RAM does not work that way
[ ] VMs do not work that way
[ ] Compilers do not work that way
[ ] Compilers cannot work that way
[ ] Shift-reduce conflicts in parsing seem to be resolved using rand()
[ ] You require the compiler to be present at runtime
[x] You require the language runtime to be present at compile-time
[ ] Your compiler errors are completely inscrutable
[ ] Dangerous behavior is only a warning
[ ] The compiler crashes if you look at it funny
[ ] The VM crashes if you look at it funny
[ ] You don't seem to understand basic optimization techniques
[ ] You don't seem to understand basic systems programming
[ ] You don't seem to understand pointers
[ ] You don't seem to understand functions

Additionally, your marketing has the following problems:
[ ] Unsupported claims of increased productivity
[ ] Unsupported claims of greater "ease of use"
[ ] Obviously rigged benchmarks
[ ] Graphics, simulation, or crypto benchmarks where your code just calls
handwritten assembly through your FFI
[ ] String-processing benchmarks where you just call PCRE
[ ] Matrix-math benchmarks where you just call BLAS
[x] Noone really believes that your language is faster than:
[x] assembly  [x] C  [x] FORTRAN  [ ] Java  [ ] Ruby  [ ] Prolog
[ ] Rejection of orthodox programming-language theory without justification
[ ] Rejection of orthodox systems programming without justification
[ ] Rejection of orthodox algorithmic theory without justification
[ ] Rejection of basic computer science without justification

Taking the wider ecosystem into account, I would like to note that:
[x] Your complex sample code would be one line in: ___JavaScript___
[x] We already have an unsafe imperative language
[ ] We already have a safe imperative OO language
[ ] We already have a safe statically-typed eager functional language
[ ] You have reinvented Lisp but worse
[ ] You have reinvented Javascript but worse
[ ] You have reinvented Java but worse
[ ] You have reinvented C++ but worse
[ ] You have reinvented PHP but worse
[ ] You have reinvented PHP better, but that's still no justification
[ ] You have reinvented Brainfuck but non-ironically

In conclusion, this is what I think of you:
[ ] You have some interesting ideas, but this won't fly.
[ ] This is a bad language, and you should feel bad for inventing it.
[x] Programming in this language is an adequate punishment for inventing it.`}
			</code></pre></div></div>
		</>
	)
}
