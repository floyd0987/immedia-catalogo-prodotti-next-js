import ProductDetail from "@/components/products/ProductDetail";
import ProductsList from "@/components/products/ProductsList";
import React from "react";

const Product = async (props: { params: { id: any; }; }) => {
  const { id } = props.params;

  const response = await fetch(
    "https://api.escuelajs.co/api/v1/products/" + id
  );
  const data = await response.json();

  return (
    <main className="pt-16">
      <div className="container">
        <ProductDetail product={data} />
      </div>
    </main>
  );
};

export default Product;
