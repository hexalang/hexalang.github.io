import { CSSProperties, FC } from "react"
import styled from 'styled-components'

interface Props {
	src: string
	alt: string
	width?: number
	style?: CSSProperties
}

const pStyle: CSSProperties = { textAlign: "center" }
const imgStyle: CSSProperties = { borderRadius: '4px' }

const StyledImg = styled.p`
	user-select: none;

	img {
		pointer-events: none;
	}

	&& {
		transition:	transform 0.1s ease-in-out;
	}

	&:hover:active {
		transform: scale(0.99);
	}
`

// TODO on click dim screen, show pic on screen center, movable zoom-able,
// also arrow keys to swipe pics if there are many (use effects to track them)
export const Img: FC<Props> = ({ src, alt, width, style }) => {
	return (
		<StyledImg style={pStyle} title={alt}>
			<img style={{ ...imgStyle, ...style }} src={src} alt={alt} width={width} height={width} />
		</StyledImg>
	)
}
