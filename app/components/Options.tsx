type OptionsProps = {
  options: string[];
  title: string;
};
export default function Options({ options, title }: OptionsProps) {
  return (
    <div className="mt-2" style={{ display: "flex", flexDirection: "column" }}>
      <span className="mx-auto">{title}</span>{" "}
      <div
        className="mx-auto mt-2 inline-flex shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        role="group"
      >
        {options.map((option: string, index: number) => (
          <button
            key={index}
            type="button"
            className="inline-block rounded-l px-6 pb-2 pt-2.5 text-lg uppercase"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
