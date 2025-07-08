import { cn } from "@/lib/utils"
import { Card, CardContent } from "../ui/card"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

export default function StatCard({ title, value, change, period, icon, iconBg, className }: {
  title: string
  value?: string
  change?: number | null
  period?: string
  icon: React.ReactNode
  iconBg: string
  className: string
}) {
  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start gap-[0.5rem]">
          <div>
            <p className="text-sm uppercase font-header font-thin tracking-wider">{title}</p>
            <h3 className="hover:underline mt-2">{value}</h3>
          </div>
          <div className={cn("p-3 rounded-lg", iconBg)}>
            {icon}
          </div>
        </div>
        <div className="flex items-center mt-4">
          {(change !== null) && <span className={cn(
            "flex items-center text-sm",
            change && change > 0 ? "text-green-500" : "text-red-500"
          )}>
            {change && change > 0 ? (
              <ArrowUpIcon className="h-4 w-4 mr-1" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 mr-1" />
            )}
            {change && Math.abs(change)}%
          </span>}
          <span className="text-sm">{period}</span>
        </div>
      </CardContent>
    </Card>
  )
}
