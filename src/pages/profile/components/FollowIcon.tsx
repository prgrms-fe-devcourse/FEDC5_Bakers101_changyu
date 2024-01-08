import * as React from 'react'

const FollowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill={props.fill || 'none'}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.fill === 'none' ? 1 : 0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  )
}

export default FollowIcon
