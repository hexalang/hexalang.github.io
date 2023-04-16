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

export const Img: FC<Props> = ({ src, alt, width, style }) => {
	return (
		<StyledImg style={pStyle} title={alt}>
			<img style={{ ...imgStyle, ...style }} src={src} alt={alt} width={width} height={width} />
		</StyledImg>
	)
}
