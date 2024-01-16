import * as React from 'react'

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.012 5.572l-1.087-1.087a5.5 5.5 0 10-7.778 7.778l8.839 8.839.002-.002.026.026 8.839-8.839a5.5 5.5 0 10-7.778-7.778l-1.063 1.063zm-.024 12.7l4.936-4.937 1.45-1.4h.002l1.063-1.062a3.5 3.5 0 10-4.95-4.95L12.013 8.4l-.007-.007h-.001L9.511 5.9a3.5 3.5 0 10-4.95 4.95l2.54 2.54.001-.003 4.886 4.886z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default HeartIcon
