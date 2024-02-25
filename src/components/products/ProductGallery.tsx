"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { cleanUpImageUrl, cn, generateRandomString } from "@/lib/utils";
import "swiper/css";
import OpenGallery from "@/assets/images/open-gallery.png";
import ImageWithFallback from "../ui/ImageWithFallback";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function ProductGallery({ images }) {
  const [swiper, setSwiper] = useState(null);

  const [open, setOpen] = useState(false);

  const slides = images?.map((image, index) => {
    const imageURL = cleanUpImageUrl(image);

    return {
      src: imageURL,
      alt: "title",
    };
  });

  return (
    <section className="">
      <div className="">
        <Swiper
          spaceBetween={10}
          onSwiper={setSwiper}
          className="h-800 w-800 w-full rounded-sm"
        >
          {images?.map((image, index) => {
            const imageURL = cleanUpImageUrl(image);

            return (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full items-center justify-centerx relative">
                  <ImageWithFallback
                    className="block h-full w-full object-cover"
                    src={imageURL}
                    fallbackImage={
                      "https://picsum.photos/800/800?random=" +
                      generateRandomString()
                    }
                    width={800}
                    height={800}
                    alt="title"
                  />

                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="absolute bottom-2 right-2  text-black p-2 text-xs font-bold  hover:bg-white"
                  >
                    <Image src={OpenGallery} alt="Open Gallery" />
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index = {swiper?.activeIndex}
          slides={slides}
          plugins={[Zoom]}
        />

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
                    className="relative block h-300 w-300 overflow-hidden rounded-sm"
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
