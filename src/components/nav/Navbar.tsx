import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import NavDrop from "./NavDrop";
import { Sun } from "lucide-react";

function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="bg-primary flex justify-between text-primary-foreground py-2 px-5 text-xl">
      {children}
      <Link href="/dashboard">Admin Dashboard</Link>
      <Sun />
    </nav>
  );
}

export default Navbar;
