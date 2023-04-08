import { Link } from "@remix-run/react";
import Price from "~/components/Price";

import type { Product } from "~/models/product.server";
import ProductImage from "./ProductImage";

type ProductsProps = {
  products: Product[];
};

export default function Products({ products }: ProductsProps) {
  return (
    <main className="flex justify-center pb-16">
      <ul className="grid grid-cols-2 gap-8">
        {products?.map((product: Product) => (
          <li key={product.code} className="relative">
            <Link to={`/${product.code}`}>
              <ProductImage
                imageUrl={product.imageUrl}
                name={product.name}
                imgClasses="object-cover group-hover:opacity-75"
              />
              <p className="mt-2 block truncate text-sm font-medium text-gray-500">
                {product.name}
              </p>
              <Price price={product.price} />
              <p className="mt-2 block truncate text-sm font-medium text-gray-700">
                {product.countOfPrices} satıcı &#8827;
              </p>
              {product.followCount && (
                <p className="mt-2 block truncate text-sm font-medium text-gray-700">
                  {product.followCount} takip
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
