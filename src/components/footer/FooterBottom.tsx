import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  American,
  CartaSi,
  Maestro,
  Mastercard,
  Paypal,
  PostePay,
  Visa,
  VisaElectron,
} from "@/assets/images/payments";

const FooterBottom = () => {
  return (
    <div className="">

      <div className="payments  text-xs p-2 text-center border-b">
        
        <div className="container flex gap-5 py-2 ">
          <Image src={VisaElectron} alt="visa_electron" height={16} />
          <Image src={Maestro} alt="maestro" height={16} />
          <Image src={American} alt="american" height={16} />
          <Image src={Paypal} alt="paypal" height={16} />
          <Image src={PostePay} alt="postepay" height={16} />
          <Image src={CartaSi} alt="cartasi" height={16} />
          <Image src={Visa} alt="visa" height={16} />
          <Image src={Mastercard} alt="mastercard" height={16} />
        </div>
      </div>

      <div className="container text-xs p-4 text-center">
        © 2023 Logo – Via delle Albere 13, 36045 Vicenza P.IVA 00589040245 –
        Registro Imprese di Vicenza: n. 00589040245 – Rea vi: 139951 Capitale
        sociale: € 10.000.000 i.v.
      </div>
    </div>
  );
};

export default FooterBottom;
