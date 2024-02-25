"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PriceRangeFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(400);

  const priceRanges = [
    { value: 10, name: "€ 10" },
    { value: 20, name: "€ 20" },
    { value: 30, name: "€ 30" },
    { value: 50, name: "€ 50" },
    { value: 100, name: "€ 100" },
    { value: 150, name: "€ 150" },
    { value: 200, name: "€ 200" },
    { value: 300, name: "€ 300" },
    { value: 400, name: "€ 400" },
  ];

  useEffect(() => {
    if (priceMin || priceMax) {
      router.push(`${pathname}?price_min=${priceMin}&price_max=${priceMax}`);
    }
  }, [priceMin, priceMax]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="mb-4 md:mb-0 w-full md:w-auto mr-4">
        <Select onValueChange={(value) => setPriceMin(Number(value))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Prezzo minimo" />
          </SelectTrigger>
          <SelectContent>
            {priceRanges.filter(item=> item.value < priceMax).map((priceRange: any) => (
              <SelectItem value={priceRange.value} key={priceRange.value}>
                {priceRange.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="w-full md:w-auto">
        <Select onValueChange={(value) => setPriceMax(Number(value))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Prezzo massimo" />
          </SelectTrigger>
          <SelectContent>
            {priceRanges.filter(item=> item.value > priceMin).map((priceRange: any) => (
              <SelectItem value={priceRange.value} key={priceRange.value}>
                {priceRange.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
