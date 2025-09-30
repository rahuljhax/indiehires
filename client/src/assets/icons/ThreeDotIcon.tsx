import * as React from "react"
import { SVGProps } from "react"
const ThreeDotIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 18 4"
        fill="none"
        {...props}
    >
        <path
            stroke="#333"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="M1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm7 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm7 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
        />
    </svg>
)
export default ThreeDotIcon
