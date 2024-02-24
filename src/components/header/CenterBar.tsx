import React from "react";
import menuItems from "./menuItems";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import SearchInput from "../ui/SearchInput";
import RightBar from "../ui/RightBar";

const CenterBar = () => {
  return (
    <div>
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              <SearchInput />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <RightBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterBar;
