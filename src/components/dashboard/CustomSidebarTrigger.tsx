"use client"

import { SidebarTrigger, useSidebar } from "../ui/sidebar";

const CustomSidebarTrigger = () => {
  const { open } = useSidebar()

  return (
    <SidebarTrigger variant={"secondary"} >
      <span className="text-sm">
        {open ? `Hide` : `Show`} sidebar
      </span>
    </SidebarTrigger>
  );
}

export default CustomSidebarTrigger;
