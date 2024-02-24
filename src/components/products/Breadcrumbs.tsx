import Link from "next/link";
import React from "react";

const Breadcrumbs = ({ product }) => {
  return (
    <div className="text-xs text-gray-400 mb-4	">
      <Link href="/">Home</Link>
      <span className="mx-2"> / </span>
      <Link href={`/products/category/${product.category?.id}`}>
        {product.category?.name}
      </Link>
      <span className="mx-2"> / </span>
      <span>{product.title}</span>
    </div>
  );
};

export default Breadcrumbs;
