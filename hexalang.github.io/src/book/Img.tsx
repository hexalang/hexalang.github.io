import { FC } from "react"

interface Props {
	src: string
	alt: string
	width?: number
}

export const Img: FC<Props> = ({ src, alt, width }) => {
	return (
		<p style={{ textAlign: "center" }}>
			<img src={src} alt={alt} title={alt} width={width} height={width} />
		</p>
	)
}
