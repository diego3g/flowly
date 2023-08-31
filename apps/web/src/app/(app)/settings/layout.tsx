import { ReactNode } from 'react'
import { SidebarNav } from './sidebar-nav'
import { Separator } from '@/components/ui/separator'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold">Settings</h1>
        <span className="block text-muted-foreground">
          Manage your account settings.
        </span>
      </div>

      <Separator />

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[15rem_1fr]">
        <SidebarNav />
        {children}
      </div>
    </div>
  )
}
