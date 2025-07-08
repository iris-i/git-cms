import AdminSidebar from "@/components/dashboard/Admin-Sidebar";
import CustomSidebarTrigger from "@/components/dashboard/CustomSidebarTrigger";
import Navbar from "@/components/nav/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import patterns from "@/styles/patterns.module.css"

export default function DashboardLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  let { stripePattern, polkadot, grid_pattern, graph_sheet_pattern, polka_dot_pattern } = patterns

  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="dashboard-bg">
          <Navbar>
            <CustomSidebarTrigger />
          </Navbar>
          {children}
        </div>
      </main>
    </SidebarProvider>
  )

}
