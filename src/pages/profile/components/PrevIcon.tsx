// icon:chevron-back | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from 'react'

function PrevIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M328 112L184 256l144 144"
      />
    </svg>
  )
}

export default PrevIcon
