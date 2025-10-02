"use client";
import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "./ui/button";
import NavButton from "./NavButton";
import Image from "next/image";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export function Navbar() {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold">
            Envo<span className="text-teal-500">Blog</span>
          </h1>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          <NavButton message="Home" href="/" />
          <NavButton message="Dashboard" href="/dashboard" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative size-10">
                <Image
                  src={user.picture as string}
                  alt={user.given_name as string}
                  className="object-cover rounded-full"
                  fill
                />
              </div>
              <p className="font-bold">{user.given_name}</p>
            </div>
            <DarkModeToggle />
            <LogoutLink
              className={`${buttonVariants({
                variant: "destructive",
              })} hover:scale-105 `}
            >
              Logout
            </LogoutLink>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <LoginLink className={buttonVariants({ variant: "default" })}>
              Login
            </LoginLink>
            <RegisterLink className={buttonVariants({ variant: "secondary" })}>
              Sign Up
            </RegisterLink>
          </div>
        )}
      </div>
    </nav>
  );
}
