import Link from 'next/link'
import { Logo } from './logo'
import { Separator } from './ui/separator'
import { TeamSwitcher } from './team-switcher'
import { Button } from './ui/button'
import { BellIcon } from '@radix-ui/react-icons'
import { UserNav } from './user-nav'
import { Suspense } from 'react'
import { Skeleton } from './ui/skeleton'

export function Header() {
  return (
    <div className="flex h-16 items-center justify-between border-b px-6">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Logo className="h-8 w-8" />
        </Link>

        <Separator orientation="vertical" className="h-5" />

        <TeamSwitcher />

        <Separator orientation="vertical" className="h-5" />

        <nav className="flex items-center space-x-6">
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Events
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Monitoring
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Settings
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          Feedback
        </Button>
        <Separator orientation="vertical" className="h-5" />
        <nav className="flex items-center space-x-6">
          <Link
            href="/examples/dashboard"
            className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Changelog
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Help
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Docs
          </Link>
        </nav>
        <Separator orientation="vertical" className="h-5" />
        <Button
          variant="outline"
          className="h-6 gap-1 rounded-full px-2 text-secondary-foreground"
          size="sm"
        >
          <BellIcon className="h-3 w-3" />
          <span>12</span>
        </Button>

        <Suspense fallback={<Skeleton className="h-8 w-8 rounded-full" />}>
          <UserNav />
        </Suspense>
      </div>
    </div>
  )
}
