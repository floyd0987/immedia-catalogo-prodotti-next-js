import ProductsList from "@/components/products/ProductsList";
import React from "react";
import getProducts from "./actions";
import { LoadMore } from "@/components/products/load-more";
import CategoryFilter from "@/components/products/CategoryFilter";
import PriceRangeFilter from "@/components/products/PriceRangeFilter";
import SortBar from "@/components/products/SortBar";
import Breadcrumbs from "@/components/products/Breadcrumbs";

// interface Props {
//   searchParams: {
//     price_min: string;
//     price_max: string;
//   };
// }

const Products: React.FC<Props> = async ({ params, searchParams }) => {
  const { categoryId } = params;
  const { price_min, price_max } = searchParams;

  const data = await getProducts(categoryId, price_min, price_max, 0);

  return (
    <main className="pt-8 px-5">
      <div className="container mx-auto">
        <h1 className="text-3xl font-extrabold mb-7">Prodotti</h1>

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
