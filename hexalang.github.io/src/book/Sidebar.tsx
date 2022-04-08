import { Link } from 'react-router-dom'
import { Fragment, useEffect, useRef, useState, FC } from 'react'
import { pages } from './pages'

const strong = (text: string, strong: boolean) => strong ? <strong>{text}</strong> : <>{text}</>

interface Props {
	currentRoute: string
	toggleSidebar: () => void
	toggleTheme: () => void
}

export const Sidebar: FC<Props> = ({ currentRoute, toggleSidebar, toggleTheme }: Props) => {
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
									{index !== 0 && <div css={`height: 1px; border-top: 1px solid rgba(139, 216, 255, 0.2);`}></div>}
									{chapter.map(page =>
										<li key={page.route}><Link
											to={`/book/${page.route}`}
											onClick={
												() => {
													const target = document.querySelector('#top')
													if (target) {
														target.scrollIntoView()
													}
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
