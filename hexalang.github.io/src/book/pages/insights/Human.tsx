import { Img } from "book/Img"
import picture from '../images/stuffs.jpg'

export const Article = () => {
	return (
		<>
			<Img src={picture} style={{ borderRadius: '100%' }} alt="We are not computers. Not even you." width={256} />
			<p>
				Surprisingly, many people don't realize that they are humans.
				Hexa assumes not only GPT bots write the code.
				We should take into account vision limitations, comprehension, language
				capabilities, mental issues, exhaustion, sickness, etc.
			</p>
			<p>
				Aim of Hexa is to make the programming achievable even in
				unfortunate circumstances.
				All ideas were carefully evaluated in practice.
			</p>

		</>
	)
}
