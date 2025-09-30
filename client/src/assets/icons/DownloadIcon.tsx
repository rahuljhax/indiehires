import * as React from "react"
import { SVGProps } from "react"
const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 12 16"
        fill="none"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 14.667h10M6 1.333v10m0 0 2.917-2.916M6 11.333 3.083 8.417"
        />
    </svg>
)
export default DownloadIcon
