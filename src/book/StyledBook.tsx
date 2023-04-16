import styled from 'styled-components'

const headerHeight = `50px`
const stickyTop = `42px`

export const StyledBook = styled.div`
// Avoid weird trail on sidebar animation
background-color: var(--color-bg);
width: 100vw;
height: 100vh;

/* Code */

code, code * {
	font-size: 17px !important;
	font-family: "SF Mono", "Consolas", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace !important;
	color: var(--code-color);
}

.highlighter-rouge {
	background-color: #f6f8fa;
	margin: 0 1em 1em;
}

p code.highlighter-rouge, li code.highlighter-rouge {
	margin: auto;
}

.article>.highlighter-rouge {
	padding: 0.4em;
	margin: 0 1em 1em;
}

/* Markdown */

li ul li {
	margin-top: 1em !important;
}

/* Sidebar */

.sidebar-toggle .red {
	background-color: rgb(250, 96, 74);
}

.sidebar-toggle span {
	background-color: rgb(0, 173, 239);
}

.sidebar ul li {
	padding: 2px 0 4px 15px;
	margin: 0;
}

.sidebar ul li a {
	transition: color .2s ease-in-out;
}

/* Emoji haXe logo */

img[src*="favicon"] {
	margin-right: 4px;
}

/*
 * GitHub style for Pygments
 * Courtesy of GitHub.com
 */
.hll {
	background-color: #f8f8f8;
	border: 1px solid #ccc;
	padding: 6px 10px;
	border-radius: 3px;
}

.c {
	color: #999988;
	font-style: italic;
}

.err {
	color: #a61717;
	background-color: #e3d2d2;
	border-radius: 3px;
}

.k {
	font-weight: normal;
}

.o {
	font-weight: normal;
}

.cm {
	color: #999988;
	font-style: italic;
}

.cp {
	color: #999999;
	font-weight: normal;
}

.c1 {
	color: #999988;
	font-style: italic;
}

.cs {
	color: #999999;
	font-weight: normal;
	font-style: italic;
}

.gd {
	color: #000000;
	background-color: #ffdddd;
}

.gd .x {
	color: #000000;
	background-color: #ffaaaa;
}

.ge {
	font-style: italic;
}

.gr {
	color: #aa0000;
}

.gh {
	color: #999999;
}

.gi {
	color: #000000;
	background-color: #ddffdd;
}

.gi .x {
	color: #000000;
	background-color: #aaffaa;
}

.go {
	color: #888888;
}

.gp {
	color: #555555;
}

.gs {
	font-weight: normal;
}

.gu {
	color: #800080;
	font-weight: normal;
}

.gt {
	color: #aa0000;
}

.kc {
	font-weight: normal;
	color: #005cc5;
}

.kd {
	font-weight: normal;
}

.kn {
	font-weight: normal;
}

.kp {
	font-weight: normal;
}

.kr {
	font-weight: normal;
	color: #d73a49;
}

.kt {
	color: #445588;
	font-weight: normal;
}

.m {
	color: #009999;
}

.s {
	color: #dd1144;
}

.n {
	color: #333333;
}

.na {
	color: teal;
}

.nb {
	color: #0086b3;
}

.nc {
	color: #445588;
	font-weight: normal;
}

.no {
	color: teal;
}

.ni {
	color: purple;
}

.ne {
	color: #990000;
	font-weight: normal;
}

.nf {
	color: #990000;
	font-weight: normal;
}

.nn {
	color: #555555;
}

.nt {
	color: navy;
}

.nv {
	color: teal;
}

.ow {
	font-weight: normal;
}

.w {
	color: #bbbbbb;
}

.mf {
	color: #009999;
}

.mh {
	color: #009999;
}

.mi {
	color: #009999;
}

.mo {
	color: #009999;
}

.sb {
	color: #dd1144;
}

.sc {
	color: #dd1144;
}

.sd {
	color: #dd1144;
}

.s2 {
	color: #dd1144;
}

.se {
	color: #dd1144;
}

.sh {
	color: #dd1144;
}

.si {
	color: #dd1144;
}

.sx {
	color: #dd1144;
}

.sr {
	color: #009926;
}

.s1 {
	color: #dd1144;
}

.ss {
	color: #990073;
}

.bp {
	color: #999999;
}

.vc {
	color: teal;
}

.vg {
	color: teal;
}

.vi {
	color: teal;
}

.il {
	color: #009999;
}

.gc {
	color: #999;
	background-color: #EAF2F5;
}

.inlineCode:hover {
	text-decoration: underline;
	text-decoration-color: lightgray;
	text-decoration-thickness: 1px;
	cursor: pointer;
}

.inlineCode {
	background-color: #8b8b8b14;
	border-radius: 3px;
	padding-bottom: 2px;
	padding-left: 2px;
    padding-right: 2px;
}

.emoji {
	height: 20px;
	width: 20px;
	vertical-align: -2px;
}

/*!
 * GitHub Light v0.5.0
 * Copyright (c) 2012 - 2017 GitHub, Inc.
 * Licensed under MIT (https://github.com/primer/github-syntax-theme-generator/blob/master/LICENSE)
 * https://raw.githubusercontent.com/primer/github-syntax-light/master/lib/github-light.css
 */

.c
	{
	color: #6a737d;
}

.nx {
	color: var(--code-nx);
}

.c1
,
.s .v
	{
	color: #005cc5;
}

.c1, .cm {
	color: #6a737d;
}

.e
,
.en
	{
	color: #6f42c1;
	color: #d2a8ff;
}

.smi
,
.s .s1
	{
	color: #24292e;
}

.ent
	{
	color: #22863a;
}

.o,
.kd,
.k
	{
	color: #d73a49;
}

.s
,
.pds
,
.s .pse .s1
,
.sr
,
.sr .cce
,
.sr .sre
,
.sr .sra
	{
	color: #032f62;
}

.v
,
.smw
	{
	color: #e36209;
}

.bu
	{
	color: #b31d28;
}

.ii
	{
	color: #fafbfc;
	background-color: #b31d28;
}

.c2
	{
	color: #fafbfc;
	background-color: #d73a49;
}

.c2::before
	{
	content: "^M";
}

.sr .cce
	{
	font-weight: normal;
	color: #22863a;
}

.ml
	{
	color: #735c0f;
}

.mh
,
.mh .en
,
.ms
	{
	font-weight: normal;
	color: #005cc5;
}

.mi
	{
	font-style: normal;
	/* color: #24292e; */
}

.mb
	{
	font-weight: normal;
	color: #24292e;
}

.md
	{
	color: #b31d28;
	background-color: #ffeef0;
}

.mi1
	{
	color: #22863a;
	background-color: #f0fff4;
}

.mc
	{
	color: #e36209;
	background-color: #ffebda;
}

.mi2
	{
	color: #f6f8fa;
	background-color: #005cc5;
}

.mdr
	{
	font-weight: normal;
	color: #6f42c1;
}

.ba
	{
	color: #586069;
}

.sg
	{
	color: #959da5;
}

.corl
	{
	text-decoration: underline;
	color: #032f62;
}

* {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	padding: 0px;
	margin: 0px;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
	box-sizing: border-box;
	transition: color .95s ease;
	transition: background-color .95s ease;
}

transition: background-color .95s ease;
// Light
--color-bg: #ffffff;
--color-text: #000000;
--code-color: darkgray;
--code-nx: #005cc5;

@media screen and (prefers-color-scheme: dark) {
	// Dark
	--color-bg: #333333;
	--color-text: #ffffff;
	--code-color: lightgray;
	--code-nx: #4b83c3;

	&[data-theme="invert"] {
		// Light
		--color-bg: #ffffff;
		--color-text: #000000;
		--code-color: darkgray;
		--code-nx: #005cc5;
	}
}

@media screen and (prefers-color-scheme: light) {
	// Light
	--color-bg: #ffffff;
	--color-text: #000000;
	--code-color: darkgray;
	--code-nx: #005cc5;

	// Dark
	&[data-theme="invert"] {
		--color-bg: #333333;
		--color-text: #ffffff;
		--code-color: lightgray;
		--code-nx: #4b83c3;
	}
}

body, #root, .page, .sidebar {
	color: var(--color-text);
	min-width: unset;
	display: unset;

	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		background-color: darkgrey;
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
		border-radius: 5px;
	}
}

code {
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}

	::-webkit-scrollbar-track {
		background-color: darkgrey;
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
		border-radius: 5px;
	}
}

html,
body {
	height: 100%;
}

body {
	padding: 0;
	margin: 0;
	font-size: 20px;
}

a {
	color: var(--color-text);
	transition: color .2s ease-in-out;
	text-decoration: none;
}

a:hover {
	color: rgb(0, 174, 239);
}

.highlighter-rouge {
	background-color: rgba(27, 31, 35, 0.05);
	border-radius: 3px;
	padding: 0.05em 0.15em;
	margin: 0;
}

/* This hack applies to code as modifier to the attached font (instead of replacing it) */
code {
	font-family: monospace !important;
	overflow-x: auto;
}

div pre.highlight {
	overflow-x: auto;
}

div pre.highlight > code {
	display: block;
	white-space: pre;
}

div pre.highlight code > span {
}

.date {
	color: #a0a0a0;
}

h1,
h2 {
	padding: 0;
	margin: 0;
	position: sticky;
	top: ${stickyTop};
	background-color: var(--color-bg);
	font-size: 40px;
	text-align: center;
	height: 54px; // Sticky
}

h3 {
	font-size: 25px;
	text-align: center;
	position: sticky;
	top: ${stickyTop};
	background-color: var(--color-bg);
	height: 54px; // Sticky
}

img {
	max-width: 100%;
	height: auto;
}

div.container,
div.small-container {
	margin: 0 auto;
	padding: 0 20px;
}

div.container {
	max-width: 940px;
}

div.small-container {
	max-width: 700px;
}

header,
footer {
	background: #1D1D1D;
	color: #ffffff;
}

header a,
footer a {
	text-decoration: none;
	color: #ffffff;
}

header,
footer {
	padding: 5px 0;
}

li a strong {
	font-weight: normal;
	color: rgb(0, 174, 239);
}

nav.main-nav ul {
	margin: 0;
	padding: 0;
	list-style: none;
	float: right;
}

nav.main-nav li,
nav.main-nav a {
	display: inline-block;
}

nav.main-nav li a {
	padding: 0 10px;
}

.center-text {
	text-align: center;
}

.markdown h2, .markdown h1 {
	margin-top: 0px;
    margin-bottom: 0.45em;

	@media screen and (max-width: 800px) {
		display: flex;
		font-size: 20px;
		justify-content: center;
		align-items: center;
	}
}

.markdown h3 {
	margin-top: 0px;
    margin-bottom: 0.5em;

	@media screen and (max-width: 800px) {
		font-size: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

.markdown p {
	text-align: justify;
	a {
		text-decoration: underline;
	}
}

.markdown td a {
	text-decoration: underline;
}

.markdown p[align="center"] {
	text-align: center;
}

.markdown p,
.markdown li {
	margin: 0 1em 1em;
	word-wrap: break-word;
	a {
		text-decoration: underline;
	}
}

.markdown ul {
	margin-left: 1em;
}

.markdown blockquote {
	::before {
		border-radius: 4px;
		display: block;
		width: 0.2em;
		background-color: gainsboro;
		height: 100%;
		content: '.';
		position: absolute;
		color: transparent;
	}
	position: relative;
	margin-left: 1em;
	color: grey;
}

.markdown {
	font-size: 18px;
}

.markdown .date {
	float: right;
}

.content {
	display: block;
	position: relative;
	width: 100vw;
	height: 100%;
	z-index: 0;
}

.sidebar {
	border-right: 1px solid rgba(139, 216, 255, 0.2);
	overflow-y: auto;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	width: 250px;
	transition: transform .25s ease-out;
	font-size: 20px;
}

.sidebar ul li {
	list-style: none;
	margin: 6px 0 6px 15px;
}

.sidebar ul li a {
	font-size: 18px
}

.sidebar-toggle {
	background-color: transparent;
	border: 0;
	outline: none;
	padding: 10px;
	position: absolute;
	bottom: 0;
	left: 250px;
	text-align: center;
	z-index: 4;
	transition: opacity .3s;
	cursor: pointer;
	transition: transform .25s ease-out;
}

.sidebar-toggle span {
	background-color: rgb(4, 203, 230);
	transition: opacity .3s;
	display: block;
	margin-bottom: 4px;
	width: 20px;
	height: 3px;
	border-radius: 2px;
}

.sidebar-toggle:hover {
	opacity: .4;
}

.dark-toggle {
	outline: none;
	padding: 10px;
	position: absolute;
	left: 250px;
	text-align: center;
	transition: opacity .3s;
	z-index: 4;
	bottom: 40px;
	cursor: pointer;
	transition: transform .25s ease-out;
}

.dark-toggle span {
	transition: opacity .3s;
	display: block;
	width: 16px;
	height: 16px;
	position: relative;
	border-radius: 4px;
}

.dark-toggle span.dark {
	background-color: rgb(104, 104, 104);
	top: 4px;
	left: 0;
}

.dark-toggle span.light {
	background-color: rgb(206, 206, 206);
	top: -16px;
	left: 4px;
}

.dark-toggle:hover {
	opacity: .4;
}

.sidebar * {
	text-decoration: none;
}

&.sidebar-hidden .sidebar,
&.sidebar-hidden .dark-toggle,
&.sidebar-hidden .sidebar-toggle {
	transform: translateX(-250px);
}

.page {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 250px;
	transition: left .25s ease;
	overflow-y: scroll;
	text-rendering: optimizeLegibility;
	text-decoration-skip-ink: auto;
}

&.sidebar-hidden .page {
	left: 0;
}

.header {
	top: 0;
	right: 0;
	left: 0;
	height: ${headerHeight};
	display: flex;
	flex-wrap: wrap;
	position: fixed;
	z-index: 1;
	background-color: var(--color-bg);
}

.header .header-spacer {
	flex: 1;
}

.header .header-button {
	font-size: 18px;
	padding: 10px 15px;
	text-decoration: none;

	@media screen and (max-width: 800px) {
		& {
			padding: 10px 10px;
			// TODO yeah I could just flex evenly here...
		}
	}
}

.article {
	margin: 0 auto;
	padding: 40px 15px;
	max-width: 800px;
}

.hide {
	display: none;
}

#article-navigation {
	position: sticky;
	float: right;
	top: 50px;
	width: 226px;
	text-align: right;
	right: 16px;
	font-size: 18px;
	background-color: var(--color-bg);
	padding-bottom: 4px;
	z-index: 1;
	display: flex;
	flex-direction: column;

	::before {
		border-radius: 4px;
		display: block;
		width: 0.2em;
		background-color: rgba(0,0,0,0.5);
		height: 100%;
		content: '.';
		position: absolute;
		color: transparent;
	}

	a {
		position: relative;
		align-self: self-end;
		text-decoration: none;
		transition: color .2s ease-in-out;
		&.flex {
			display: flex;
		}
	}
}

#article-navigation a.selected {
	color: rgb(0, 174, 239);
}

#article-navigation a {
	font-size: 0.9em;
}

@media screen and (max-width: 1270px) {
	#article-navigation {
		display: none !important;
	}
}

@media screen and (max-width: 600px) {
	.hide-sm {
		display: none !important;
	}
}

@media screen and (max-width: 370px) {
	.header .header-button {
		padding: 10px 8px;
	}
}

@media screen and (max-width: 768px) {
	&.sidebar-hidden .sidebar,
	&.sidebar-hidden .dark-toggle,
	&.sidebar-hidden .sidebar-toggle {
		transform: translateX(250px);
	}

	.page {
		left: 0;
		max-width: 100vw;
		transition: transform .25s ease;
	}

	&.sidebar-hidden .page {
		transform: translateX(250px);
	}

	.sidebar {
		left: -250px;
	}

	.sidebar-toggle, .dark-toggle {
		left: 0px;
	}

	.github-corner,
	.sidebar,
	.dark-toggle,
	.sidebar-toggle {
		position: fixed;
	}
}
`
