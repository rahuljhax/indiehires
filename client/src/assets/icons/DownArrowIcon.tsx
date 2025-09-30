import * as React from "react"
import { SVGProps } from "react"
const DownArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 10 6"
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="m8.613.635.707.707-3.851 3.853a.664.664 0 0 1-.942 0L.673 1.342 1.38.635l3.617 3.616L8.613.635Z"
        />
    </svg>
)
export default DownArrowIcon
