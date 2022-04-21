import styled from 'styled-components'

export const StyledTry = styled.div`
	* {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		padding: 0px;
		margin: 0px;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
		box-sizing: border-box;
	}

	body {
		position: absolute;
		background-color: gainsboro;
		display: flex;
		min-height: 100%;
		min-width: 100%;
		padding: 0px;
		/* padding: 10px; */
	}

	.page {
		display: flex;
		flex-flow: column;
		background-color: white;
		min-height: 100vh;
		min-width: 100%;
	}

	a {
		color: black;
		text-decoration: none !important;
	}

	.nav a {
		user-select: none;
		cursor: default;
		-webkit-user-select: none;
	}

	.editor {
		outline: none;
	}

	.code,
	.code *,
	.code div {
		font-family: Menlo, Roboto Mono, Consolas, Courier New, monospace;
		overflow: clip;
		width: 100%;
		height: 100%;
		color: black;
		font-weight: normal;
		background-color: unset;
		font-size: 16px;
		font-style: normal;
		border: 0;
		box-shadow: unset;
		border-radius: unset;
	}

	.code i {
		color: gray;
		font-family: Menlo, Roboto Mono, Courier New, monospace;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		flex: 1 1 auto;
	}

	.flex-column {
		display: flex;
		flex-direction: column;
	}

	.col-1 {
		width: 25%;
	}

	.col-2 {
		width: 50%;
	}

	.col-3 {
		width: 75%;
	}

	.col-4 {
		width: 100%;
	}

	@media screen and (max-width: 800px) {
		.col-sm-1 {
			width: 25%;
		}
		.col-sm-2 {
			width: 50%;
		}
		.col-sm-3 {
			width: 75%;
		}
		.col-sm-4 {
			width: 100%;
		}
	}

	.pad {
		padding: 10px;
	}

	.pad-2 {
		padding: 20px;
	}

	.margin {
		margin: 10px;
	}

	.fullheight {
		height: 100%;
	}

	.flex-fullheight {
		flex-grow: 1;
	}
	.shadow {
		box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
		border-radius: 2px;
	}

	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center
	}

	.flex-row {
		display: flex;
		flex-direction: row;
	}

	.flex-end {
		justify-content: flex-end;
	}

	.flex-auto {
		flex: 1 0 auto;
	}

	button:focus {
		outline: none !important;
	}

	.btn {
		cursor: pointer;
		border-radius: 2px;
		border: 0;
		padding: 5px 10px;
		user-select: none;
		transition: .2s ease-out;
		color: #000;
		margin: 6px;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
	}

	.btn:hover {
		box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.18), 0 2px 7px 0 rgba(0, 0, 0, 0.15);
	}

	.btn:active,
	.btn:focus,
	.btn.active {
		outline: 0;
	}

	.btn-black {
		color: #fff !important;
		background-color: #000 !important;
	}

	.btn-blue {
		color: #fff !important;
		background-color: rgb(41, 156, 228) !important;
	}

	.btn-red {
		color: #fff !important;
		background-color: rgb(253, 61, 36) !important;
	}

	.nav {
		display: flex;
		border-bottom: 1px solid gainsboro;
	}

	.nav>* {
		padding: 5px 10px;
		margin-bottom: -1px;
	}

	.nav-link {
		font-size: 16px;
	}

	.nav-link:nth-child(1) {
		margin-left: 10px;
	}

	.nav>.active {
		border: 1px solid gainsboro;
		border-top: 2px solid #6cf;
		border-radius: .25rem .25rem 0 0;
		border-bottom: 1px solid white;
		background-color: white;
	}

	.tab-pane {
		display: none;
	}

	.tab-pane.active {
		display: block;
	}

	textarea {
		background-color: #fff;
		background-clip: padding-box;
		border: 1px solid #ced4da;
		border-radius: .25rem;
		width: 100%;
	}

	.output {
		background-color: #fff;
		background-clip: padding-box;
		border: 1px solid #ced4da;
		border-radius: .25rem;
		width: 100%;
	}

	.footer {
		flex: 0 1 45px;
		background-color: aliceblue;
		border-top: 2px solid #6cf;
	}

	.header {
		flex: 0 1 85px;
		display: flex;
		text-align: center;
		font-size: 110%;
		background-color: aliceblue;
		border-bottom: 2px solid #6cf;
		justify-content: center;
		align-items: center;
	}

	.ml-1 {
		margin-left: 0.5em;
	}

	.ml-2 {
		margin-left: 1em;
	}

	.input-control {
		width: 100%;
		padding: .25em .75em;
		border: 1px solid #ced4da;
		border-radius: .25rem;
	}

	.flex-center {
		display: flex;
		align-items: center;
	}
`
