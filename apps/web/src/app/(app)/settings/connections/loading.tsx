import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-medium">Login Connections</h1>
        <span className="text-sm text-muted-foreground">
          Your currently account active login connections.
        </span>
      </div>

      <Separator />

      <div className="space-y-4">
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
        <Skeleton className="h-28" />
      </div>
    </div>
  )
}
