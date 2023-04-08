type ProductMetaProps = {
  mkName: string;
  productName: string;
};
export default function ProductMeta({ mkName, productName }: ProductMetaProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p className="mt-2 text-gray-700">{mkName}</p>
      <h1 className="border-b-2 text-xl">{productName}</h1>
    </div>
  );
}
