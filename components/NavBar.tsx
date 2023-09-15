"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useState } from "react";

function NavBar() {
  const [SignIn, setSignIn] = useState(false);
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <div>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton  mode="modal">
              <button className="  text-lg bg-white rounded-full py-2 px-4 ">
                Sign In
              </button>
            </SignInButton>
             
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
