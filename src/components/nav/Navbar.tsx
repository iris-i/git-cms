import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import NavDrop from "./NavDrop";
import { Sun } from "lucide-react";

function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex py-2 px-5 text-xl justify-between text-primary-foreground">
      {children}
      <Sun />
    </div>
  );
}

export default Navbar;
