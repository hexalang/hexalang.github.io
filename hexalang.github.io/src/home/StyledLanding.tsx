import styled, { css } from 'styled-components'

export const StyledLanding = styled.div`
	//background-color: grey;
	width: 100vw;
	min-height: calc(100vh - 45px);
	display: flex;
	text-align: center;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	position: relative;

	//row-gap: 8px;
	//column-gap: 8px;
	//gap: 8px;

	.margin {
		margin-top: -15vh;
		display: flex;
		text-align: center;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		position: relative;

		.blocks {
			display: flex;
		}

		.block {
			display: flex;
			width: 328px;
			height: 328px;
			//background-color: white;
			border-radius: 20px;
			//row-gap: 8px;
			//column-gap: 8px;
			margin-left: 8px;
			margin-right: 8px;
		}

		.blockWhite {
			flex-direction: column;

			.texts {
				border-radius: 20px;
				border-bottom-left-radius: 0px;
				border-bottom-right-radius: 0px;
				width: 100%;
				background-color: white;
				display: flex;
				flex-direction: column;
				padding-top: 7px;
				padding-bottom: 39px;

				.motto {
					color: #D83018;
					font-size: 24px;
					font-weight: 500;
					align-self: flex-end;
					margin-right: 16px;
					user-select: none;
				}

				.highlighter-rouge {
					margin-top: 10px;
					font-size: 14px;
					//font-family: Menlo, Roboto Mono, Consolas, Courier New, monospace !important;
					color: black;
					text-align: left;
					align-self: center;

					code span {
						//white-space: pre;
						//text-align: left;
						//font-family: Menlo, Roboto Mono, Consolas, Courier New, monospace !important;
						font-size: 14px !important;
						//font-weight: 500;
						&.mi, &.kd {
							color: #57b0dc;
						}

						&.nb {
							color: #D83018;
						}
					}

					code span b {
						font-weight: normal !important;
					}

					br {
						display: block;
					}
				}
			}

			.icons {
				flex-grow: 1;
				border-radius: 20px;
				border-top-left-radius: 0px;
				border-top-right-radius: 0px;
				background-color: rgba(100, 100, 100, 0.2);
				backdrop-filter: blur(10px);
				background-image: url(/acryl.png);
				background-repeat: repeat;

				height: 64px;
				width: 100%;
				align-self: flex-end;
				display: flex;
				justify-content: space-evenly;
				align-items: center;

				div {
					background-image: url(/yt.svg);
					width: 52px;
					height: 44px;
					background-size: 42px 44px;
					background-repeat: no-repeat;
					background-position: center;
					cursor: pointer;

					transition:	transform 0.15s ease-in-out;

					&:hover {
						transform: scale(1.1);
					}

					&:hover:active {
						transform: scale(0.95);
					}
				}

				.tg {
					background-image: url(/tg.svg);


				}

				.gi {
					background-image: url(/gh.svg);

				}

				.di {
					background-image: url(/di.png);

				}
			}
		}

		.blockAcryl {
			background-color: white;
			border-radius: 20px;
			background-color: rgba(100, 100, 100, 0.2);
			backdrop-filter: blur(10px);
			background-image: url(/acryl.png);
			background-repeat: repeat;

			flex-direction: column;
			column-gap: 18px;
			justify-content: space-between;
			justify-content: space-around;
			padding: 14px;
			padding-top: 4px;

			.button {
				width: 100%;
				height: 80px;
				height: 60px;
				background-color: white;
				border-radius: 20px;
				border-radius: 14px;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				padding-left: 8px;
				cursor: pointer;
				user-select: none;
				transition: background-color .2s ease-out;

				&:hover {
					background-color: #f5f5f5;
				}

				&:hover:active {
					background-color: #efeeee;
				}

				.text {
					flex-direction: column;
					display: flex;
					flex-grow: 1;
					padding-left: 8px;
				}

				.title {
					color: black;
					font-size: 24px;
					align-self: flex-start;
				}

				.desc {
					color: #D83018;
					font-size: 14px;
					font-weight: 500;
					align-self: flex-start;
				}

				&.dark {
					background-color: black;
					width: 183px;
					height: 29px;
					color: white;
					font-size: 14px;
					align-items: center;
					justify-content: center;

					&:hover {
						background-color: #1c1c1c;
					}

					&:hover:active {
						background-color: #121212;
					}
				}

				.ico {
					transition:	transform 0.15s ease-in-out;
				}

				&:hover .ico {
					transform: scale(1.1);
				}

				.yt {
					background-image: url(/yt.svg);
					width: 52px;
					height: 44px;
					background-size: 42px 44px;
					background-repeat: no-repeat;
					background-position: center;
				}

				.try {
					background-image: url(/try.svg);
					width: 52px;
					height: 44px;
					background-size: 52px 44px;
					background-size: 42px 44px;
					background-repeat: no-repeat;
					background-position: center;
				}

				.hearts {
					background-image: url(/hearts.png);
					width: 52px;
					height: 44px;
					background-size: 42px 44px;
					background-repeat: no-repeat;
					background-position: center;
				}
			}
		}

		img {
			position: relative;
			top: 76px;
			left: -10px;
			z-index: 1;
			pointer-events: none;
		}
	}
`
