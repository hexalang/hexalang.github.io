import styled from 'styled-components'
import { FC } from "react"

interface Props {
	doc?: boolean
	tested?: boolean
	done?: boolean
}

const StyledList = styled.ul`
	& li::marker {
		content: '  ';
		font-size: 15px;
		color: limegreen;
		line-height: 1.0;
	}

	& li.done::marker {
		content: '✔  ';
	}
`

export const FeatureState: FC<Props> = ({ doc, tested, done }) => {
	return (
		<StyledList>
			<br />
			<li className={done ? 'done' : ''}><b>Feature:</b>&nbsp;{done ? 'done' : 'in progress'}</li>
			<li className={doc ? 'done' : ''}><b>Documentation:</b>&nbsp;{doc ? 'done' : 'in progress'}</li>
			<li className={tested ? 'done' : ''}><b>Tests:</b>&nbsp;{tested ? 'done' : 'in progress'}</li>
		</StyledList>
	)
}
