import * as React from "react"
import { SVGProps } from "react"
const MyProfileIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 30 30"
        fill="none"
        {...props}
    >
        <path
           stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={2.25}
            d="M2 24.75a6.5 6.5 0 0 1 6.5-6.5h13a6.5 6.5 0 0 1 6.5 6.5A3.25 3.25 0 0 1 24.75 28H5.25A3.25 3.25 0 0 1 2 24.75Z"
        />
        <path
           stroke="currentColor"
            strokeWidth={2.25}
            d="M15 11.75A4.875 4.875 0 1 0 15 2a4.875 4.875 0 0 0 0 9.75Z"
        />
    </svg>
)
export default MyProfileIcon
