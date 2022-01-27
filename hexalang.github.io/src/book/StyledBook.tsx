import styled, { css } from 'styled-components'

export const StyledBook = styled.div`
// Avoid weird trail on sidebar animation
background-color: var(--color-bg);
width: 100vw;
height: 100vh;

/* Code */

code, code * {
	font-size: 17px !important;
	font-family: "SF Mono", "Consolas", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace !important;
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
}

/* Markdown */

li ul li {
	margin-top: 1em !important;
}

/* Sidebar */

.sidebar-toggle :nth-child(3) {
	background-color: rgb(250, 96, 74);
}

.sidebar-toggle span {
	background-color: rgb(0, 173, 239);
}

.sidebar ul li {
	padding: 2px 0 4px 15px;
	margin: 0;
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

/*!
 * GitHub Light v0.5.0
 * Copyright (c) 2012 - 2017 GitHub, Inc.
 * Licensed under MIT (https://github.com/primer/github-syntax-theme-generator/blob/master/LICENSE)
 * https://raw.githubusercontent.com/primer/github-syntax-light/master/lib/github-light.css
 */

.c

/* comment, punctuation.definition.comment, string.comment */
	{
	color: #6a737d;
}

.nx,
.c1
/* constant, entity.name.constant, variable.other.constant, variable.language, support, meta.property-name, support.constant, support.variable, meta.module-reference, markup.raw, meta.diff.header, meta.output */
,
.s .v

/* string variable */
	{
	color: #005cc5;
}

.c1, .cm {
	color: #6a737d;
}

.e
/* entity */
,
.en

/* entity.name */
	{
	color: #6f42c1;
}

.smi
/* variable.parameter.function, storage.modifier.package, storage.modifier.import, storage.type.java, variable.other */
,
.s .s1

/* string source */
	{
	color: #24292e;
}

.ent

/* entity.name.tag, markup.quote */
	{
	color: #22863a;
}

.o,
.kd,
.k

/* keyword, storage, storage.type */
	{
	color: #d73a49;
}

.s
/* string */
,
.pds
/* punctuation.definition.string, source.regexp, string.regexp.character-class */
,
.s .pse .s1
/* string punctuation.section.embedded source */
,
.sr
/* string.regexp */
,
.sr .cce
/* string.regexp constant.character.escape */
,
.sr .sre
/* string.regexp source.ruby.embedded */
,
.sr .sra

/* string.regexp string.regexp.arbitrary-repitition */
	{
	color: #032f62;
}

.v
/* variable */
,
.smw

/* sublimelinter.mark.warning */
	{
	color: #e36209;
}

.bu

/* invalid.broken, invalid.deprecated, invalid.unimplemented, message.error, brackethighlighter.unmatched, sublimelinter.mark.error */
	{
	color: #b31d28;
}

.ii

/* invalid.illegal */
	{
	color: #fafbfc;
	background-color: #b31d28;
}

.c2

/* carriage-return */
	{
	color: #fafbfc;
	background-color: #d73a49;
}

.c2::before

/* carriage-return */
	{
	content: "^M";
}

.sr .cce

/* string.regexp constant.character.escape */
	{
	font-weight: normal;
	color: #22863a;
}

.ml

/* markup.list */
	{
	color: #735c0f;
}

.mh
/* markup.heading */
,
.mh .en
/* markup.heading entity.name */
,
.ms

/* meta.separator */
	{
	font-weight: normal;
	color: #005cc5;
}

.mi

/* markup.italic */
	{
	font-style: normal;
	/* color: #24292e; */
}

.mb

/* markup.500 */
	{
	font-weight: normal;
	color: #24292e;
}

.md

/* markup.deleted, meta.diff.header.from-file, punctuation.definition.deleted */
	{
	color: #b31d28;
	background-color: #ffeef0;
}

.mi1

/* markup.inserted, meta.diff.header.to-file, punctuation.definition.inserted */
	{
	color: #22863a;
	background-color: #f0fff4;
}

.mc

/* markup.changed, punctuation.definition.changed */
	{
	color: #e36209;
	background-color: #ffebda;
}

.mi2

/* markup.ignored, markup.untracked */
	{
	color: #f6f8fa;
	background-color: #005cc5;
}

.mdr

/* meta.diff.range */
	{
	font-weight: normal;
	color: #6f42c1;
}

.ba

/* brackethighlighter.tag, brackethighlighter.curly, brackethighlighter.round, brackethighlighter.square, brackethighlighter.angle, brackethighlighter.quote */
	{
	color: #586069;
}

.sg

/* sublimelinter.gutter-mark */
	{
	color: #959da5;
}

.corl

/* constant.other.reference.link, string.other.link */
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
--color-bg: #ffffff;
--color-text: #000000;

@media screen and (prefers-color-scheme: dark) {
	--color-bg: #333333;
	--color-text: #ffffff;

	&[data-theme="invert"] {
		--color-bg: #ffffff;
		--color-text: #000000;
	}
}

@media screen and (prefers-color-scheme: light) {
	--color-bg: #ffffff;
	--color-text: #000000;

	&[data-theme="invert"] {
		--color-bg: #333333;
		--color-text: #ffffff;
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
	color: #000;
	color: var(--color-text);
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

/* This hack applies to code as modifer to the attached font (instead of replacing it) */
code {
	font-family: monospace !important;
	overflow-x: auto;
}

div pre.highlight {
	overflow-x: auto;
}

div pre.highlight code {
	display: block;
}

.date {
	color: #a0a0a0;
}

h1,
h2 {
	padding: 0;
	margin: 0;
}

h1 {
	font-weight: normal;
}

h2 {
	font-size: 40px;
	text-align: center;
}

h3 {
	font-size: 25px;
	text-align: center;
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
	font-weight: 500;
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

.markdown h2 {
	margin: 0 0.5em 0.45em;
}

.markdown h3 {
	margin: 0 1em 0.5em;
}

.markdown p {
	text-align: justify;
}

.markdown p[align="center"] {
	text-align: center;
}

.markdown p,
.markdown li {
	margin: 0 1em 1em;
	word-wrap: break-word;
}

.markdown ul {
	margin-left: 1em;
}

.markdown blockquote {
	border-left: 0.25em solid gainsboro;
	margin-left: 1em;
	color: grey;
}

.markdown {
	/* padding: 20px 0px; */
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
	left: 0;
	text-align: center;
	z-index: 4;
	transition: opacity .3s;
}

.sidebar-toggle span {
	background-color: rgb(4, 203, 230);
	transition: opacity .3s;
	display: block;
	margin-bottom: 4px;
	width: 20px;
	height: 3px;
}

.sidebar-toggle:hover {
	opacity: .4;
}

.dark-toggle {
	outline: none;
	padding: 10px;
	position: absolute;
	left: 0;
	text-align: center;
	transition: opacity .3s;
	z-index: 4;
	bottom: 40px;
}

.dark-toggle span {
	transition: opacity .3s;
	display: block;
	width: 16px;
	height: 16px;
	position: relative;
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

&.sidebar-hidden .sidebar {
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
	height: 50px;
	display: flex;
	flex-wrap: wrap;
}

.header .header-spacer {
	flex: 1;
}

.header .header-button {
	font-size: 18px;
	padding: 10px 15px;
	text-decoration: none;
}

.article {
	margin: 0 auto;
	padding: 10px 15px;
	max-width: 800px;
}

.hide {
	display: none;
}

#article-navigation {
	position: sticky;
	float: right;
	top: 10px;
	width: 226px;
	text-align: right;
	right: 16px;
	font-size: 18px;
	background-color: var(--color-bg);
	padding-bottom: 4px;
	border-left-color: rgba(0,0,0,0.5);
	border-left-style: solid;
	border-left-width: 6px;
	a {
		text-decoration: none;
	}
}

#article-navigation a.selected {
	font-weight: bold;
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
	&.sidebar-hidden .sidebar {
		transform: translateX(250px);
	}

	.page {
		left: 0;
		max-width: 100vw;
		padding-top: 20px;
		transition: transform .25s ease;
	}

	&.sidebar-hidden .page {
		transform: translateX(250px);
	}

	.sidebar {
		left: -250px;
		transition: transform .25s ease-out;
	}

	.github-corner,
	.sidebar,
	.dark-toggle,
	.sidebar-toggle {
		position: fixed;
	}
}
`
