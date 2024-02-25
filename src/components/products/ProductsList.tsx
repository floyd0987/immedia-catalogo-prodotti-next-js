import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ProductsList = (props: Props) => {
  const { products, categoryId, isLoadMore } = props;

  return (
    <div className="catalog-page">
      <div className="container mx-auto mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="container">{!isLoadMore && "Nessun risultato"}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
