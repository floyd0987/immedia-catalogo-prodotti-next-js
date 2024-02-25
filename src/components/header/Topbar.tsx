import React from "react";
import menuItems from "./menuItems";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import LanguageSwitcher from "../ui/LanguageSwitcher";

const Topbar = () => {
  const topbarItems = [
    {
      id: 1,
      title: "Chi siamo",
      url: "/chi-siamo",
    },
    {
      id: 2,
      title: "Community",
      url: "/community",
    },
    {
      id: 3,
      title: "Brand",
      url: "/brand",
    },
  ];

  return (
    <div>
      <nav className="bg-white py-2 border-b">
        <div className="container mx-auto">
          <div className="flex items-center justify-between ">
            <div className=" md:block">
              <div className="text-xs flex items-baseline space-x-4">
                {topbarItems.map((item, index) => {
                  return (
                    <Link href={item.url} key={index}>
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className=" md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
