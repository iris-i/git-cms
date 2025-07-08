// app/layout.tsx
import { Sidebar } from "@/dash-components/sidebar"

export default function DashPage({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-auto bg-gradient-to-br from-blue-100 to-blue-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
