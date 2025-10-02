"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavButton({ message, href }: { message: string; href: string }) {
  const currentPath = usePathname();
  return (
    <Link
      className={`text-xl font-medium transition-all bg-gray-200 text-black dark:bg-slate-800 dark:text-white rounded-lg px-4 py-2  hover:scale-105 ${
        currentPath === href
          ? "dark:bg-teal-500 dark:text-white bg-teal-500"
          : ""
      }`}
      href={href}
    >
      {message}
    </Link>
  );
}

export default NavButton;
