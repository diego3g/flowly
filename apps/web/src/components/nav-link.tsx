'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type NavLinkProps = ComponentProps<typeof Link>

export function NavLink({ className, ...props }: NavLinkProps) {
  const pathname = usePathname()

  const isActive = pathname === props.href

  return (
    <Link
      data-active={isActive}
      className={twMerge(
        'text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary',
        className,
      )}
      {...props}
    />
  )
}
