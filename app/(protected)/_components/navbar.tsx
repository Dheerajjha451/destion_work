"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"; 

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden p-2 text-xl"
        onClick={toggleNavbar}
        aria-label="Toggle Menu"
      >
        {isOpen ? <Cross1Icon className="w-6 h-6" /> : <HamburgerMenuIcon className="w-6 h-6" />}
      </button>

      {/* Navbar */}
      <nav
        className={`bg-secondary flex flex-col justify-between items-start p-4 rounded-xl h-full w-60 shadow-sm fixed lg:relative top-0 left-0 z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:flex`} // Show/Hide based on state
      >
        <div className="flex flex-col gap-y-2 w-full">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl">
              Destion <span className="text-blue-600">Innovations</span>
            </h1>
            {/* Close Button for Mobile */}
            <button
              className="lg:hidden p-2 text-xl"
              onClick={toggleNavbar}
              aria-label="Close Menu"
            >
              <Cross1Icon className="w-6 h-6" />
            </button>
          </div>

          <Button
            asChild
            variant={pathname === "/dashboard" ? "default" : "outline"}
            className="w-full"
          >
            <Link href="/dashboard">Dashboard</Link>
          </Button>

          <Button
            asChild
            variant={pathname === "/settings" ? "default" : "outline"}
            className="w-full"
          >
            <Link href="/settings">Settings</Link>
          </Button>
        </div>
        <UserButton />
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleNavbar}
        ></div>
      )}
    </div>
  );
};