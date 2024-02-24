import React from "react";
import Image from "next/image";
import User from "@/assets/images/user.png";
import Heart from "@/assets/images/heart.png";
import Cart from "@/assets/images/cart.png";

const RightBar = () => {
  return (
    <div className="flex gap-5">
      <div>
        <Image src={User} alt="user" />
      </div>

      <div>
        <Image src={Heart} alt="Heart" />
      </div>

      <div>
        <Image src={Cart} alt="Cart" />
      </div>
    </div>
  );
};

export default RightBar;
