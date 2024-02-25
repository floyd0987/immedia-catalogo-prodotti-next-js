"use client";
import React, { useState } from "react";
import menuItems from "./menuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  const pathname = usePathname()

  return (
    <div>
      <nav className="border-y">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="block text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:outline-none my-4"
              >
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className={`${pathname == item.url ? "active" : ""} uppercase font-bold text-sm py-2 mt-1`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="flex flex-col items-baseline space-y-4">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className={`${pathname == item.url ? "active" : ""} uppercase font-bold text-sm py-2 mt-1`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
