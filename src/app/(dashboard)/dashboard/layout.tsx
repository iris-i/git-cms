import AdminSidebar from "@/components/dashboard/Admin-Sidebar";
import CustomSidebarTrigger from "@/components/dashboard/CustomSidebarTrigger";
import Navbar from "@/components/nav/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="w-full">
        <Navbar>
          <CustomSidebarTrigger />
        </Navbar>
        {children}
      </main>
    </SidebarProvider>

  )

}
