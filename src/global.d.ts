import type { } from "styled-components/cssprop"
import { CSSProperties } from "react"

declare module "react" {
	export type Var = { [key in `--${string}`]: string } & CSSProperties
}

declare module '*.svg' {
	import * as React from 'react'

	export const ReactComponent: React.FunctionComponent<React.SVGProps<
		SVGSVGElement
	> & { title?: string }>

	const src: string
	export default src
}
