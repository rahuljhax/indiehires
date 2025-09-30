import * as React from "react"
import { SVGProps } from "react"
const PersonIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 12 14"
        fill="none"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M10.667 13v-1.333A2.667 2.667 0 0 0 8 9H4a2.667 2.667 0 0 0-2.667 2.667V13M6 6.333A2.667 2.667 0 1 0 6 1a2.667 2.667 0 0 0 0 5.333Z"
        />
    </svg>
)
export default PersonIcon
