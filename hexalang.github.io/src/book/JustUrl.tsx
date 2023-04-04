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
	return <CoolUrl href={children + `TODO TODO TODO`} style={{ textDecoration: 'none' }}>{
		children
			.replaceAll('\\', '/')
			.split('/')
			.map(v => <span>/{v}</span>)
	}</CoolUrl>
}
