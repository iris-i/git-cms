import Link from "next/link";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import {
  Folder,
  Home,
  Newspaper,
  Settings,
  Sparkles,
} from "lucide-react"

interface MenuItems {
  menuitems:
  {
    title: string;
    icon: string;
    href: string;
  }[]
}

const renderIcon = (icon: string, color?: string, size?: number) => {
  switch (icon) {
    case "Home":
      return <Home color={color} size={size} />
    case "Newspaper":
      return <Newspaper color={color} size={size} />
    case "Settings":
      return <Settings color={color} size={size} />
    case "Sparkles":
      return <Sparkles color={color} size={size} />
    default:
      return <Folder color={color} size={size} />
  }

}

const AdminSidebarMenu = ({ menuitems }: MenuItems) => {
  return (
    <SidebarMenu>
      {menuitems.map((item, index) => {
        return (
          <SidebarMenuItem key={`${index}-${item.title}`}>
            <SidebarMenuButton tooltip={item.title} className="text-base my-[2px]">
              {renderIcon(item.icon, `hsla(var(--primary))`, 40)}
              <Link href={item.href}>{item.title}</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </SidebarMenu>
  );
}

export default AdminSidebarMenu;
