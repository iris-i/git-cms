import Link from "next/link";
import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Command } from "lucide-react";

const AdminSidebarHeader = ({ sitename, sitesubname }: { sitename: string | undefined, sitesubname: string | undefined }) => {
  return (
    <SidebarHeader className="border-b mb-2 bg-muted text-foreground">
      <SidebarMenu>
        <SidebarMenuButton size="lg" className="py-4">
          <Link href="dashboard">
            <div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{sitename}</span>
                <span className="truncate text-xs">{sitesubname}</span>
              </div>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenu>
    </SidebarHeader>
  );
}

export default AdminSidebarHeader;
