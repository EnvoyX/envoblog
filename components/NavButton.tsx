"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavButton({ message, href }: { message: string; href: string }) {
  const currentPath = usePathname();
  return (
    <Link
      className={`text-xl font-medium transition-all bg-teal-500 rounded-lg px-4 py-2 hover:bg-white hover:text-teal-500 hover:scale-105 ${
        currentPath === href ? "bg-white text-teal-500" : ""
      }`}
      href={href}
    >
      {message}
    </Link>
  );
}

export default NavButton;
