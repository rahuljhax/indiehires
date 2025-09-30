import * as React from "react"
import { SVGProps } from "react"
const MyJobsIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 28 28"
        fill="none"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.25}
            d="M1.625 10.841a3.75 3.75 0 0 1 3.75-3.75h17.25a3.75 3.75 0 0 1 3.75 3.75V22.25a3.75 3.75 0 0 1-3.75 3.75H5.375a3.75 3.75 0 0 1-3.75-3.75V10.841Z"
        />
        <path
           stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.25}
            d="M22.625 7.091H5.375a3.75 3.75 0 0 0-3.75 3.75v.455a4.5 4.5 0 0 0 4.5 4.5h15.75a4.5 4.5 0 0 0 4.5-4.5v-.455a3.75 3.75 0 0 0-3.75-3.75ZM8.905 4.25A2.25 2.25 0 0 1 11.155 2h5.69a2.25 2.25 0 0 1 2.25 2.25v2.841H8.906V4.25Z"
        />
    </svg>
)
export default MyJobsIcon
