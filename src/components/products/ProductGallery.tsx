"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { cleanUpImageUrl, cn, generateRandomString } from "@/lib/utils";

import "swiper/css";
import placeholder from "@/assets/images/placeholder.png";
import ImageWithFallback from "../ui/ImageWithFallback";

// const images = [
//   "https://images.unsplash.com/photo-1707343844436-37580f155ed2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1707727726616-2db19ad7e6b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

export default function ProductGallery({ images }) {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="">
      <div className="">
        <Swiper
          spaceBetween={10}
          onSwiper={setSwiper}
          className="h-300 w-300 w-full rounded-sm"
        >
          {images?.map((image, index) => {
            const imageURL = cleanUpImageUrl(image);

            return (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full items-center justify-centerx">
                  <ImageWithFallback
                    className="block h-full w-full object-cover"
                    src={imageURL}
                    fallbackImage={
                      "https://picsum.photos/300/300?random=" +
                      generateRandomString()
                    }
                    width={800}
                    height={800}
                    alt="title"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <nav className={cn("my-4")}>
          <ul className="flex gap-4">
            {images?.map((image, index) => {
              const imageURL = cleanUpImageUrl(image);

              return (
                <li key={index}>
                  <button
                    onClick={() => {
                      swiper.slideTo(index);
                    }}
                    className="relative block h-200 w-200 overflow-hidden rounded-sm"
                  >
                    <ImageWithFallback
                      className="block h-full w-full object-cover"
                      src={imageURL}
                      fallbackImage={
                        "https://picsum.photos/300/300?random=" +
                        generateRandomString()
                      }
                      width={300}
                      height={300}
                      alt="title"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
