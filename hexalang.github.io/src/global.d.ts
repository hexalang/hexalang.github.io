import type { } from "styled-components/cssprop"
import { CSSProperties } from "react"

declare module "react" {
	export type Var = { [key in `--${string}`]: string } & CSSProperties
}
