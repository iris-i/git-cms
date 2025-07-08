// components/sidebar.tsx
import Link from "next/link"
import { LayoutDashboard, FileText, Settings, Sparkles, User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar() {
  return (
    <div className="min-h-screen w-60 bg-white border-r flex flex-col">
      {/* Sidebar Header */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <div className="text-blue-500">
            <svg viewBox="0 0 24 24" className="h-8 w-8">
              <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
              <circle cx="12" cy="12" r="4" fill="currentColor" />
            </svg>
          </div>
          <h1 className="font-semibold text-xl">argon</h1>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          <NavItem href="/" icon={<LayoutDashboard className="h-5 w-5" />} active>
            Dashboard
          </NavItem>
          <NavItem href="/posts" icon={<FileText className="h-5 w-5" />}>
            Posts
          </NavItem>
          <NavItem href="/preferences" icon={<Settings className="h-5 w-5" />}>
            Preferences
          </NavItem>
          <NavItem href="/generate" icon={<Sparkles className="h-5 w-5" />}>
            Generate Content
          </NavItem>
        </div>
      </nav>

      {/* Sidebar Footer */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-gray-200" />
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <LogOut className="h-5 w-5" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  )
}

function NavItem({ href, icon, children, active }: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900",
        active && "bg-gray-100 text-gray-900"
      )}
    >
      {icon}
      <span>{children}</span>
    </Link>
  )
}
