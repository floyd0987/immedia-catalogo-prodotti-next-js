import ProductsList from "@/components/products/ProductsList";
import React from "react";
import getProducts from "../../actions";
import { LoadMore } from "@/components/products/load-more";
import CategoryFilter from "@/components/products/CategoryFilter";
import PriceRangeFilter from "@/components/products/PriceRangeFilter";
import SortBar from "@/components/products/SortBar";
import Link from "next/link";

const ProductCategory: React.FC<Props> = async ({ params, searchParams }) => {
  const { categoryId } = params;
  const { price_min, price_max } = searchParams;

  const data = await getProducts(categoryId, price_min, price_max, 0);
  const categoryName = data[0]?.category?.name;

  return (
    <main className="pt-8 px-5">
      <div className="container mx-auto">
        <Breadcrumbs categoryName={categoryName} />

        <h1 className="text-3xl font-extrabold mb-7 capitalize">
          {categoryName}
        </h1>

        <div className="my-4">
          <div className="flex flex-row">
            <div className="basis-1/8">
              {" "}
              <CategoryFilter categoryId={categoryId} />
            </div>
            <div className="basis-1/4 px-4">
              {" "}
              <PriceRangeFilter />
            </div>
          </div>
        </div>

        <SortBar />
      </div>

      <ProductsList products={data} categoryId={categoryId} />
      <LoadMore
        categoryId={categoryId}
        price_min={price_min}
        price_max={price_max}
      />
    </main>
  );
};

export default ProductCategory;

const Breadcrumbs = ({ categoryName }) => {
  return (
    <div className="text-xs text-gray-400 mb-4	">
      <Link href="/">Home</Link>
      <span className="mx-2"> / </span>
      <span className="capitalize">{categoryName}</span>
    </div>
  );
};
