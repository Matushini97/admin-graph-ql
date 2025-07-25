import React, { type SVGProps } from 'react'

export const BlockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={'24px'}
      height={'24px'}
      viewBox={'0 0 24 24'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
      transform={'rotate(90)'}
      {...props}
    >
      <path
        transform={'scale(1.12) translate(-1.2 -1.2)'}
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604ZM16.1925 17.6067L6.39327 7.80749C4.33767 10.5493 4.55666 14.4562 7.05025 16.9497C9.54384 19.4433 13.4507 19.6623 16.1925 17.6067ZM16.9497 7.05025C19.4433 9.54384 19.6623 13.4507 17.6067 16.1925L7.80749 6.39327C10.5493 4.33767 14.4562 4.55666 16.9497 7.05025Z'
        }
        fill={'#ffffff'}
      ></path>
    </svg>
  )
}

export default BlockIcon
