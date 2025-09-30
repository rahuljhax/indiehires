import * as React from "react"
import { SVGProps } from "react"
const EditIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 25 24"
        fill="none"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.3}
            d="m15.591 4.686 3.71 3.71M13.119 22h9.894M3.224 17.053 1.987 22l4.947-1.237 14.33-14.329a2.473 2.473 0 0 0 0-3.497l-.214-.213a2.474 2.474 0 0 0-3.497 0L3.224 17.053Z"
        />
    </svg>
)
export default EditIcon
