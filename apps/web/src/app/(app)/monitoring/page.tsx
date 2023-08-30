import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CubeIcon } from '@radix-ui/react-icons'
import { Split } from 'lucide-react'
import Link from 'next/link'

export default async function Monitoring() {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold">Monitoring</h1>
        <span className="block text-muted-foreground">
          Search and inspect the communication between services.
        </span>
      </div>

      <Separator />

      <div className="grid grid-cols-[15rem_1fr] items-start gap-8">
        <nav className="flex flex-col gap-6">
          <div className="space-y-2">
            <Label htmlFor="timeline">Timeline</Label>
            <Select defaultValue="30">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">Past 30 minutes</SelectItem>
                <SelectItem value="hour">Past 1 hour</SelectItem>
                <SelectItem value="two">Past 2 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />
          <div className="space-y-6">
            <span className="block text-sm font-semibold">Status</span>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="service-1" />
                <Label htmlFor="service-1" asChild>
                  <Badge
                    size="sm"
                    variant="secondary"
                    className="bg-emerald-400/20"
                  >
                    Success
                  </Badge>
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-2" />
                <Label htmlFor="service-1" asChild>
                  <Badge
                    size="sm"
                    variant="secondary"
                    className="bg-rose-400/20"
                  >
                    Error
                  </Badge>
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-3" />
                <Label htmlFor="service-1" asChild>
                  <Badge size="sm" variant="secondary">
                    Waiting
                  </Badge>
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="service-3" />
                <Label htmlFor="service-1" asChild>
                  <Badge
                    size="sm"
                    variant="secondary"
                    className="bg-amber-400/20"
                  >
                    Retrying
                  </Badge>
                </Label>
              </div>
            </div>
          </div>

          <Separator />
          <div className="space-y-6">
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

          <Separator />
          <div className="space-y-6">
            <span className="block text-sm font-semibold">
              Filter by events (3)
            </span>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="event-1" />
                <Label htmlFor="event-1">pluto.signature-created</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="event-2" />
                <Label htmlFor="event-2">pluto.subscription-created</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="event-3" />
                <Label htmlFor="event-3">pluto.subscription-renewed</Label>
              </div>
            </div>
          </div>
        </nav>

        <div className="">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Consumer</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Metadata</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 24 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="text-xs text-muted-foreground">
                    AUG 30 12:44:17.15
                  </TableCell>
                  <TableCell>
                    <Badge
                      size="sm"
                      variant="secondary"
                      className="bg-emerald-400/20"
                    >
                      Success
                    </Badge>
                  </TableCell>
                  <TableCell className="space-x-2 font-medium">
                    <CubeIcon className="inline-block h-3 w-3" />
                    <span>skylab</span>
                  </TableCell>
                  <TableCell className="space-x-2 font-medium">
                    <Split className="inline-block h-3 w-3 text-violet-400" />
                    <span>pluto.subscription-created</span>
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate font-mono text-xs text-muted-foreground">
                    {`[HEAD] [middleware: "discover-2022/_middleware"]
                    /discover-2022/course/o-guia-estelar-de-git/conceitos-6/estagios-do-arquivo
                    status=200`}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
