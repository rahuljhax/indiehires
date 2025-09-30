import * as React from "react"
import { SVGProps } from "react"
const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 12 11"
        fill="none"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M6 3.5h.004M6 7.5V5m5 .5a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
        />
    </svg>
)
export default InfoIcon
