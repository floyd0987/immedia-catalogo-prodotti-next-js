import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import Centerbar from "./CenterBar";

const Header = () => {
  return (
    <div>

      <Topbar />
      <Centerbar />
      <Navbar />
    </div>
  );
};

export default Header;
