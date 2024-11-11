import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import NavDrop from "./NavDrop";

function Navbar() {
  return (
    <nav className="bg-primary flex justify-between text-primary-foreground py-2 px-5">
      <Link href="/dashboard">Admin Dashboard</Link>
      <NavDrop>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
          <AvatarFallback>II</AvatarFallback>
        </Avatar>
      </NavDrop>
    </nav>
  );
}

export default Navbar;
