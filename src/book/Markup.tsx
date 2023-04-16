import styled from 'styled-components'
import { FC } from "react"

interface Props {
	doc?: boolean
	tested?: boolean
	done?: boolean
}

const StyledList = styled.ul`
`

export const FeatureState: FC<Props> = ({ doc, tested, done }) => {
	return (
		<StyledList>
			<br />
			<li><b>Feature:</b>&nbsp;{done ? 'done' : 'in progress'}</li>
			<li><b>Documentation:</b>&nbsp;{doc ? 'done' : 'in progress'}</li>
			<li><b>Tests:</b>&nbsp;{tested ? 'done' : 'in progress'}</li>
		</StyledList>
	)
}
