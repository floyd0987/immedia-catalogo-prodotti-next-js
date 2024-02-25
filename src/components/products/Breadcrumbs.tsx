import Link from "next/link";
import React from "react";

interface Product {
  category?: {
    id: string;
    name: string;
  };
  title: string;
}

interface BreadcrumbsProps {
  product: Product;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ product }) => {
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
