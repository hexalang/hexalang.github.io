import styled, { css } from 'styled-components'

const headerHeight = `50px`
const stickyTop = `42px`

export const StyledDonate = styled.div`
*, .page {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 100%;
	vertical-align: baseline;
	box-sizing: border-box;
}

.page {
	color: var(--color-text);
	flex-flow: column;
	background-color: white;
	min-width: 100%;
	min-height: 100%;
}

.shadow {
	box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
	border-radius: 2px;
}

div.container,
div.small-container {
	margin: 0 auto;
	padding: 0 20px;
}

div.container {
	min-width: 100vw;
}

div.small-container {
	max-width: 700px;
}

.flex-column {
	display: flex;
	flex-direction: column;
}

.flex-row {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

.pad {
	padding: 10px;
}

.donate-card {
	margin: 15px;
}

.card {
	position: relative;
	box-sizing: border-box;
	transition: box-shadow .1s ease-in-out;
	background: #fff;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.card-header {
	border-bottom: 1px solid #e5e5e5;
	padding: 15px 30px;
	font-size: 22px;
}

.card-body {
	display: flex;
	flex-direction: row;
	padding: 15px 30px;

	&.center {
		justify-content: center;
	}
}

.donate-section-header {
	font-size: 24px;
	padding-bottom: 20px;
	border-bottom: 1px solid #e5e5e5;
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.col-1 {
	width: 50%;
}

.donate-wallet {
	word-break: break-all;
	margin-bottom: 5px;
	font-size: 16px;
}

.donate-description {
	padding: 15px 30px;
	display: flex;
	flex-direction: column;
	flex: 1;
}

.donate-wallet-description {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: space-between;
	font-size: 16px;
}

.donate-wallet-name {
	font-size: 22px;
	margin-bottom: 10px;
}

.qr-code {
	width: 200px;
	height: 200px;
}

.donate-qr {
	padding: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.btn {
	cursor: pointer;
	border-radius: 2px;
	border: 0;
	padding: 5px 10px;
	user-select: none;
	transition: .2s ease-out;
	color: #000;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.btn-large {
	padding: 10px 15px;
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

.space-between {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.svg-inline {
	fill: currentColor;
	width: 1em;
	height: 1em;
	vertical-align: -12.5%;
}

.footer {
	padding-bottom: 8px;
	padding-left: 8px;
}

@media screen and (max-width: 1128px) {
	.col-sm-1 {
		width: 50%;
	}

	.col-sm-2 {
		width: 100%;
	}

	.non-mobile {
		display: none;
	}
}

@media (min-width: 1129px) {
	.mobile {
		display: none;
	}
}
`
