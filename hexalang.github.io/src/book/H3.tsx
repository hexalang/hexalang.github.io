import { FC, MouseEvent } from 'react'

interface Props {
	id: string
}

export let scrollTo: { scrollTo: (hash: string) => void } = {} as any

const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
	event.preventDefault()
	scrollTo.scrollTo(event.currentTarget.hash)
}

export const H3: FC<Props> = ({ children, id }) => {
	return <>
		<div id={id} />
		<h3 data-id={id}><a onClick={onClick} href={'#' + id}>{children}</a></h3>
	</>
}
