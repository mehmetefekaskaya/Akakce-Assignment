import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import Options from "~/components/Options";
import Price from "~/components/Price";
import ProductImage from "~/components/ProductImage";
import ProductMeta from "~/components/ProductMeta";
import ProductRating from "~/components/ProductRating";

import { getProduct } from "~/models/product.server";

import styles from "~/styles/product.css";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.product, `Product code is required`);

  const product = await getProduct(Number(params.product));

  invariant(product, `Product not found: ${params.product}`);
  return product;
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Product() {
  const { result: product } = useLoaderData<typeof loader>();

  return (
    <main className="mx-auto max-w-4xl">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ProductMeta
          mkName={product.mkName}
          productName={product.productName}
        />
        <ProductRating rating={product.rating} />
      </div>
      <span className="badge-bg">{product.badge}</span>

      <ProductImage
        name={product.name}
        imageUrl={product.imageUrl}
        imgClasses="object-cover group-hover:opacity-75 mx-auto"
      />
      <Options options={product.storageOptions} title="Kapasite Seçenekleri" />
      <div className="my-6 text-center">
        <strong>
          {product.countOfPrices} satıcı içinde kargo dahil en ucuz fiyat
          seçeneği
        </strong>
      </div>
      <div className="flex justify-center">
        <Price price={product.price} />
      </div>
      <p className="mt-2 text-center font-extrabold" style={{ color: "green" }}>
        Ücretsiz Kargo
      </p>
      <p className="mt-2 text-center text-gray-700">
        Son Güncelleme: {product.lastUpdate}
      </p>
    </main>
  );
}
