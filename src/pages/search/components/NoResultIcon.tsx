// icon:warning_circle | System UIcons https://systemuicons.com/ | Corey Ginnivan
import * as React from 'react'

function NoResultIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}>
      <g
        fill="none"
        fillRule="evenodd">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.5 10.5 A8 8 0 0 1 10.5 18.5 A8 8 0 0 1 2.5 10.5 A8 8 0 0 1 18.5 10.5 z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 11.5v-5"
        />
        <path
          fill="currentColor"
          d="M11.5 14.5 A1 1 0 0 1 10.5 15.5 A1 1 0 0 1 9.5 14.5 A1 1 0 0 1 11.5 14.5 z"
        />
      </g>
    </svg>
  )
}

export default NoResultIcon
