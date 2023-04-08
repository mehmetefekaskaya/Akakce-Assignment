type ProductImageProps = {
  imageUrl: string;
  name: string;
  imgClasses: string;
};
export default function ProductImage({
  imageUrl,
  name,
  imgClasses,
}: ProductImageProps) {
  return (
    <div className="aspect-w-10 aspect-h-8 group mt-2 block w-full overflow-hidden rounded-lg bg-gray-100 transition duration-200 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 hover:scale-105">
      <img src={imageUrl} alt={name} className={imgClasses} />
    </div>
  );
}
