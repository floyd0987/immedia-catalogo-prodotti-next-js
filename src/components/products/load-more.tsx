"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@/components/ui/spinner";
import getProducts from "@/app/products/actions";
import { Product } from "@/types";

import ProductsList from "./ProductsList";

export function LoadMore({ categoryId, price_min, price_max }) {
  const [data, setdata] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [showSpinner, setShowSpinner] = useState(true);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreData = async () => {
    // Once the page 8 is reached repeat the process all over again.
    await delay(200);
    const nextPage = page + 1;
    console.log("🚀 ~ loadMoreData ~ page:", page);
    console.log("🚀 ~ loadMoreData ~ nextPage:", nextPage);

    const newProducts =
      (await getProducts(categoryId, price_min, price_max, nextPage)) ?? [];

    if (!newProducts.length) {
      setShowSpinner(false);
    }

    setdata((prevProducts: Product[]) => [...prevProducts, ...newProducts]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreData();
    }
  }, [inView]);

  return (
    <>
      <ProductsList products={data} isLoadMore={true} />
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        {showSpinner && <Spinner />}
      </div>
    </>
  );
}
