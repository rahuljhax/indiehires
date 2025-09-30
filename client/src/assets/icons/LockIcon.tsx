import * as React from "react"
import { SVGProps } from "react"
const LockIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 14 17"
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="M12.024 6.9h-.856V4.5s0-4-4-4-4 4-4 4v2.4h-.856A1.544 1.544 0 0 0 .768 8.444v6.52A1.544 1.544 0 0 0 2.312 16.5h9.712a1.544 1.544 0 0 0 1.544-1.544V8.444A1.544 1.544 0 0 0 12.024 6.9Zm-7.256-2c0-1.2 0-2.8 2.4-2.8s2.4 1.6 2.4 2.8v2h-4.8v-2Zm2.4 8.4a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Z"
        />
    </svg>
)
export default LockIcon
