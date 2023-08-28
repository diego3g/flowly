import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-medium">Profile</h1>
        <span className="text-sm text-muted-foreground">
          Update your basic profile info.
        </span>
      </div>

      <Separator />

      <div className="space-y-8">
        <Skeleton className="h-28" />

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Skeleton className="h-5" />
            <Skeleton className="h-10" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5" />
            <Skeleton className="h-10" />
          </div>
        </div>
      </div>
    </div>
  )
}
