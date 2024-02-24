"use client";
import React from "react";
import menuItems from "./menuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {

  const pathname = usePathname()

  return (
    <div>
      <nav className="border-y">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {menuItems.map((item, index) => {
                  return (
                    <Link href={item.url} key={index} className={`${pathname == item.url ? "active" : ""} uppercase font-bold text-sm py-2 mt-1`} >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
