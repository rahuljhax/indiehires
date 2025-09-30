import * as React from "react"
import { SVGProps } from "react"
const BookmarkIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 20 28"
        fill="none"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeWidth={2.25}
            d="m16.672 1.126.107-.001c.635 0 1.203.195 1.587.485.331.25.47.523.502.748l.007.094v23.333l-8.21-5.997-.664-.484-.664.484-8.212 5.997V2.53l.001-.078c.003-.24.131-.556.51-.842.383-.29.95-.483 1.585-.484l.102.001h13.343V.551l.006.575Z"
        />
    </svg>
)
export default BookmarkIcon
