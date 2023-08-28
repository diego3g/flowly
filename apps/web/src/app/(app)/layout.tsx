import { Logo } from '@/components/logo'
import { TeamSwitcher } from '@/components/team-switcher'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { UserNav } from '@/components/user-nav'
import { BellIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background min-h-screen">
      <div className="border-b px-6 flex justify-between items-center h-16">
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
            className="rounded-full gap-1 h-6 px-2 text-secondary-foreground"
            size="sm"
          >
            <BellIcon className="w-3 h-3" />
            <span>12</span>
          </Button>
          <UserNav />
        </div>
      </div>
      <main className="p-6 max-w-6xl mx-auto">{children}</main>
    </div>
  )
}
