import ProductsList from "@/components/products/ProductsList";
import React from "react";
import getProducts from "../../actions";
import { LoadMore } from "@/components/products/load-more";
import SortBar from "@/components/products/SortBar";
import Link from "next/link";
import Filters from "@/components/products/Filters";

interface PageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    price_min: number;
    price_max: number;
  };
}

interface BreadcrumbsProps {
  categoryName: string;
}

const ProductCategory = async ({ params, searchParams }: PageProps) => {
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

        <Filters categoryId={categoryId} />

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

const Breadcrumbs = ({ categoryName }: BreadcrumbsProps) => {
  return (
    <div className="text-xs text-gray-400 mb-4	">
      <Link href="/">Home</Link>
      <span className="mx-2"> / </span>
      <span className="capitalize">{categoryName}</span>
    </div>
  );
};
