import { CSSProperties, FC } from "react"

interface Props {
	src: string
	alt: string
	width?: number
}

const pStyle: CSSProperties = { textAlign: "center" }
const imgStyle: CSSProperties = { borderRadius: '4px' }

export const Img: FC<Props> = ({ src, alt, width }) => {
	return (
		<p style={pStyle}>
			<img style={imgStyle} src={src} alt={alt} title={alt} width={width} height={width} />
		</p>
	)
}
