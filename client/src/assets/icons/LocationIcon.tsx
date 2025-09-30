import * as React from "react"
import { SVGProps } from "react"
const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 12 14"
        fill="none"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            d="M6.373 12.88a.64.64 0 0 1-.746 0C2.407 10.585-1.01 5.865 2.445 2.455A5.067 5.067 0 0 1 6 1c1.333 0 2.613.523 3.555 1.454 3.454 3.41.038 8.13-3.182 10.426Z"
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            d="M6 7a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 6 7Z"
        />
    </svg>
)
export default LocationIcon