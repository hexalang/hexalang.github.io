import { Link } from 'react-router-dom'
import { Fragment, FC } from 'react'
import { pages } from './pages'

const strong = (text: string, strong: boolean) => strong ? <strong>{text}</strong> : <>{text}</>

interface Props {
	currentRoute: string
	toggleSidebar: () => void
	toggleTheme: () => void
	scrollTo: (hash: string) => void
}

const CategoryDivider = ({ name }: { name: string }) => {
	return <div css={`display: flex;
    align-items: center;`}>
		<span css={`
    font-size: 14px;
    margin-left: 16px;
    margin-right: 16px;
    color: #b6bebf;
    font-weight: 500;
    user-select: none;
    cursor: default;
`}>{name}</span><div css={`margin-top: 4px; flex-grow: 1; height: 1px; border-top: 1px solid rgba(139, 216, 255, 0.2);`}></div>
	</div>
}

const categories = ['Handbook', 'Inside compiler', 'Blog', 'HexaLab']

export const Sidebar: FC<Props> = ({ currentRoute, toggleSidebar, toggleTheme, scrollTo }: Props) => {
	const category = categories.slice()

	return (
		<>
			<div className="sidebar">
				<div css={`margin-block-start: 7px; padding-inline-start: 15px; margin-block-end: 4px;`}>
					<Link to="/">Hexa</Link><strong><Link to="/book">Book</Link></strong>
				</div>
				<ul>

					{
						(() => {
							return pages.map((chapter, index) => (
								<Fragment key={index}>
									{index !== 0 && <CategoryDivider name={category.shift() ?? 'Hexa'} />}
									{chapter.map(page =>
										<li key={page.route}><Link
											to={`/book/${page.route}`}
											onClick={
												() => {
													scrollTo(`#top`)
												}
											}
										>{strong(page.name, currentRoute === page.route)}</Link></li>
									)}
								</Fragment>
							))
						})()
					}

				</ul>
				<br /><br /><br />
			</div>

			<div className="sidebar-toggle" onClick={toggleSidebar}>
				<span></span>
				<span></span>
				<span className="red"></span>
			</div>

			<div className="dark-toggle" onClick={toggleTheme}><span className="dark"></span><span className="light"></span></div>
		</>
	)
}
