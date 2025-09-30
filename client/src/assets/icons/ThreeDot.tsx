import * as React from "react"
import { SVGProps } from "react"
const ThreeDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
  viewBox="0 0 4 18" 
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
    />
  </svg>
)
export default ThreeDot
