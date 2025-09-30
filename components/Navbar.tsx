import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold">
            Envo<span className="text-teal-500">Blog</span>
          </h1>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="text-sm font-medium hover:text-teal-500 transition-colors"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-teal-500 transition-colors"
            href={"/dashboard"}
          >
            Dashboard
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <Button variant="default">Login</Button>
        <Button variant="secondary">Sign Up</Button>
      </div>
    </nav>
  );
}
