import * as React from "react"
import { SVGProps } from "react"
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 18 18"
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="M12.489 10.905h-.753l-.267-.257a6.164 6.164 0 0 0 1.496-4.03 6.193 6.193 0 1 0-6.192 6.192 6.165 6.165 0 0 0 4.03-1.495l.257.267v.752l4.763 4.754 1.42-1.42-4.754-4.763Zm-5.716 0a4.281 4.281 0 0 1-4.287-4.287 4.281 4.281 0 0 1 4.287-4.287 4.281 4.281 0 0 1 4.287 4.287 4.281 4.281 0 0 1-4.287 4.287Z"
        />
    </svg>
)
export default SearchIcon
