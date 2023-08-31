import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Collapsible,
  CollapsibleSubContent,
  CollapsibleSubTrigger,
} from '@/components/ui/collapsible'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Merge } from 'lucide-react'
import Link from 'next/link'

export default async function Events() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold">Events</h1>
          <span className="block text-muted-foreground">
            Manage events published or consumed by the services.
          </span>
        </div>

        <div className="mt-3 w-full md:mt-0 md:w-28">
          <Button className="flex items-center justify-center" asChild>
            <Link href="/events/new">Add event</Link>
          </Button>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[15rem_1fr]">
        <nav className="flex flex-col gap-6">
          <Input id="search" placeholder="Search events..." />
          <Separator />
          <div className="hidden space-y-6 md:block">
            <span className="block text-sm font-semibold">
              Filter by services (7)
            </span>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="service-1" />
                <Label htmlFor="service-1">Pluto</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-2" />
                <Label htmlFor="service-2">Atlas</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-3" />
                <Label htmlFor="service-3">Streaks</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-4" />
                <Label htmlFor="service-4">Station</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-5" />
                <Label htmlFor="service-5">Houston</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-6" />
                <Label htmlFor="service-6">Jupiter</Label>
              </div>
            </div>
          </div>

          <Collapsible className="group md:hidden">
            <CollapsibleSubTrigger>
              Filter by services (7)
            </CollapsibleSubTrigger>
            <CollapsibleSubContent>
              <div className="ms-1 space-y-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="service-1" />
                  <Label htmlFor="service-1">Pluto</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="service-2" />
                  <Label htmlFor="service-2">Atlas</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="service-3" />
                  <Label htmlFor="service-3">Streaks</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="service-4" />
                  <Label htmlFor="service-4">Station</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="service-5" />
                  <Label htmlFor="service-5">Houston</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="service-6" />
                  <Label htmlFor="service-6">Jupiter</Label>
                </div>
              </div>
            </CollapsibleSubContent>
          </Collapsible>
        </nav>

        <div className="crig-cols-1 grid gap-3 md:grid-cols-2">
          {Array.from({ length: 12 }).map((_, i) => {
            return (
              <Link
                href="/events/A43DF994-E882-4FFA-97B7-03F75F42F549
            "
                key={i}
                className="group"
              >
                <Card className="group-hover:border-primary">
                  <CardHeader className="p">
                    <CardTitle className="flex items-center gap-2">
                      pluto.subscription-created
                      <span className="text-xs text-muted-foreground">
                        (v0.0.1)
                      </span>
                    </CardTitle>
                    <CardDescription>
                      Holds information about each subscription created.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
                    <Badge size="sm" variant="secondary">
                      Pluto
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Merge className="h-3 w-3 text-sky-400" />
                      Consumed by 3 service(s)
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
