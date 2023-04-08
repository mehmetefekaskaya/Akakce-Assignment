export type Product = {
  name: string;
  imageUrl: string;
  countOfPrices: number;
  followCount: number;
  price: number;
  code: number;
};

export async function getProduct(code: number) {
  const response = await fetch(
    `https://mocki.io/v1/1a1fb542-22d1-4919-914a-750114879775?code=${code}`
  );

  const jsonData = await response.json();

  return jsonData;
}

export async function getProducts(
  url = "https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05"
) {
  const response = await fetch(url);

  const jsonData = await response.json();

  return jsonData;
}

export type ProductsResponse = { products: Product[]; nextUrl: string };
