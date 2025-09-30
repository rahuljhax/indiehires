import * as React from "react"
import { SVGProps } from "react"
const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 20 20"
        fill="none"
        {...props}
    >
        <path
            fill="#38338B"
            d="M11.143 3.143a1.143 1.143 0 0 0-2.286 0v5.714H3.143a1.143 1.143 0 1 0 0 2.286h5.714v5.714a1.143 1.143 0 0 0 2.286 0v-5.714h5.714a1.143 1.143 0 0 0 0-2.286h-5.714V3.143Z"
        />
    </svg>
)
export default PlusIcon
