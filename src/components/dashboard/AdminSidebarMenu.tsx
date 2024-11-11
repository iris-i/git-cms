import Link from "next/link";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import {
  Folder,
  Home,
  Newspaper,
  Settings,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

interface MenuItems {
  menuitems:
  {
    title: string;
    icon?: string;
    href: string;
  }[]
}

const renderIcon = (icon: string) => {
  switch (icon) {
    case "Home":
      return <Home />
    case "Newspaper":
      return <Newspaper />
    case "Settings":
      return <Settings />
    case "Sparkles":
      return <Sparkles />
  }

}

const AdminSidebarMenu = ({ menuitems }: MenuItems) => {
  return (
    <SidebarMenu>
      {menuitems.map((item, index) => {
        return (
          <SidebarMenuItem key={`${index}-${item.title}`}>
            <SidebarMenuButton tooltip={item.title}>
              {item.icon ? renderIcon(item.icon) : <Folder />}
              <Link href={item.href}>{item.title}</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </SidebarMenu>
  );
}

export default AdminSidebarMenu;
