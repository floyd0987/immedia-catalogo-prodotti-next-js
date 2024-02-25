import ProductsList from "@/components/products/ProductsList";
import React from "react";
import getProducts from "./actions";
import { LoadMore } from "@/components/products/load-more";
import CategoryFilter from "@/components/products/CategoryFilter";
import PriceRangeFilter from "@/components/products/PriceRangeFilter";
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
  pageName: string;
}

const Products = async ({ params, searchParams }: PageProps) => {
  const { categoryId } = params;
  const { price_min, price_max } = searchParams;

  const data = await getProducts(categoryId, price_min, price_max, 0);

  const pageName = data[0]?.category?.name;

  return (
    <main className="pt-8 px-5">
      <div className="container mx-auto">
        <Breadcrumbs pageName="Prodotti" />

        <h1 className="text-3xl font-extrabold mb-7">Prodotti</h1>

        <Filters categoryId={categoryId} />

        <SortBar />
      </div>

      <ProductsList products={data} />
      <LoadMore
        categoryId={categoryId}
        price_min={price_min}
        price_max={price_max}
      />
    </main>
  );
};

export default Products;

const Breadcrumbs = ({ pageName }: BreadcrumbsProps) => {
  return (
    <div className="text-xs text-gray-400 mb-4	">
      <Link href="/">Home</Link>
      <span className="mx-2"> / </span>
      <span className="capitalize">{pageName}</span>
    </div>
  );
};
