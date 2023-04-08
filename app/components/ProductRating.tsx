type ProductRatingProp = {
  rating: number;
};
export default function ProductRating({ rating }: ProductRatingProp) {
  return (
    <div className="ratings mt-2">
      <div className="empty-stars"></div>
      <div
        className="full-stars"
        style={{ width: `calc((100% * ${rating}) / 5)` }}
      ></div>
    </div>
  );
}
