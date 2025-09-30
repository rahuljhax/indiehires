import * as React from "react"
import { SVGProps } from "react"
const RightLongArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 16 12"
        fill="none"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M1.333 6h13.334m0 0-5 5m5-5-5-5"
        />
    </svg>
)
export default RightLongArrowIcon
