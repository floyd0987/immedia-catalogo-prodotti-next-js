import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const FooterMenu = () => {
 
  const footerItems = [
    {
      "id": 0,
      "title": "Home",
      "url": "/"
    },
    {
      "id": 1,
      "title": "Chi siamo",
      "url": "/chi-siamo"
    },
    {
      "id": 2,
      "title": "Contatti",
      "url": "/contatti"
    },
    {
      "id": 3,
      "title": "Lavora con noi",
      "url": "/lavora-con-noi"
    },
    {
      "id": 4,
      "title": "Condizioni di vendita",
      "url": "/condizioni-di-vendita"
    },
    {
      "id": 5,
      "title": "Pagamenti",
      "url": "/pagamenti"
    },
    {
      "id": 6,
      "title": "Certificazioni",
      "url": "/certificazioni"
    },
    {
      "id": 7,
      "title": "Sitemap",
      "url": "/sitemap"
    },
    {
      "id": 8,
      "title": "Privacy Policy",
      "url": "/privacy-policy"
    },
    {
      "id": 9,
      "title": "Cookie Policy",
      "url": "/cookie-policy"
    },
    {
      "id": 10,
      "title": "Credits",
      "url": "/credits"
    }
]


  return (
    <div className="bg-[#EDEDED]">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between py-10">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          <div className="text-xs flex items-baseline space-x-4 text-right">
            <ul className="footer-menu">
              {footerItems.map((item, index) => {
                return (
                  <li key={index} className="mb-2 mx-4">
                    <Link href={item.url} key={index}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
