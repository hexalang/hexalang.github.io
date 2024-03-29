import styled from 'styled-components'

export const StyledHome = styled.div`
background-color: rgb(255, 255, 255);
display: flex;
flex-direction: column;
min-height: 100vh;

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
}

.hidden {
	display: none !important;
}

overflow-x: hidden;
width: 100%;
background-color: #283a3c;
background-image: url(/bg.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: center;

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
	padding: 10px;
}

.page, #root {
	display: flex;
	flex-flow: column;
	background-color: white;
	min-height: 100%;
	min-width: 100%;
}

.wip-label {
	background: red;
	position: fixed;
	width: 150%;
	top: 90px;
	text-align: center;
	left: -25%;
	font-size: 18px;
	color: white;
	padding: 2px 0px 4px 0px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	transform: rotate(5deg);
}

a {
	color: black;
	text-decoration: none !important;
}

.editor {
	outline: none;
}

.code,
.code div {
	font-family: Menlo, Roboto Mono, Consolas, Courier New, monospace;
	overflow: clip;
	width: 100%;
	height: 100%;
	color: black;
}

.code i {
	color: gray !important;
	font-style: italic !important;
}

.code, .code * {
	font-family: Menlo, Roboto Mono, Consolas, Courier New, monospace !important;
	font-weight: normal !important;
	color: black !important;
	background-color: unset !important;
	font-size: 16px !important;
	font-style: normal !important;
	border: 0 !important;
	box-shadow: unset !important;
	border-radius: unset !important;
	height: auto !important;
}

.code img {
	display: none !important;
}

.output {}

.footer {
	flex: 0 1 45px;
	background: #6cf;
	justify-content: center;
	background-color: rgba(100, 100, 100, 0.2);
	backdrop-filter: blur(10px);
	background-image: url(/acryl.png);
	background-repeat: repeat;
}

.navbarHeaderBlur {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	background-color: rgba(100, 100, 100, 0.2);
	backdrop-filter: blur(10px);
	height: 50px;
	pointer-events: none;
	background-image: url(/acryl.png);
	background-repeat: repeat;

	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-bottom-color: rgba(100, 100, 100, 0.2);
}

.header {
	text-align: center;
	font-size: 110%;
	flex: 0 1 auto;
}

.container {
	display: flex;
	flex-wrap: wrap;
	flex: 1 1 auto;
}

.pad {
	padding: 10px;
}

.margin {
	margin: 10px;
}

.full-height {
	height: 100%;
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

.flex-column {
	display: flex;
	flex-direction: column;
}

.flex-row {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
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
	/* margin: 6px; */
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
	/* background-color: #4AB3F4; */
	background-color: rgb(41, 156, 228) !important;
}

.btn-red {
	color: #fff !important;
	/* background-color: #4AB3F4; */
	background-color: rgb(253, 61, 36) !important;
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
}

.donate-card-container {}

.donate-section-header {
	font-size: 24px;
	padding-bottom: 20px;
	border-bottom: 1px solid #e5e5e5;
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.donate-card {
	margin: 15px;
}

.donate-qr {
	padding: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.qr-code {
	width: 200px;
	height: 200px;
}

.donate-body {
	display: flex;
	flex-direction: row;
}

.donate-wallet-name {
	font-size: 22px;
	margin-bottom: 10px;
	/* display: flex;
			flex-direction: row;
			justify-content: center; */
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
}

@media screen and (max-width: 800px) {

	.donate-body {
		flex-direction: column;
	}

	.donate-description {
		padding: 15px 30px;
		border-top: 1px solid #e5e5e5;
		display: flex;
		flex-direction: column;
	}
}

.donate-wallet {
	word-break: break-all;
	margin-bottom: 5px;
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

.col-1 {
	width: 50%;
}

.col-2 {
	width: 100%;
}

@media screen and (max-width: 800px) {
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

@media (min-width: 800px) {
	.mobile {
		display: none;
	}
}
`
