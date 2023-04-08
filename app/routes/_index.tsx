import { useState } from "react";
import { useLoaderData } from "@remix-run/react";

import Products from "~/components/Products";
import type { Product } from "~/models/product.server";

import { getProducts } from "~/models/product.server";
import NextButton from "~/components/NextButton";

export const loader = async () => {
  const result = await getProducts();

  return result;
};

const fetchProducts = async (url: string) => {
  const response = await fetch(url);

  const { result } = await response.json();

  return result;
};

export default function Index() {
  const {
    result: { products, nextUrl },
  } = useLoaderData<typeof loader>();

  const [newProducts, setNewProducts] = useState(products);
  const [newNextUrl, setNewNextUrl] = useState(nextUrl);

  const getNextProducts = async () => {
    const newResult = await fetchProducts(newNextUrl);

    setNewNextUrl(newResult.nextUrl);
    setNewProducts((prevProducts: Product[]) => {
      return [...prevProducts, ...newResult.products];
    });
  };

  return (
    <>
      <Products products={newProducts} />
      {newNextUrl && <NextButton onNextSection={getNextProducts} />}
    </>
  );
}
