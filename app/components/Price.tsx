type PriceProps = {
  price: number;
};

export default function Price({ price }: PriceProps) {
  const splitThousand = (price: number): string =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  let afterDot = ",00";
  let beforeDot: string = "";
  const seperatePrice = (): void => {
    if (price.toString().includes(".")) {
      const newPrice = price.toString().replace(".", ",");
      afterDot = newPrice.slice(-3);
      beforeDot = splitThousand(Number(newPrice.slice(0, -3)));
    } else {
      beforeDot = splitThousand(Number(price));
    }
  };
  seperatePrice();
  return (
    <div className="flex">
      <p className="mt-2 text-3xl font-extrabold" style={{ color: "#000" }}>
        {beforeDot}
      </p>
      <p
        className="flex items-center text-sm font-medium"
        style={{ alignItems: "end" }}
      >
        {afterDot}
      </p>{" "}
      &nbsp;
      <p
        className="flex items-center text-sm font-medium"
        style={{ alignItems: "end" }}
      >
        TL
      </p>
    </div>
  );
}
