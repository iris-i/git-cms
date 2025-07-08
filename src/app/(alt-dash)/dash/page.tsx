// app/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowDownIcon, ArrowUpIcon, BarChart3, Users, DollarSign, Percent } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="TRAFFIC"
          value="350,897"
          change={3.48}
          period="Since last month"
          icon={<BarChart3 className="h-6 w-6 text-white" />}
          iconBg="bg-red-500"
        />
        <StatCard
          title="NEW USERS"
          value="2,356"
          change={-3.48}
          period="Since last week"
          icon={<Users className="h-6 w-6 text-white" />}
          iconBg="bg-orange-500"
        />
        <StatCard
          title="SALES"
          value="924"
          change={-1.10}
          period="Since yesterday"
          icon={<DollarSign className="h-6 w-6 text-white" />}
          iconBg="bg-yellow-500"
        />
        <StatCard
          title="PERFORMANCE"
          value="49.65%"
          change={12}
          period="Since last month"
          icon={<Percent className="h-6 w-6 text-white" />}
          iconBg="bg-blue-500"
        />
      </div>

      {/* Projects Table */}
      <Card>
        <CardHeader>
          <CardTitle>Card tables</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b">
                  <th className="">Title</th>
                  <th className="">Slug</th>
                  <th className="">STATUS</th>
                  <th className="">Author</th>
                  <th className="">COMPLETION</th>
                </tr>
              </thead>
              <tbody>
                <ProjectRow
                  name="Argon Design System"
                  budget="$2,500 USD"
                  status="pending"
                  completion={60}
                />
                <ProjectRow
                  name="Angular Now UI Kit PRO"
                  budget="$1,800 USD"
                  status="completed"
                  completion={100}
                />
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function StatCard({ title, value, change, period, icon, iconBg }: {
  title: string
  value: string
  change: number
  period: string
  icon: React.ReactNode
  iconBg: string
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="text-2xl font-semibold mt-2">{value}</h3>
          </div>
          <div className={cn("p-3 rounded-lg", iconBg)}>
            {icon}
          </div>
        </div>
        <div className="flex items-center mt-4">
          <span className={cn(
            "flex items-center text-sm",
            change > 0 ? "text-green-500" : "text-red-500"
          )}>
            {change > 0 ? (
              <ArrowUpIcon className="h-4 w-4 mr-1" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 mr-1" />
            )}
            {Math.abs(change)}%
          </span>
          <span className="text-sm text-gray-500 ml-2">{period}</span>
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectRow({ name, budget, status, completion }: {
  name: string
  budget: string
  status: "pending" | "completed" | "delayed"
  completion: number
}) {
  const statusColors = {
    pending: "text-orange-500",
    completed: "text-green-500",
    delayed: "text-red-500"
  }

  return (
    <tr className="border-b">
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-100 rounded-lg" />
          <span className="font-medium">{name}</span>
        </div>
      </td>
      <td className="px-6 py-4">{budget}</td>
      <td className="px-6 py-4">
        <span className={statusColors[status]}>●</span>
        <span className="ml-2">{status}</span>
      </td>
      <td className="px-6 py-4">
        <div className="flex -space-x-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
          ))}
        </div>
      </td>
      <td className="px-6 py-4 w-40">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full",
                status === "completed" ? "bg-green-500" :
                  status === "delayed" ? "bg-red-500" : "bg-blue-500"
              )}
              style={{ width: `${completion}%` }}
            />
          </div>
          <span className="text-sm text-gray-500 whitespace-nowrap">
            {completion}%
          </span>
        </div>
      </td>
    </tr>
  )
}
