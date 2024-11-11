import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar"
import { UserMenu } from "./UserMenu"
import { data } from "@/data/dummy-data"
import AdminSidebarMenu from "./AdminSidebarMenu"
import AdminSidebarHeader from "./AdminSidebarHeader"

export default function AdminSidebar() {
  return (
    <Sidebar collapsible="icon">
      <AdminSidebarHeader sitename={process.env.SITENAME} sitesubname={process.env.SITESUBNAME} />
      <SidebarContent>
        <AdminSidebarMenu menuitems={data.sidebarmenu} />
      </SidebarContent>
      <SidebarFooter>
        <UserMenu user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar >
  )
}
