import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Merge, Split } from 'lucide-react'
import Link from 'next/link'

export default async function Services() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold">Services</h1>
          <span className="block text-muted-foreground">
            Manage each application that publish or consume events.
          </span>
        </div>

        <div>
          <Button asChild>
            <Link href="/services/new">Add service</Link>
          </Button>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {Array.from({ length: 12 }).map((_, i) => {
          return (
            <Link href="/services/pluto" key={i} className="group">
              <Card className="group-hover:border-primary">
                <CardHeader className="p">
                  <CardTitle className="flex items-center gap-2">
                    Pluto
                  </CardTitle>
                  <CardDescription>Purchases & subscriptions.</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Split className="h-3 w-3 text-violet-400" />
                    Publish 8 events
                  </div>
                  <div className="flex items-center gap-2">
                    <Merge className="h-3 w-3 text-sky-400" />
                    Subscribe to 2 events
                  </div>
                </CardFooter>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
