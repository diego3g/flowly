'use client'

import { useAuth, useUser, UserProfile } from '@clerk/nextjs'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Skeleton } from './ui/skeleton'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import Link from 'next/link'

export function UserNav() {
  const { user, isLoaded: isUserLoaded } = useUser()
  const { signOut } = useAuth()

  const isLoading = !isUserLoaded

  if (isLoading) {
    return <Skeleton className="h-8 w-8 rounded-full" />
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full select-none"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.imageUrl} alt={user?.fullName ?? ''} />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-medium leading-none">{user?.fullName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/settings">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings/teams">My teams</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings/billing">Billing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings/keys">API Keys</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
