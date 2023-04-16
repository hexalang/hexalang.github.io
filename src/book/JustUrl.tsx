import styled from 'styled-components'

export const JustUrl = ({ children }: { children: string }) => {
	return <a href={children}>{children}</a>
}

const CoolUrl = styled.a`
	&:hover * {
		text-decoration: underline;
	}

	span {
		color: rgb(250,96,74)
	}

	span:nth-of-type(2) {
		color: rgb(0,174,239)
	}
`

export const CompilerUrl = ({ children }: { children: string }) => {
	const slash = children.replaceAll('\\', '/')

	return <CoolUrl href={`https://github.com/hexalang/Hexa/blob/kawaii/` + slash} style={{ textDecoration: 'none' }}>{
		slash
			.split('/')
			.map(v => <span>/{v}</span>)
	}</CoolUrl>
}
