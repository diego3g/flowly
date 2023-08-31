import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { NavLink } from './nav-link'
import { Button } from './ui/button'
import { Suspense } from 'react'
import { TeamSwitcher } from './team-switcher'
import { Skeleton } from './ui/skeleton'
import { UserNav } from './user-nav'

export function ToggleMenuHeader() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <HamburgerMenuIcon className="h-8 w-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-full items-center justify-center"
      >
        <DropdownMenuLabel>
          <TeamSwitcher />
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <nav className="flex items-center space-x-6">
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/monitoring">Monitoring</NavLink>
            <NavLink href="/settings">Settings</NavLink>
          </nav>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <Button variant="outline" size="sm">
            Feedback
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuLabel>
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
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>
          <Suspense fallback={<Skeleton className="h-8 w-8 rounded-full" />}>
            <UserNav />
          </Suspense>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
