import * as React from "react"
import { SVGProps } from "react"
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 8 8"
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="M7.388 1.496a.625.625 0 1 0-.883-.884L4 3.116 1.496.612a.625.625 0 1 0-.884.883L3.115 4 .611 6.504a.625.625 0 0 0 .883.884L4 4.883l2.504 2.505a.625.625 0 0 0 .884-.883L4.885 4l2.503-2.504Z"
        />
    </svg>
)
export default CloseIcon
