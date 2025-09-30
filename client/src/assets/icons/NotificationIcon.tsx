import * as React from "react"
import { SVGProps } from "react"
const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 36 36"
        fill="none"
        {...props}
    >
        <path
            stroke="#6B6B6B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.25}
            d="M9.8 27.8V15.2a8.4 8.4 0 0 1 16.8 0v12.6m-16.8 0h16.8m-16.8 0H7m19.6 0h2.8M16.8 32h2.8"
        />
        <path
            stroke="#6B6B6B"
            strokeWidth={2.25}
            d="M18.2 6.8a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z"
        />
        <circle cx={26} cy={10} r={4} fill="#DF2727" />
    </svg>
)
export default NotificationIcon
