import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Heart from "@/assets/images/heart.png";
import { cleanUpImageUrl, generateRandomString, truncate } from "@/lib/utils";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

type Props = {
  product: any;
};

const ProductCard = (props: Props) => {
  const { product } = props;

  const imageURL = cleanUpImageUrl(product?.images[0]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center relative">
      <Link href={`/products/${product.id}`}>
        <ImageWithFallback
          className="w-full"
          src={imageURL}
          fallbackImage={
            "https://picsum.photos/300/300?random=" + generateRandomString()
          }
          width={289}
          height={220}
          alt={product.title}
        />
      </Link>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-xs my-2">{product.category.name}</p>

        <Link href={`/products/${product.id}`}>
          <div className="font-bold text-xl my-2">{product.title}</div>
        </Link>

        <p className="text-gray-700 text-sm">
          {truncate(product.description, 70)}
        </p>
      </div>

      <span className="absolute top-2 right-2 bg-gray-100 text-black p-2 text-xs font-bold rounded-full hover:bg-white">
        <Image src={Heart} width={17} height={17} alt="heart" />
      </span>
    </div>
  );
};

export default ProductCard;
