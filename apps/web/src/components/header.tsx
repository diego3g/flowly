import Link from 'next/link'
import { Logo } from './logo'
import { Separator } from './ui/separator'
import { TeamSwitcher } from './team-switcher'
import { Button } from './ui/button'
import { UserNav } from './user-nav'
import { Suspense } from 'react'
import { Skeleton } from './ui/skeleton'
import { NavLink } from './nav-link'
import { Notifications } from './notifications'
import { ToggleMenuHeader } from './toggle-menu'

export function Header() {
  return (
    <div className="flex h-16 items-center justify-between border-b px-6">
      <div className="hidden  items-center gap-4 md:flex">
        <Link href="/">
          <Logo className="h-8 w-8" />
        </Link>

        <Separator orientation="vertical" className="h-5" />

        <TeamSwitcher />

        <Separator orientation="vertical" className="h-5" />

        <nav className="flex items-center space-x-6">
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/monitoring">Monitoring</NavLink>
          <NavLink href="/settings">Settings</NavLink>
        </nav>
      </div>

      <div className="hidden items-center gap-4 md:flex">
        <Button variant="outline" size="sm">
          Feedback
        </Button>

        <Separator orientation="vertical" className="h-5" />

        <nav className="flex items-center space-x-6">
          <NavLink className="text-xs font-normal" href="/examples/dashboard">
            Changelog
          </NavLink>
          <NavLink className="text-xs font-normal" href="/examples/dashboard">
            Help
          </NavLink>
          <NavLink className="text-xs font-normal" href="/examples/dashboard">
            Docs
          </NavLink>
        </nav>

        <Separator orientation="vertical" className="h-5" />

        <Notifications />

        <Suspense fallback={<Skeleton className="h-8 w-8 rounded-full" />}>
          <UserNav />
        </Suspense>
      </div>
      <div className="flex w-full justify-between md:hidden">
        <Link href="/">
          <Logo className="h-8 w-8" />
        </Link>
        <div className="flex items-center justify-center gap-3 align-middle">
          <Notifications />
          <ToggleMenuHeader />
        </div>
      </div>
    </div>
  )
}
