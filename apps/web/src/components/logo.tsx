import { ComponentProps } from 'react'

export function Logo(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={0.5}
        y={0.5}
        width={79}
        height={79}
        rx={11.5}
        fill="url(#paint0_linear_26_2)"
        stroke="#18181B"
      />
      <path
        d="M33.648 61h-1.687V22.187h1.687V61zm-3.375 0h-1.687V22.187h1.687V61zm-3.375 0h-1.687V22.187h1.687V61zm10.125-8.438h17.954v1.688H37.023v1.688h17.954v1.687H37.023v1.688h17.954V61H35.336V22.187h19.64v1.688H37.024v1.688h17.954v1.687H37.023v1.688h17.954v1.687H37.023v6.75h9.211v1.688h-9.21v1.687h9.21v1.688h-9.21v1.687h9.21v1.688h-9.21v6.75z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="paint0_linear_26_2"
          x1={0}
          y1={0}
          x2={80}
          y2={80}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#18181B" />
          <stop offset={1} stopColor="#09090B" />
        </linearGradient>
      </defs>
    </svg>
  )
}
