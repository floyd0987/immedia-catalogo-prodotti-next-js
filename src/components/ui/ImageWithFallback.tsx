"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageWithFallbackProps {
  fallbackImage: string;
  alt: string;
  src: string;
  [x: string]: any;
}

const ImageWithFallback = ({
  fallbackImage,
  alt,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  const handleImageError = () => {
    setError(true);
  };

  return (
    <div className="relative">
      <Image
        alt={alt}
        onError={handleImageError}
        src={error ? fallbackImage : src}
        {...props}
      />

      {error && (
        <span className="absolute bottom-2 left-2 bg-gray-200 text-black px-2 py-1 text-xs font-bold">
          Novità
        </span>
      )}
    </div>
  );
};

export default ImageWithFallback;
