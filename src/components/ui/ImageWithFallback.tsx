"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const ImageWithFallback = ({ fallbackImage, alt, src, ...props }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <div className="relative">
      <Image
        alt={alt}
        onError={setError}
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
