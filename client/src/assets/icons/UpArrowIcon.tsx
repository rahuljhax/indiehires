import * as React from "react"
import { SVGProps } from "react"
const UpArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 14 8"
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.29.79.631 6.447l1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414L7.703.79a1 1 0 0 0-1.414 0Z"
            clipRule="evenodd"
        />
    </svg>
)
export default UpArrowIcon
