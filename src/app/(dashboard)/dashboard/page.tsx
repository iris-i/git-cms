import { BlogPostsTable } from "@/components/dashboard/BlogPostsTable"
import StatCard from "@/components/dashboard/StatCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Settings2, SparklesIcon, UserCheck } from "lucide-react"
import Link from "next/link"


const DashboardPage = () => {
  return (
    <>
      <section className="w-full max-w-5xl mx-auto px-8 py-4 my-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link href="/dashboard/posts/new">
            <StatCard
              title="AI content generation"
              value="Generate new posts"
              change={null}
              period="Create new posts with AI using prompts or youtube urls. "
              icon={<SparklesIcon className="h-6 w-6 text-white" />}
              iconBg="bg-red-500"
              className="hover:bg-muted hover:cursor-pointer"
            />
          </Link>
          <Link href="/dashboard/posts/new">
            <StatCard
              title="Preferences"
              value="Adjust theme settings"
              change={null}
              period="Change dashboard, link and icon colors."
              icon={<Settings2 className="h-6 w-6 text-white" />}
              iconBg="bg-yellow-500"
              className="hover:bg-muted hover:cursor-pointer"
            />
          </Link>
          <Link href="/dashboard/posts/new">
            <StatCard
              title="Team"
              value="Manage team"
              change={null}
              period="Add, remove, or update team member permissions."
              icon={<UserCheck className="h-6 w-6 text-white" />}
              iconBg="bg-blue-500"
              className="hover:bg-muted hover:cursor-pointer"
            />
          </Link>
        </div>
      </ section>
      <section>
        <Card className="dashboard-container">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-header uppercase font-light tracking-wide">Recent Posts</CardTitle>
            <Link href="/dashboard/post/new">
              <Button size="lg" className="text-lg">Create New Post</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <BlogPostsTable />
          </CardContent>
        </Card>
      </section>
    </>
  )
}

export default DashboardPage
