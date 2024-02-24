import Image from "next/image";
import image1 from "@/assets/images/01.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="mx-auto py-8">
        <div className="md:flex md:justify-center">
          <div className="md:w-1/2 md:order-1 mb-4 md:mb-0">
            <Link href={`/products`}>
              <Image src={image1} alt="image1" width={1600} height={500} />
            </Link>
          </div>

          <div className="md:w-1/2 md:order-2 md:pl-1 bg-[#e22214]">
            <div className="product-details ">
              <div className="px-8 py-8">
                <Link
                  href={`/products`}
                  className="text-2xl font-extrabold text-white"
                >
                  Dunk Low Retro
                </Link>

                <div className="text-white my-4 text-md">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
                  quis dignissimos magni doloribus iure quia voluptates
                  provident maiores facere repudiandae neque ipsum ipsam, minima
                  quibusdam doloremque atque facilis itaque reiciendis.
                </div>

                <div className="mt-16" >
                  <Link href={`/products`}>
                    <button className="bg-white-500 hover:bg-gray-100 bg-white font-bold py-2 px-4 rounded-md text-xl text-[#666] font-extrabold">
                      Scopri tutti i nostri prodotti
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-16">
        <div className="text-center  text-3xl font-extrabold my-4">
          Benvenuto nello shop online
        </div>

        <div className="text-center  text  my-8 container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum
        </div>
      </div>
    </div>
  );
}
