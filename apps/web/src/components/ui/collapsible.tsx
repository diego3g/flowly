'use client'

import * as React from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { ChevronRightIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import { twMerge } from 'tailwind-merge'

const Collapsible = CollapsiblePrimitive.Root
const CollapsibleTrigger = CollapsiblePrimitive.Trigger
const CollapsibleContent = CollapsiblePrimitive.Content

const CollapsibleSubTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <CollapsiblePrimitive.Trigger
    ref={ref}
    className={twMerge(
      'group flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4 group-data-[state=open]:hidden" />
    <ChevronDownIcon className="ml-auto h-4 w-4 group-data-[state=closed]:hidden" />
  </CollapsiblePrimitive.Trigger>
))
CollapsibleSubTrigger.displayName = CollapsiblePrimitive.Trigger.displayName

const CollapsibleSubContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={twMerge('mt-3', className)}
    {...props}
  />
))
CollapsibleSubContent.displayName = CollapsiblePrimitive.Content.displayName

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleSubTrigger,
  CollapsibleSubContent,
}
