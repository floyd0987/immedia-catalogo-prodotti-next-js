import Image from "next/image";
import React from "react";
import placeholder from "@/assets/images/placeholder.png";
import { cleanUpImageUrl, generateRandomCode } from "@/lib/utils";
import ProductGallery from "./ProductGallery";
import Breacrumbs from "./Breadcrumbs";
import Mask from "@/assets/images/Mask.png";
import Feature from "@/assets/images/feature.png";

import MisuraSelect from "./MisuraSelect";

type Props = {
  product: any;
};

const ProductDetail = (props: Props) => {
  const { product } = props;

  const imageURL = cleanUpImageUrl(product?.images?.[0] || "");

  return (
    <div className="mx-auto">
      <div className="md:flex md:justify-center">
        <div className="md:w-1/2 md:order-1 mb-4 md:mb-0">
          <div className="gallery-container">
            <ProductGallery images={product.images} />
          </div>
        </div>

        <div className="md:w-1/2 md:order-2 md:pl-1">
          <div className="product-details">
            <div className="px-6 py-2">
              <Breacrumbs product={product} />

              <p className="font-bold text-gray-700 text-sm capitalize my-4">
                {product.category?.name}
              </p>

              <div className="font-black text-4xl my-4">{product?.title}</div>

              <div className="text-xs my-2">Codice: {generateRandomCode()}</div>
              <div className="text-xs my-2">Garanzia: 24 mesi</div>

              {/* <p className="text-red-600 text-lg my-6">
                {product.price?.toLocaleString("it-IT", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                €
              </p> */}

              <div className="text-[#509C50] text-sm flex gap-3 border-y	py-2 my-8">
                <Image
                  src={Mask}
                  className="mx-2"
                  width={17}
                  height={14}
                  alt="mask"
                />{" "}
                <span>Disponibile</span>
              </div>

              <div className="flex justify-between	my-4">
                <div className="flex">
                  <div className="text-xs p-3">MISURA</div>
                  <MisuraSelect />
                </div>

                <button className="bg-[#000] text-xs text-white px-4 py-2 rounded-sm uppercase">
                  Aggiungi al carrello
                </button>
              </div>

              <div className="my-8">
                <div className="text-sm uppercase">Punti di forza</div>
                <div className="bg-[#F8F8F8]">
                  <div className="text-sm font-bold my-2 p-4 border-b flex gap-2">
                    <Image src={Feature} width={20} height={15} alt="feature" />
                    Robuste e resistenti
                  </div>
                  <div className="text-sm font-bold my-2 p-4 border-b flex gap-2">
                    <Image src={Feature} width={20} height={15} alt="feature" />
                    Lorem Ipsum
                  </div>
                  <div className="text-sm font-bold my-2 p-4 border-b flex gap-2">
                    <Image src={Feature} width={20} height={15} alt="feature" />
                    Sit dolor amet neque
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-10">
        <div className="font-extrabold text-3xl my-2">Descrizione</div>

        <div className="my-4">{product.description}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
