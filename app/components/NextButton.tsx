import React from "react";
type NextButtonProps = {
  onNextSection: React.MouseEventHandler;
};
export default function NextButton({ onNextSection }: NextButtonProps) {
  return (
    <div className="flex justify-center pb-16 pt-8">
      <div className="grid grid-cols-2 gap-10">
        <button onClick={onNextSection}>Next</button>
      </div>
    </div>
  );
}
