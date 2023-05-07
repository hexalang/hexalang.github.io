import { CompilerUrl } from "book/JustUrl"
import { H2 } from "book/H2"

export const Article = () => {
	return (
		<>
			<p>
				Typer iterates over syntax nodes and fills type information, module by module.
				This information assigned onto the nodes, no extra "typed syntax tree"
				created.
			</p>
			<p>
				State is contained within Typer class instance.
				Some parts of the state is pushed and pop-ed in a stack like manner.
			</p>
			<p>
				Type evaluation and inference will be changed over time.
				Current implementation has some issues with generic templates and non-linear
				dependencies within classes.
			</p>
			<p>
				Note that Hexa explicitly allows non-linear and recursive dependencies between
				classes and modules.
				This works just fine most of the time,
				the only problem is that current implementation simply lacking and partly undecided.
				Fixing requires more than a full day of coding and testing, thus it's postponed until
				workarounds will stop being... sane?
			</p>

			<H2>Where to look</H2>

			<ul>
				<li><CompilerUrl>source\compiler\typer.hexa</CompilerUrl></li>
				<li><CompilerUrl>source\data\types.hexa</CompilerUrl></li>
				<li><CompilerUrl>source\data\nodeType.hexa</CompilerUrl></li>
			</ul>
		</>
	)
}
